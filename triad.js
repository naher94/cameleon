var background;
  		function colorRand(){
  			var index = Math.floor((Math.random() * names.length));
  			background = names[index][0];
  			document.getElementById("circle").style.background = "#"+names[index][0];
  			console.log(background);
  		}