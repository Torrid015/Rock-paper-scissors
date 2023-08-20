let scores =  JSON.parse(localStorage.getItem('scores')) || {
    wins: 0,
    losses: 0,
    tie: 0
    };
  
/*  if (scores === null) {
    scores = {
      wins: 0,
      losses: 0,
      tie: 0
    };
  }
  */
  
  let isautoPlaying = false;
  let intervalId;
  
  function autoplay() {
  if (!isautoPlaying) {
    intervalId = setInterval(function(){
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000)
    isautoPlaying = true;
  
  } else {
    clearInterval(intervalId);
    isautoPlaying = false;
  }
  }
  
  updateScore();

  function playGame(playerMove) {
      computerMove = pickComputerMove ();
    
    let results = '';
    if (playerMove === 'rock') {
       if (computerMove === 'rock'){
    results = 'Tie';
    } else if (computerMove === 'paper'){
    results = 'You Lose';
    } else if (computerMove === 'scissors'){
    results = 'You Win';
    }
    }
    
    else if (playerMove === 'paper') {
      if (computerMove === 'rock'){
    results = 'You Win';
    } else if (computerMove === 'paper'){
    results = 'Tie';
    } else if (computerMove === 'scissors'){
    results = 'You Lose';
    } 
    }
    
    else if (playerMove === 'scissors') {
      if (computerMove === 'rock'){
    results = 'You Lose';
    } else if (computerMove === 'paper'){
    results = 'You Win';
    } else if (computerMove === 'scissors'){
    results = 'Tie';
    }
    }
    
    if (results === 'You Win'){
      scores.wins += 1;
    } else if (results === 'You Lose') {
      scores.losses += 1;
    }else if (results === 'Tie') {
      scores.tie += 1;
    }
    
    updateScore();
    
    localStorage.setItem('scores', JSON.stringify(scores));
    
    document.querySelector('.js-result').innerHTML = results;
    
    document.querySelector('.js-moves').innerHTML = ` You
    <img src="${playerMove}-emoji.png" class="move-icon">
    <img src="${computerMove}-emoji.png" class="move-icon">
    Computer`;
    
    
  }
  
  function updateScore() {
    document.querySelector('.js-score')
  .innerHTML = `Wins:${scores.wins}, Loses:${scores.losses}, Ties:${scores.tie}`
  }


  function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';
    
    
    
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
     computerMove = 'rock';
    } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3){
     computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1){
     computerMove = 'scissors';
    }
    
    console.log(computerMove);
    return computerMove;
  }