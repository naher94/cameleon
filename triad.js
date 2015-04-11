
var background;
  	function colorRand()
  	{
  		var index = Math.floor((Math.random() * names.length));
  		background = names[index][0];
  		document.getElementById("circle").style.background = "#"+names[index][0];
  		return background;
  	}
    function colorRandNum()
    {
      var index = Math.floor((Math.random() * names.length));
      background = names[index][0];
      return background;
    }
    function rotateBox()
      {
      	var w = $('#wheel').width()
      	/*$('#rotate').css("rotate","90")*/
      	var arr = new Array(20); //Makes array to house each of the rotation circles
      	for (var i = 0; i <= arr.length - 1; i++) 
      	{
      		var elem = document.createElement('div');
      		var cir = document.createElement('div');
      		cir.setAttribute("id","circle");
      		elem.setAttribute("id", "rotate");
      		arr[i] = elem;
      		//console.log(arr[i]);
      		$(arr[i]).append(cir);
      		$(arr[i]).css("rotate",(360/arr.length)*i);
      		$(arr[i]).css("width",w/2)
      		$("#wheel").append(arr[i]);
      	};

      	var sel = new Array(0,10,11,12,13,14,16,17,18,19);
        var leftArr = new Array(16,17,18,19,0);
        var rightArr = new Array(10,11,12,13,14);
      	var master = 5;
      

      	for (var i = 0; i <= arr.length - 1; i++) 
      	{
      		if(isIn(i,sel))
      		{
      			$(arr[i]).children().css("background-color","#ff0000")
      		}
      	};
        var masterColor = colorRand();
        var triadArray = tinycolor(masterColor).triad();//returns array [original,left,right]
      	$(arr[master]).children().css ("background-color",masterColor)
      	$(arr[master]).children().css("width",100)
      	$(arr[master]).children().css("height",100)
        var left = triadArray[1].toHexString();
        var right = triadArray[2].toHexString();

        //Returns a random integer between min (inclusive) and max (exclusive)
        var leftIndex = Math.floor(Math.random() * (leftArr.length - 0)) + 0;
        var rightIndex = Math.floor(Math.random() * (rightArr.length - 0)) + 0;

        $(arr[leftArr[leftIndex]]).children().attr('id','leftAns');
        $(arr[rightArr[rightIndex]]).children().attr('id','rightAns');
        $(arr[leftArr[leftIndex]]).children().css("background-color",left);//16 - 19 & 0
<<<<<<< Updated upstream
        $(arr[rightArr[rightIndex]]).children().css("background-color",right);//10 - 14
=======
        $(arr[rightArr[rightIndex]]).children().css("background-color",right);

        $(arr[leftArr[leftIndex]]).children().attr('id','leftAns');//16 - 19 & 0
        $(arr[rightArr[rightIndex]]).children().attr('id','rightAns');//10 - 14
        
>>>>>>> Stashed changes
        console.log("Left INDEX: "+leftIndex);//should not be higher than 4 (0-4)
        console.log("Right INDEX: "+rightIndex);
        console.log("Answer Left (Div #): "+leftArr[leftIndex]);
        console.log("Answer Right (Div #): "+rightArr[rightIndex]);

        var leftOther = new Array(4);
        var rightOther = new Array(4);
        for (var i = 0; i <= 4; i++)
        {
          leftOther[i] = colorRandNum();
          rightOther[i] = colorRandNum();
        }
        //var leftOther = tinycolor(left).analogous(4,25);
        //var rightOther = tinycolor(right).analogous(4,35);

        var counter = 0;//separate var to fix off my one when "if" is not executed
        for (var i = 0; i<= leftArr.length; i++)
        {
          if (leftArr[leftIndex] != leftArr[i]) 
          {
            $(arr[leftArr[i]]).children().css("background-color",leftOther[counter])
            counter++;
          }
        };

        counter = 0;
        for (var i = 0; i<= rightArr.length; i++)
        {
          if (rightArr[rightIndex] != rightArr[i]) 
          {
            $(arr[rightArr[i]]).children().css("background-color",rightOther[counter])
            counter++;
          }
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
