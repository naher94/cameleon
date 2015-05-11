
var score = 0;
var foundLeft = false;
var foundRight = false;
var background;

/*VARS FOR TRIAD*/
var arr = new Array(20); //Makes array to house each of the rotation circles

var sel = new Array(0,10,11,12,13,14,16,17,18,19);
var leftArr = new Array(16,17,18,19,0);
var rightArr = new Array(10,11,12,13,14);
var master;
var master1;
var master0;
var tetrad;
var triad;
/*VARS FOR TRIAD*/
var bottomArr = new Array(13,14,15,16,17);

function removeChecks()
{
  $(".circle").children().remove();
  $(".circle").attr('id', '');
}

function clearBoard()
{
  for (var i = 0; i <= arr.length - 1; i++) 
  {
    $(arr[i]).children().css("background-color","white");
  };
  $(arr[4]).children().removeClass("master")
  $(arr[5]).children().removeClass("master")
  $(arr[6]).children().removeClass("master")
}

function colorizeTriad(arr,leftArr,rightArr,master)
{
  var master = 5;
  removeChecks();
  var masterColor = colorRandNum();
  var triadArray = tinycolor(masterColor).triad();//returns array [original,left,right] //TRIAD ONLY

  $(arr[master]).children().css ("background-color",masterColor)
  $(arr[master]).children().addClass("master")
  $(arr[master]).children().addClass("shown")

  var left = triadArray[1].toHexString(); //MODIFY FOR ALL COLOR RULES
  var right = triadArray[2].toHexString(); //MODIFY FOR ALL COLOR RULES

  //Returns a random integer between min (inclusive) and max (exclusive)
  var leftAnsIndex = Math.floor(Math.random() * leftArr.length);
  var rightAnsIndex = Math.floor(Math.random() * rightArr.length);

  $(arr[leftArr[leftAnsIndex]]).children().attr('id','leftAns');
  $(arr[rightArr[rightAnsIndex]]).children().attr('id','rightAns');
  $(arr[leftArr[leftAnsIndex]]).children().css("background-color",left);//16 - 19 & 0
  $(arr[rightArr[rightAnsIndex]]).children().css("background-color",right);//10 - 14
  $(arr[leftArr[leftAnsIndex]]).children().addClass("shown");
  $(arr[rightArr[rightAnsIndex]]).children().addClass("shown");

  /* console.log("Left INDEX: "+leftAnsIndex);//should not be higher than 4 (0-4)
  console.log("Right INDEX: "+rightAnsIndex);
  console.log("Answer Left (Div #): "+leftArr[leftAnsIndex]);
  console.log("Answer Right (Div #): "+rightArr[rightAnsIndex]); */

  var leftOther = [];
  var rightOther = [];

  for (var i = 0; i < leftArr.length-1; i++)
  {
    leftOther[i] = colorRandNum();
    rightOther[i] = colorRandNum();
  }

  var counter = 0;//separate var to fix off by one when "if" is not executed
  for (var i = 0; i<= leftArr.length; i++)
  {
    if (leftArr[leftAnsIndex] != leftArr[i]) 
    {
      $(arr[leftArr[i]]).children().css("background-color",leftOther[counter])
      $(arr[leftArr[i]]).children().addClass("shown")
      counter++;
    }
  };

  counter = 0;
  for (var i = 0; i<= rightArr.length; i++)
  {
    if (rightArr[rightAnsIndex] != rightArr[i]) 
    {
      $(arr[rightArr[i]]).children().css("background-color",rightOther[counter])
      $(arr[rightArr[i]]).children().addClass("shown")
      counter++;
    }
  };
}

function colorizeTetrad(arr,leftArr,rightArr,master)
{
  var master0 = 4;
  var master1 = 6; 
  removeChecks();
  var masterColor = colorRandNum();
  var tetradArray = tinycolor(masterColor).tetrad();//returns array [original,master1,other,other]

  //master
  $(arr[master0]).children().css ("background-color",masterColor)
  $(arr[master0]).children().addClass("master")
  $(arr[master0]).children().addClass("shown")

  //master1
  $(arr[master1]).children().css ("background-color",tetradArray[1])
  $(arr[master1]).children().addClass("master")
  $(arr[master1]).children().addClass("shown")

  var left = tetradArray[2].toHexString(); //MODIFY FOR ALL COLOR RULES
  var right = tetradArray[3].toHexString(); //MODIFY FOR ALL COLOR RULES

  //Returns a random integer between min (inclusive) and max (exclusive)
  var leftAnsIndex = Math.floor(Math.random() * leftArr.length);
  var rightAnsIndex = Math.floor(Math.random() * rightArr.length);

  $(arr[leftArr[leftAnsIndex]]).children().attr('id','leftAns');
  $(arr[rightArr[rightAnsIndex]]).children().attr('id','rightAns');
  $(arr[leftArr[leftAnsIndex]]).children().css("background-color",left);//16 - 19 & 0
  $(arr[rightArr[rightAnsIndex]]).children().css("background-color",right);//10 - 14
  $(arr[leftArr[leftAnsIndex]]).children().addClass("shown");
  $(arr[rightArr[rightAnsIndex]]).children().addClass("shown");

  var leftOther = [];
  var rightOther = [];

  for (var i = 0; i < leftArr.length-1; i++)
  {
    leftOther[i] = colorRandNum();
    rightOther[i] = colorRandNum();
  }

  var counter = 0;//separate var to fix off by one when "if" is not executed
  for (var i = 0; i<= leftArr.length; i++)
  {
    if (leftArr[leftAnsIndex] != leftArr[i]) 
    {
      $(arr[leftArr[i]]).children().css("background-color",leftOther[counter])
      $(arr[leftArr[i]]).children().addClass("shown")
      counter++;
    }
  };

  counter = 0;
  for (var i = 0; i<= rightArr.length; i++)
  {
    if (rightArr[rightAnsIndex] != rightArr[i]) 
    {
      $(arr[rightArr[i]]).children().css("background-color",rightOther[counter])
      $(arr[rightArr[i]]).children().addClass("shown")
      counter++;
    }
  };
}

function colorizeComplement(arr,bottomArr,master)
{
  var master = 5;
  removeChecks();
  var masterColor = colorRandNum();
  var complement = tinycolor(masterColor).complement();//returns the complement color

  $(arr[master]).children().css ("background-color",masterColor)
  $(arr[master]).children().addClass("master")
  $(arr[master]).children().addClass("shown")


  var bottom = complement.toHexString();

  //Returns a random integer between min (inclusive) and max (exclusive)
  var AnsIndex = Math.floor(Math.random() * bottomArr.length);

  $(arr[bottomArr[AnsIndex]]).children().attr('id','Ans');
  $(arr[bottomArr[AnsIndex]]).children().css("background-color",bottom);
  $(arr[bottomArr[AnsIndex]]).children().addClass("shown");

  var bottomOther = [];

  for (var i = 0; i < bottomArr.length-1; i++)
  {
    bottomOther[i] = colorRandNum();
  }

  var counter = 0;//separate var to fix off by one when "if" is not executed
  for (var i = 0; i<= bottomArr.length; i++)
  {
    if (bottomArr[AnsIndex] != bottomArr[i]) 
    {
      $(arr[bottomArr[i]]).children().css("background-color",bottomOther[counter])
      $(arr[bottomArr[i]]).children().addClass("shown")
      counter++;
    }
  };
}

function colorRandNum()
{
  var index = Math.floor((Math.random() * names.length));
  background = names[index][0];
  return background;
}

function makeColorWheel()
{
	var w = $('#wheel').width()
	for (var i = 0; i <= arr.length - 1; i++) 
	{
		var elem = document.createElement('div');
		var cir = document.createElement('div');
		$(cir).addClass("circle");
		$(elem).addClass("rotate");
		arr[i] = elem;
		$(arr[i]).append(cir);
		$(arr[i]).css("rotate",(360/arr.length)*i);
		$(arr[i]).css("width",w/2)
		$("#wheel").append(arr[i]);
	};
}

function isIn (i,sel) 
{
	for (var q = 0; q <= sel.length - 1; q++)
  { 
		if (sel[q]==i) {return true};
	};
	return false;
}

function clickHandler() 
{
  var myId = $(this).attr("id")
  if($(this).has('.notation').length === 0)
  {
    if (myId === "leftAns") 
    {
      //console.log("WIN (left)");
      score = score + 1;
      $(".score").text(score)
      foundLeft = true;
      $(this).append("<img class='notation' src='check.svg'>");

    }
    else if (myId === "rightAns") 
    {
      //console.log("WIN (right)");
      score = score + 1;
      $(".score").text(score)
      foundRight = true;
      $(this).append("<img class='notation' src='check.svg'>");
    }
    else if (myId === "Ans")
    {
      //console.log("WIN (Bottom)")
      score = score + 1;
      $(".score").text(score)
      $(this).append("<img class='notation' src='check.svg'>");
      colorizeComplement(arr,bottomArr,master)
    }
    else 
    {
      //console.log("Wrong")
      score = score - 1;
      $(".score").text(score)
      //check so only one appears and CSS so centered //DISABLE ON MASTER
      $(this).append("<img class='notation' src='times.svg'>");
    }
  }
  if (foundLeft && foundRight && triad) 
  {
    //onsole.log("WIN (Next Level");
    foundRight = foundLeft = triad = false;
    colorizeTriad(arr,leftArr,rightArr,master);
  }
  if (foundLeft && foundRight && tetrad) 
  {
    foundRight = foundLeft = tetrad = false;
    colorizeTetrad(arr,leftArr,rightArr,master);
  }
}

/*function SVG()
{
  var wWidth = $(window).width();
  box1width = (Math.random() * (wWidth)).toString()
  box2width = (Math.random() * (wWidth-box1width)).toString()
  box3width = (Math.random() * (wWidth-box2width)).toString()
  <svg width=var(box1width) height="100%" fill="red"></svg>
  <svg width=var(box2width) height="100%" fill="blue"></svg>
  <svg width=var(box3width) height="100%" fill="green"></svg>
}*/

function iconClickHandler() 
{
  var myId = $(this).attr("id")
  
  //different rules
  if (myId === "complementaryIcon") 
  {
    clearBoard();
    colorizeComplement(arr,bottomArr,master);
  }
  if (myId === "tetradIcon") 
  {
    clearBoard();
    tetrad = true;
    colorizeTetrad(arr,leftArr,rightArr,master);
  }
  if (myId === "triadIcon") 
  {
    clearBoard();
    triad = true;
    colorizeTriad(arr,leftArr,rightArr,master);
  }
  if (myId === "downloadIcon") 
  {
    //SVG();
  }
}

$(function() 
{
  makeColorWheel();
  colorizeTriad(arr,leftArr,rightArr,master);
  //colorizeTetrad(arr,leftArr,rightArr,master);
  //colorizeComplement(arr,bottomArr,master);
  $(".score").text(0);
  $('.circle').click(clickHandler);
  $('.icons').click(iconClickHandler);
})
