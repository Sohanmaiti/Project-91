player1n = localStorage.getItem("player_1");
player2n = localStorage.getItem("player_2");
player1sc = 0;
player2sc = 0;
console.log(player1n);
document.getElementById("playername_2").innerHTML = player2n;
console.log(player2n);
document.getElementById("player_1sc").innerHTML = player1sc;
console.log(player1sc);
document.getElementById("player_2sc").innerHTML = player2sc;
console.log(player2sc);
document.getElementById("question_turn").innerHTML = player1n;
document.getElementById("answer_turn").innerHTML = player2n;
function check(){
    value_1 = document.getElementById("txt_inp_1").value;
    value_2 = document.getElementById("txt_inp_2").value;
    part_1 = "<h4>Q. "+value_1+" X "+value_2+"</h4>";
    part_2 = "<h4>Answer : </h4><input id='input' placeholder='Type Answer' type='number' style='background-color: transparent; color:white'>";
    part_3 = "<button id='but' onclick='ans_check' style='background-color: transparent; color: white;'>Check Answer</button>"
    output = part_1+part_2+part_3;
    document.getElementById("divi").innerHTML = output;
}
function ans_check(){
    get_answer = document.getElementById("input").value;
    if (get_answer == value_1*value_2){
        if (answer_turn == "player_1n"){
            player1sc = player1sc + 1;
            document.getElementById("player1sc").innerHTML = player1sc;
            console.log("Player _1n" + player1_score);
        }
        else {
            player1sc = player2sc + 1;
            document.getElementById("player2sc").innerHTML = player2sc;
            console.log("Player2n" + player2sc);
        }
    }
    if (question_turn == "player1n"){
        question_turn = "player2n";
        document.getElementById("question_turn").innerHTML = "Question Turn - "+player2n;
    }
    else {
        question_turn = "player1n";
        document.getElementById("question_turn").innerHTML = "Question Turn - "+player1n;
    }
    if (answer_turn == "player1n"){
        answer_turn = "player2n";
        document.getElementById("answer_turn").innerHTML = "Answer Turn - "+player2n;
    }
    else {
        answer_turn = "player1n";
        document.getElementById("answer_turn").innerHTML = "Answer Turn - "+player1n;
    }
    document.getElementById("divi").innerHTML = " ";
}
