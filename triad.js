
var background;
  	function colorRand()
  	{
  		var index = Math.floor((Math.random() * names.length));
  		background = names[index][0];
  		document.getElementById("circle").style.background = "#"+names[index][0];
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
      		console.log(arr[i]);
      		$(arr[i]).append(cir);
      		$(arr[i]).css("rotate",(360/arr.length)*i);
      		$(arr[i]).css("width",w/2)
      		$("#wheel").append(arr[i]);
      	};

      	var sel = new Array(0,10,11,12,13,14,16,17,18,19);
      	var master = 5;
      

      	for (var i = 0; i <= arr.length - 1; i++) 
      	{
      		if(isIn(i,sel))
      		{
      			$(arr[i]).children().css("background-color","#ff0000")
      		}
      	};
        var masterColor = colorRand();
<<<<<<< HEAD
        var triadArray = tinycolor.triad(masterColor);//typeError
=======
        var triadArray = triad(masterColor);
        console.log(triadArray);
>>>>>>> origin/gh-pages
      	$(arr[master]).children().css ("background-color",masterColor)
      	$(arr[master]).children().css("width",100)
      	$(arr[master]).children().css("height",100)


      }

      function isIn (i,sel) 
      {
      	for (var q = 0; q <= sel.length - 1; q++)
      	{ 
      		if (sel[q]==i) {return true};
      	};
      	return false;
      }
