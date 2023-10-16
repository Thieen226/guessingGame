const submitButton = document.getElementById("submit"); 

function changeText(){
    var answer = 17;
    const answerStatus = document.getElementById("number").value; //this variable is the number you put in
    const answerDirection = document.getElementById("direction"); //this variable is the direction for you to get the right answer

    if(answerStatus < answer){ 
        answerDirection.innerText = "The answer is higher";
        answerDirection.style.color="red";
    }
    else if(answerStatus > answer){
        answerDirection.innerText = "The answer is lower";
        answerDirection.style.color="red";
    }
    else{
        answerDirection.innerText = "Nice job! It is correct";
        answerDirection.style.color="#4CAF50";
    }
}

submitButton.addEventListener("click", changeText); //allow you to change the text that guides you to correct answer after you enter your answer and click the submit button