//Yohan Brown - 620086202 - INFO2180 - Project 2 - JavaScript Document
//Extra Feature Completed: Multiple Backgrounds
//checkMove, function to check if a given square can move not working

$(document).ready(function() {
	//Creating a variable to store the children of puzzlearea as they will be referenced numerous times in the code.
	var $puzzlePieces = $("#puzzlearea").children();
	//Applying the properties of the puzzlepiece class to the children.
	$("#puzzlearea").children().addClass("puzzlepiece");
	//Setting a variable to represent the empty area. The value is initially set to 297px and 300px. 
	//297 was calculated by subtracting the border of 2px each from 400 and then subtracting 99px for each block. 300px was calculated by subtracting 100px from 400px.
	var emptyArea = ["297px", "300px"];
	
	//Appending a select box to the id controls and setting values as the names of the various backgrounds available. 
	$("#controls").append("<select id ='bgimage'><option value='bob'>Bob</option><option value='tux'>Baby Tux</option><option value='flowers'>Flowers</otion><option value='andy'>Andy Rubin</option></select>");	
	
	//Function to make the tiles appear in the proper layout.
	function layout(){
		var x = 0;
		var counter = 0;
		emptyArea = ["297px", "300px"];	
		while (x < $puzzlePieces.length){
			if(counter >= 4){
				counter = 0;
			}
			if(x >= 12){
				$puzzlePieces[x].style.top = (297) + 'px';
				$puzzlePieces[x].style.left = (counter * 100) + 'px';
				$puzzlePieces[x].style.backgroundPosition = '-' + counter * 100 + 'px 200px';
			}
			else if(x >= 8){
				$puzzlePieces[x].style.top = (198) + 'px';
				$puzzlePieces[x].style.left = (counter * 100) + 'px';
				$puzzlePieces[x].style.backgroundPosition = '-' + counter * 100 + 'px 300px';
			}
			else if(x >= 4){
				$puzzlePieces[x].style.top = (99) + 'px';
				$puzzlePieces[x].style.left = (counter * 100) + 'px';
				$puzzlePieces[x].style.backgroundPosition = '-' + counter * 100 + 'px 400px';
			}
			else{
				$puzzlePieces[x].style.top = '0px';
				$puzzlePieces[x].style.left = (counter * 100) + 'px';
				$puzzlePieces[x].style.backgroundPosition = '-' + counter * 100 + 'px 500px';
			}		
			x++;
			counter++; 
		}	
	}
	layout();

	var checkMove = function(piece){
		//Check if the tile is able to move.
	}

	//Make the puzzle pieces move when they are able to move.
	$puzzlePieces.on("click", function(){
		if(checkMove(this)){
			var north = emptyArea[0];
			var west = emptyArea[1];
			emptyArea = [this.style.top, this.style.left];
			this.style.top = north;
			this.style.left = west;	
		}
	});		
	
	//Change the css to the moveablepiece class when the cursor hovers over the tile.
	$puzzlePieces.hover(function() {
		if(checkMove(this)){
			$(this).addClass("movablepiece");
		}
    }, 
    function(){
		$(this).removeClass("movablepiece");
	});
	
	//Storing shuffler function in variable shuffle.			
	var shuffle = function(shuffler){
		var moveables = new Array();
		var x = 0;
		while(x < shuffler){
			counter = 0;
			for(var i = 0; i<$puzzlePieces.length; i++){
				if(checkMove($puzzlePieces[i])){
					moveables[counter] = $puzzlePieces[i];
					counter++;
				}
			}			
			var north = emptyArea[0];
			var west = emptyArea[1];
			var vari = Math.floor(Math.random() * moveables.length)
			emptyArea = [moveables[vari].style.top, moveables[vari].style.left];
			moveables[vari].style.top = north;
			moveables[vari].style.left = west;
			x++;
		}
	}
	//Call the function to shuffle.	
	$("#shufflebutton").on("click", function(){
		shuffle(800);		
	});

	//Check which item is selected and accordingly change background.
	$("#bgimage").on("change", function(){
		var getId = document.getElementById("bgimage");
		var selector = getId.options[getId.selectedIndex].text;
		
		if (selector == "Baby Tux"){			
			for (var i = 0; i < $puzzlePieces.length; i++){			
				$puzzlePieces[i].style.background = 'url("https://s-media-cache-ak0.pinimg.com/564x/e5/81/b0/e581b05e7d2b92cfc0de2b1b834bbc73.jpg")';
			}
		}
		
		if (selector == "Flowers"){
			for (var i = 0; i < $puzzlePieces.length; i++){
				$puzzlePieces[i].style.background = 'url("http://g02.a.alicdn.com/kf/HTB1UGuWIFXXXXXpaXXXq6xXFXXXA/Özelle%C5%9Ftirmek-duvar-ka%C4%9F%C4%B1d%C4%B1-papel-de-parede-hd-boyama-güzel-çiçekler-3d-duvar-ka%C4%9F%C4%B1d%C4%B1-3d-duvar-ka%C4%9F%C4%B1d%C4%B1.jpg")';
			}
		}
		
		if (selector == "Andy Rubin"){
			for (var i = 0; i < $puzzlePieces.length; i++){
				$puzzlePieces[i].style.background = 'url("https://www.androidcentral.com/sites/androidcentral.com/files/styles/w550h500/public/wallpapers/taking-a-bite-out-of-apple-biy.jpg?itok=6qGbH1TY")';
			}	
		}
	
		if (selector == "Bob"){
			for (var i = 0; i < $puzzlePieces.length; i++){
				$puzzlePieces[i].style.background = 'url(background.jpg)';
			}	
		}
		//Recall layout function to fix the layout.
		layout();	
	});
});