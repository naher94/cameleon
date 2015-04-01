
var background;
  	function colorRand()
  	{
  		var index = Math.floor((Math.random() * names.length));
  		background = names[index][0];
  		document.getElementById("circle").style.background = "#"+names[index][0];
  		//console.log(background);
  	}
      function rotateBox()
      {
      	var w = $('#wheel').width()
      	$('#rotate').width(w/2)
      	/*$('#rotate').css("rotate","90")*/
      	var arr = new Array(20); //Makes array to house each of the rotation circles
      	for (var i = 0; i <= arr.length - 1; i++) 
      	{
      		var elem = document.createElement('div');
      		var cir = document.createElement('div');
      		$(cir).css("background-color","#00ff00")
      		elem.setAttribute("id", "rotate");
      		arr[i] = elem;
      		console.log(arr[i]);
      		$(arr[i]).append(cir);
      		$(arr[i]).css("rotate",(360/arr.length)*i);
      		      		//should be able to simplify using a class rather than ID (Since Constant)
      		$(arr[i]).css("width",w/2)
      		$(arr[i]).css("height",50)
      		      		//should be able to simplify using a class rather than ID (Since Constant)

      		$("#wheel").append(arr[i]);
      	};
      }