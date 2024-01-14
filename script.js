score = 0;
cross = true;
audio = new Audio('music.mp3');
audioGO = new Audio('gameover.mp3');
setTimeout(()=>{
   audio.play()
},100);
document.onkeydown = function(e){
    if(e.keyCode==38){
        dynamo = document.querySelector('.dynamo')
        dynamo.classList.add('animateDynamo');
        setTimeout(()=>{
            dynamo.classList.remove('animateDynamo');
        },700);
    }
    if(e.keyCode == 39){
        dynamo = document.querySelector('.dynamo');
        dynamoX = parseInt(window.getComputedStyle(dynamo,null).getPropertyValue('left'));
        dynamo.style.left = dynamoX + 112 +"px" ;
     }
     if(e.keyCode == 37){
        dynamo = document.querySelector('.dynamo');
        dynamoX = parseInt(window.getComputedStyle(dynamo,null).getPropertyValue('left'));
        dynamo.style.left = (dynamoX - 112) +"px" ;
     }
}
setInterval(()=>{
       dynamo = document.querySelector('.dynamo');
       gameover = document.querySelector('.gameover');
       monster = document.querySelector('.monster');
    
       dx = parseInt(window.getComputedStyle(dynamo,null).getPropertyValue('left'));
       dy = parseInt(window.getComputedStyle(dynamo,null).getPropertyValue('top'));
       mx = parseInt(window.getComputedStyle(monster,null).getPropertyValue('left'));
       my = parseInt(window.getComputedStyle(monster,null).getPropertyValue('top'));
      
       diffX = Math.abs(dx-mx);
       diffY = Math.abs(dy-my);
      
       if(diffX<50 && diffY<150){
          gameover.innerHTML = "Game-over Play Again";
          monster.classList.remove('monsterAnimation');
          audioGO.play();
          setTimeout(()=>{
            audioGO.pause();
            audio.pause();
          },1000);
       }
       else if(diffX<145 && cross){
           score += 1;
           updateScore(score);
           cross = false;
           setTimeout(()=>{
             cross = true;
           },1000);
           setTimeout(()=>{
           animDur = parseFloat(window.getComputedStyle(monster,null).getPropertyValue('animation-duration'));
           if(animDur>1.5){
           newDur = animDur - 0.05;
           monster.style.animationDuration = newDur + 's';
           }
           },1000);
        }
    },10);
    function updateScore(score){
        scorecount.innerHTML = "Your Score: " + score;
    }
