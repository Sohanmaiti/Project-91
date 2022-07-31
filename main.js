function locate(){
    player_1 = document.getElementById("player1_name").value;
    player_2 = document.getElementById("player2_name").value;
    window.location = "main_page.html";
    localStorage.setItem("player_1", player_1);
    localStorage.setItem("player_2", player_2); 
}