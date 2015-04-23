
var score = 0;
var foundLeft = false;
var foundRight = false;
var background;

var arr = new Array(20); //Makes array to house each of the rotation circles

var sel = new Array(0,10,11,12,13,14,16,17,18,19);
var leftArr = new Array(16,17,18,19,0);
var rightArr = new Array(10,11,12,13,14);
var master = 5;

function removeChecks()
{
  $(".circle").children().remove();
  $(".circle").attr('id', '');
}

function colorize(arr,leftArr,rightArr,master)
{
  removeChecks();
  var masterColor = colorRandNum();
  var triadArray = tinycolor(masterColor).triad();//returns array [original,left,right]

  $(arr[master]).children().css ("background-color",masterColor)
  $(arr[master]).children().addClass("master")
  $(arr[master]).children().addClass("shown")

  var left = triadArray[1].toHexString();
  var right = triadArray[2].toHexString();

  //Returns a random integer between min (inclusive) and max (exclusive)
  var leftAnsIndex = Math.floor(Math.random() * leftArr.length);
  var rightAnsIndex = Math.floor(Math.random() * rightArr.length);

  $(arr[leftArr[leftAnsIndex]]).children().attr('id','leftAns');
  $(arr[rightArr[rightAnsIndex]]).children().attr('id','rightAns');
  $(arr[leftArr[leftAnsIndex]]).children().css("background-color",left);//16 - 19 & 0
  $(arr[rightArr[rightAnsIndex]]).children().css("background-color",right);//10 - 14
  $(arr[leftArr[leftAnsIndex]]).children().addClass("shown");
  $(arr[rightArr[rightAnsIndex]]).children().addClass("shown");

  console.log("Left INDEX: "+leftAnsIndex);//should not be higher than 4 (0-4)
  console.log("Right INDEX: "+rightAnsIndex);
  console.log("Answer Left (Div #): "+leftArr[leftAnsIndex]);
  console.log("Answer Right (Div #): "+rightArr[rightAnsIndex]);

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

/*function colorRand(){
	var index = Math.floor((Math.random() * names.length));
	background = names[index][0];
	$("#circle").css("background", "#"+names[index][0]);
	return background;
}*/

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

  if (myId === "leftAns") 
  {
    console.log("WIN (left)");
    foundLeft = true;
    $(this).append("<i class='fa fa-check-circle fa-3x'></i>");

  }
  else if (myId === "rightAns") 
  {
    console.log("WIN (right)");
    foundRight = true;
    $(this).append("<i class='fa fa-check-circle fa-3x'></i>");
  }
  else 
  {
    console.log("Wrong")
    //check so only one appears and CSS so centered //DISABLE ON MASTER
    $(this).append("<i class='fa fa-times-circle fa-3x'></i>");
  }

  if (foundLeft && foundRight) 
  {
    console.log("WIN (Next Level");
    score = score + 1;
    $(".score").text(score)
    foundRight = foundLeft = false;
    colorize(arr,leftArr,rightArr,master);

  }
}

$(function() 
{
  makeColorWheel();
  colorize(arr,leftArr,rightArr,master);
  $(".score").text(0);
  $('.circle').click(clickHandler);
})
