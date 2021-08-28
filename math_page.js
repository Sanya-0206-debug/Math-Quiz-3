player1_name=localStorage.getItem("p1name");
player2_name=localStorage.getItem("p2name");
debugger;
player1_score=0;
player2_score=0;
document.getElementById("number1").innerHTML=player1_name +":";
console.log("hi");
document.getElementById("number2").innerHTML=player2_name +":";
document.getElementById("p1score").innerHTML=player1_score +"";
document.getElementById("p2score").innerHTML=player2_score +"";
document.getElementById("playerQuestion").innerHTML="Question turn : "+player1_name;
document.getElementById("playerAnswer").innerHTML="Answer turn : "+player2_name;

function send()
{
    number1=document.getElementById("math1").value;
    number2=document.getElementById("math2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>"+ number1 +" X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row= question_number + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("math1").value="";
    document.getElementById("math2").value="";
}
