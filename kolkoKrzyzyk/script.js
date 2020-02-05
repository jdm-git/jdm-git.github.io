var currentPlayer = "O";
var winner = "";
var won = false;
function place(box) {
    if(box.innerText != "" || won) return;
    box.innerText = currentPlayer;
    winner = currentPlayer;
    currentPlayer == "O" ? currentPlayer = "X" : currentPlayer = "O";
    document.getElementById("playerTurn").innerText = "Now it's "+currentPlayer+" turn";
    checkGameBoard();       
}
function checkGameBoard() {
    for(var i = 0; i <= 2; i++) {
        checkWinner(document.getElementById(i + "_0").innerText,
            document.getElementById(i + "_1").innerText,
            document.getElementById(i + "_2").innerText);
        checkWinner(document.getElementById("0_" + i).innerText,
            document.getElementById("1_" + i).innerText,
            document.getElementById("2_" + i).innerText);
    }
    checkWinner(document.getElementById("0_0").innerText,
        document.getElementById("1_1").innerText,
        document.getElementById("2_2").innerText);
    checkWinner(document.getElementById("0_2").innerText,
        document.getElementById("1_1").innerText,
        document.getElementById("2_0").innerText);
}
function checkWinner(first, second, third) {
    if(first != "" && first == second && first == third) {
        document.getElementById("winner").innerText = "And the winner is: "+winner+" player";
        document.getElementById("playerTurn").innerText = "Restart the game";
        won = true;
    }
}
function restart(){
    let x = document.getElementsByClassName("row");
    currentPlayer = "O";
    won = false;
    let count;
    for(let i = 0;i<x.length;i++){
       count = x[i].childElementCount;
       for(let j = 0;j<count;j++) document.getElementById(i+"_"+j).innerText="";
    }
    document.getElementById("winner").innerText="";
   // document.getElementById("winner").style.animationFillMode='initial';
    document.getElementById("playerTurn").innerText="Player O starts";
}