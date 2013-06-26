var wincases = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
var game = {board: drawBoard(), 'spots': "123456789", turn: 0, player: "X"};




function drawBoard() {

	return "1 | 2 | 3\n_________\n4 | 5 | 6\n_________\n7 | 8 | 9";

}

function alreadyTaken(number) {
	// returns true if there is more number is marked with paramater
	if (this.game.spots.match(number) == number ) {
		return false;
	}  
}

function replaceSpot(number) {
	changeBoard = game.board.replace(number, game.player);
	changeSpots = game.spots.replace(number, game.player);
	game.spots = changeSpots;
	game.board = changeBoard;
	game.turn++;
}



function whosTurn(turn) {
	if (turn % 2 == 0) {
		game.player = "X"

	} else {
		game.player = "O"
	}
}


function place(number) {
	if (alreadyTaken(number)) {
		replaceSpot(number);
	}
}

function checkWinner() {
	

	for (var i = 0; i<wincases.length; i++) {
		var toWin= 0;
		
		for (var j = 0; j<wincases[i].length; j++) {
			//console.log(game.spots.charAt(wincases[i][j]))
			
			//console.log(game.spots.charAt(wincases[i][j]-1))

		
			if (game.spots.charAt(wincases[i][j]-1) == game.player) {
				
				toWin++
				console.log(toWin + " this is from inside the if statement");
				


			}
				//console.log(toWin);
				if (toWin == 3) 
					return true;	
				}
				
			}
			if (toWin !=3)
					return false;

			
		}
	


 replaceSpot(1);
 replaceSpot(5);
 replaceSpot(9);
 console.log(game.board);
console.log(checkWinner());