

function result(){
    score=0
    for(i=1; i<=5; i++){
        
        if(document.getElementById('correct'+i).checked==true){
            score++
        }
    }
    
    document.getElementById('quiz').innerHTML=`<h1>Your Score is ${score} out of 5</h1>`
}

// function result1(){
//     score=0
//     for(i=1; i<=5; i++){
        
//         if(document.getElementById('correct'+i).checked==true){
//             score++
//         }
//     }
//     document.getElementById('quiz').innerHTML=`<h1 style="background-color:red;padding:10px;width:180px;margin:40px auto 0">TIME'S UP</h1><h1>Your Score is ${score} out of 5</h1>`;
// }

function timerQuiz(){
    timeLeft = 10; 

    timer = setInterval(function(){
        
        minutes = Math.floor(timeLeft / 60);
        seconds = timeLeft % 60;
        document.getElementById('timer').innerHTML = `Time left: ${minutes}:${seconds}`;
    
        timeLeft--;
    
        if(timeLeft < 0){
            clearInterval(timer);
            // result()
            document.getElementById('submit1').click();
        }
    }, 1000);
}



