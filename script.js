let $userName = "user";
let $playerResult = 0;
let $computerResult = 0;
let $timer = 0;
let $sec = 0;
let $reTimer = 0;
let $reSec = 0;
let $playerPaper = 0;
let $playerRock = 0;
let $playerScissors = 0;
let $computerPaper = 0;
let $computerRock = 0;
let $computerScissors = 0;
let $computerChoise = 0;
let $computerMessage = 0;
let $coTimer = 0;
let $coSec = 0;
let $computerWaitingMessage = 0;


function ClickSound(){
    document.getElementById("click-sound-effect").currentTime = "0.2";
    document.getElementById("click-sound-effect").play();
}
function NextOne(){
    if(document.getElementById("name-input").value != ""){
    $userName = document.getElementById("name-input").value;
    ClickSound();
    document.getElementById("name-container").style.display = "none";
    document.getElementById("options-container").style.display = "block";
    document.getElementById("wrong-message").style.display = "none";  
    }
    if (document.getElementById("name-input").value == ""){
    document.getElementById("wrong-message").style.display = "block";    
    }
}
function RemoveWarn(){
    document.getElementById("wrong-message").style.display = "none";   
}
function BackOne(){
    $userName = "0";
    document.getElementById("options-container").style.display = "none";
    document.getElementById("name-container").style.display = "block";
}
// Modes //
function EazyMode(){
    ClickSound();
    WaitingMessage();
    document.getElementById("name-container").style.display = "none";
    document.getElementById("options-container").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    document.getElementById("player-one").innerHTML = `${$userName}: ${$playerResult}`;
    document.getElementById("player-two").innerHTML = `Computer: ${$computerResult}`;
}
function NormalMode(){
    ClickSound();
    WaitingMessage();
    document.getElementById("name-container").style.display = "none";
    document.getElementById("options-container").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    document.getElementById("player-one").innerHTML = `${$userName}: ${$playerResult}`;
    document.getElementById("player-two").innerHTML = `Computer: ${$computerResult}`;
}
function HardMode(){
    ClickSound();
    WaitingMessage();
    document.getElementById("name-container").style.display = "none";
    document.getElementById("options-container").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    document.getElementById("player-one").innerHTML = `${$userName}: ${$playerResult}`;
    document.getElementById("player-two").innerHTML = `Computer: ${$computerResult}`;
}
// Buttons //
function RockButton(){
    if($playerRock == 0 && $playerPaper == 0 && $playerScissors == 0){
    clearInterval($coTimer);
    document.getElementById("computer-message-container").style.backgroundColor = "rgba(0, 0, 0, 0)"; 
    document.getElementById("computer-message").style.color = "rgba(0, 0, 0, 0)";  
    ClickSound();
    $timer = setInterval(function(){
          $playerRock = 1;
          document.getElementById("player-rock").style.transition = "0.3s";
          document.getElementById("player-rock").style.rotate = "-50deg";
          document.getElementById("computer-rock").style.transition = "0.3s";
          document.getElementById("computer-rock").style.rotate = "50deg";
          $sec ++;
          if($sec === 2){
            clearInterval($timer);
            Reset();
            $sec = 0;
            $timer = 0;
            document.getElementById("player-rock").style.transition = "0.3s";
            document.getElementById("player-rock").style.rotate = "0deg";
            document.getElementById("computer-rock").style.transition = "0.3s";
            document.getElementById("computer-rock").style.rotate = "0deg";
            getComputerChoice();
            CheckResult();
        }
    }, 200);
  }
}
function PaperButton(){
    if($playerRock == 0 && $playerPaper == 0 && $playerScissors == 0){
          clearInterval($coTimer);
          document.getElementById("computer-message-container").style.backgroundColor = "rgba(0, 0, 0, 0)"; 
          document.getElementById("computer-message").style.color = "rgba(0, 0, 0, 0)";  
          ClickSound();
          $timer = setInterval(function(){
          $playerPaper = 1;
          document.getElementById("player-rock").style.transition = "0.3s";
          document.getElementById("player-rock").style.rotate = "-50deg";
          document.getElementById("computer-rock").style.transition = "0.3s";
          document.getElementById("computer-rock").style.rotate = "50deg";
          $sec ++;
          if($sec === 2){
            clearInterval($timer);
            Reset();
            $sec = 0;
            $timer = 0;
            document.getElementById("player-rock").style.transition = "0.3s";
            document.getElementById("player-rock").style.rotate = "0deg";
            document.getElementById("player-rock").style.display = "none";
            document.getElementById("player-paper").style.display = "block";
            document.getElementById("computer-rock").style.transition = "0.3s";
            document.getElementById("computer-rock").style.rotate = "0deg";
            getComputerChoice();
            CheckResult();
        }
    }, 200);
  }
}
function ScissorsButton(){
    if($playerRock == 0 && $playerPaper == 0 && $playerScissors == 0){
          clearInterval($coTimer);
          document.getElementById("computer-message-container").style.backgroundColor = "rgba(0, 0, 0, 0)";
          document.getElementById("computer-message").style.color = "rgba(0, 0, 0, 0)";   
          ClickSound();
          $timer = setInterval(function(){
          $playerScissors = 1;
          document.getElementById("player-rock").style.transition = "0.3s";
          document.getElementById("player-rock").style.rotate = "-50deg";
          document.getElementById("computer-rock").style.transition = "0.3s";
          document.getElementById("computer-rock").style.rotate = "50deg";
          $sec ++;
          if($sec === 2){
            clearInterval($timer);
            Reset();
            $sec = 0;
            $timer = 0;
            document.getElementById("player-rock").style.transition = "0.3s";
            document.getElementById("player-rock").style.rotate = "0deg";
            document.getElementById("player-rock").style.display = "none";
            document.getElementById("player-scissors").style.display = "block";
            document.getElementById("computer-rock").style.transition = "0.3s";
            document.getElementById("computer-rock").style.rotate = "0deg";
            getComputerChoice();
            CheckResult();
        }
    }, 200);
  } 
}
function getComputerChoice(){
    $computerChoise = Math.floor(Math.random() * 3);
    if($computerChoise == 0){
    document.getElementById("computer-rock").style.display = "block";
    } else if($computerChoise == 1){
    document.getElementById("computer-rock").style.display = "none";
    document.getElementById("computer-paper").style.display = "block";
    } else if($computerChoise == 2){
    document.getElementById("computer-rock").style.display = "none";
    document.getElementById("computer-scissors").style.display = "block";
    }
}
function ComputerMessageWon(){
    $computerMessage = Math.floor(Math.random() * 6);
    if($computerMessage == 0){
    document.getElementById("computer-message-container").style.backgroundColor = "rgba(0, 0, 0, 0.705)";   
    document.getElementById("computer-message").style.color = "white";  
    document.getElementById("computer-message").innerHTML = "I Defeated You!";  
    }
    if($computerMessage == 1){
        document.getElementById("computer-message-container").style.backgroundColor = "rgba(0, 0, 0, 0.705)";   
        document.getElementById("computer-message").style.color = "white";  
        document.getElementById("computer-message").innerHTML = "This Is So Eazy!";  
    }
    if($computerMessage == 2){
        document.getElementById("computer-message-container").style.backgroundColor = "rgba(0, 0, 0, 0.705)";   
        document.getElementById("computer-message").style.color = "white";     
        document.getElementById("computer-message").innerHTML = "Beginners Luck!";  
    }
    if($computerMessage == 3){
        document.getElementById("computer-message-container").style.backgroundColor = "rgba(0, 0, 0, 0.705)";   
        document.getElementById("computer-message").style.color = "white";      
        document.getElementById("computer-message").innerHTML = "Eazy!";  
    }
    if($computerMessage == 4){
        document.getElementById("computer-message-container").style.backgroundColor = "rgba(0, 0, 0, 0.705)";   
        document.getElementById("computer-message").style.color = "white";     
        document.getElementById("computer-message").innerHTML = "You Can't Defeat Me!";  
    }
    if($computerMessage == 5){
        document.getElementById("computer-message-container").style.backgroundColor = "rgba(0, 0, 0, 0.705)";   
        document.getElementById("computer-message").style.color = "white";    
        document.getElementById("computer-message").innerHTML = "Is This All You Got?!";  
    }
}
function CheckResult(){
    if($computerChoise == 0 && $playerRock == 1 ||
        $computerChoise == 1 && $playerPaper == 1 ||
        $computerChoise == 2 && $playerScissors == 1){
        document.getElementById("result-text").innerHTML = "You Tied.";
        document.getElementById("result-text").style.color = "white";
    } 
    if($computerChoise == 0 && $playerPaper == 1 ||
        $computerChoise == 1 && $playerScissors == 1 ||
        $computerChoise == 2 && $playerRock == 1){
        document.getElementById("result-text").innerHTML = "You Won!";
        document.getElementById("result-text").style.color = "rgb(0, 255, 13)";
        $playerResult++;
        document.getElementById("player-one").innerHTML = `${$userName}: ${$playerResult}`;
    }
    if($computerChoise == 0 && $playerScissors == 1 ||
        $computerChoise == 1 && $playerRock == 1 ||
        $computerChoise == 2 && $playerPaper == 1){
        document.getElementById("result-text").innerHTML = "You Lost!";
        document.getElementById("result-text").style.color = "red";
        $computerResult++;
        document.getElementById("player-two").innerHTML = `Computer: ${$computerResult}`;
        ComputerMessageWon();
}
}
function Reset(){
    $reTimer = setInterval(function(){
    $reSec ++;
    if($reSec === 5){
        clearInterval($reTimer);
        WaitingMessage();
        $coSec = 0;
        $reSec = 0;
        $reTimer = 0;
        $playerRock = 0;
        $playerPaper = 0;
        $playerScissors = 0;
        $playerRock = 0;
        $playerPaper = 0;
        $playerScissors = 0;
        $computerChoise = 0;
        document.getElementById("player-rock").style.transition = "0.3s";
        document.getElementById("player-rock").style.display = "block";
        document.getElementById("player-paper").style.display = "none";
        document.getElementById("player-scissors").style.display = "none";
        document.getElementById("computer-rock").style.display = "block";
        document.getElementById("computer-paper").style.display = "none";
        document.getElementById("computer-scissors").style.display = "none";
        document.getElementById("result-text").style.color = "rgba(0, 0, 0, 0)";
        document.getElementById("computer-message-container").style.backgroundColor = "rgba(0, 0, 0, 0)";   
        document.getElementById("computer-message").style.color = "rgba(0, 0, 0, 0)";  
    }
}, 500);
}
function WaitingMessage(){
    $coTimer = setInterval(function(){
    $coSec ++;
    if($coSec == 5){
        document.getElementById("computer-message-container").style.backgroundColor = "rgba(0, 0, 0, 0.705)";   
        document.getElementById("computer-message").style.color = "white";  
        document.getElementById("computer-message").innerHTML = "Afraid or What?";  
        }
    if($coSec == 10){
            document.getElementById("computer-message-container").style.backgroundColor = "rgba(0, 0, 0, 0.705)";   
            document.getElementById("computer-message").style.color = "white";  
            document.getElementById("computer-message").innerHTML = "Hurry Up!";  
        }
    if($coSec == 15){
            document.getElementById("computer-message-container").style.backgroundColor = "rgba(0, 0, 0, 0.705)";   
            document.getElementById("computer-message").style.color = "white";     
            document.getElementById("computer-message").innerHTML = "I Don't Have Time!";  
        }
    if($coSec == 20){
            document.getElementById("computer-message-container").style.backgroundColor = "rgba(0, 0, 0, 0.705)";   
            document.getElementById("computer-message").style.color = "white";      
            document.getElementById("computer-message").innerHTML = "Come On!";  
        }
    if($coSec == 25){
            document.getElementById("computer-message-container").style.backgroundColor = "rgba(0, 0, 0, 0.705)";   
            document.getElementById("computer-message").style.color = "white";     
            document.getElementById("computer-message").innerHTML = "I'm Wasting My Time.";  
        }
    if($coSec == 30){
            document.getElementById("computer-message-container").style.backgroundColor = "rgba(0, 0, 0, 0.705)";   
            document.getElementById("computer-message").style.color = "white";    
            document.getElementById("computer-message").innerHTML = "Surrendering Better?";  
        }
    if($coSec == 35){            
          clearInterval($coTimer);
          $coSec = 0;
          document.getElementById("computer-message-container").style.backgroundColor = "rgba(0, 0, 0, 0)";
          document.getElementById("computer-message").style.color = "rgba(0, 0, 0, 0)";   
        }
}, 500);
}