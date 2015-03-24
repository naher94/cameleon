		var enteredColor;
		var background;
  		function readText(){
  			enteredColor = document.getElementById("color").value;
  			console.log(enteredColor);
  		}
  		function colorRand(){
  			var index = Math.floor((Math.random() * names.length));
  			background = names[index][0];
  			document.getElementById("box").style.background = "#"+names[index][0];
  			console.log(background);
  		}

  		function compare(){
  			console.log(background.toUpperCase());
  			console.log(enteredColor);
  			if (background.toUpperCase()==enteredColor) {
  				console.log("coolsies");
  			};
  		}