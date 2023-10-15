const submitButton = document.getElementById("submit"); 
const restartButton = document.getElementById("restart");
function changeText(){
    var answer = 17;
    const answerStatus = document.getElementById("number").value; //this variable is the number you put in
    const answerDirection = document.getElementById("direction"); //this variable is the direction for you to get the right answer

    if(answerStatus < answer){ 
        answerDirection.innerText = "The answer is higher";
    }
    else if(answerStatus > answer){
        answerDirection.innerText = "The answer is lower";
    }
    else{
        answerDirection.innerText = "Nice job! It is correct";
    }
}

function reloadPage(){
    window.location.reload();
}

submitButton.addEventListener("click", changeText); //allow you to change the text that guides you to correct answer after you enter your answer and click the submit button
restartButton.addEventListener("click", reloadPage); //allow you to reload the page by clicking the button