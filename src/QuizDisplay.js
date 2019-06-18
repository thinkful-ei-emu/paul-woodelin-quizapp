import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {

  /**
  * This function must return an HTML string
  */
  template() {
    // if quiz is inactive and no questions are asked yet, then
    // we're at the intro state of app

    let currentQ=this.getCurrentQuestion();

    if (!this.model.active && this.model.askedQuestions.length === 0) {
      return `
          <p> Welcome to our trivia quiz. Test your smarts and see how high you can score. </p>
          <button class = "start"> Start </button>
      `;
    }
    if(this.model.active && this.model.getCurrentQuestion().answerStatus() === -1){
      
      let html=`<p> ${currentQ.text}</p>`;
      for(let i=0;i<currentQ.answers.length;i++){
        html+=`
        <input type="radio" id="currentPossibleAnswer${i}" name="aAnswer" value="${currentQ.answers[i]}">
        <label for="currentPossibleAnswer${i}">${currentQ.answers[i]}</label>`;
      }
      html+='<button class="submitAnswer"> Submit </button>';
      return html;
        
    } if(this.model.active && this.model.getCurrentQuestion().answerStatus() === 1){
      return `
      
      <p> ${currentQ.text} </p> 
      
      <p> You got it! The correct answer was</p>  
      
      <p> ${currentQ.correctAnswer} </p>
      
      <button class = "continue">Continue</button>
      `;
    } if(this.model.active && this.model.getCurrentQuestion().answerStatus() === 0){
      return `
      <p> ${currentQ.text} </p> 

      <p> Sorry that was incorrect. <br> You answered</p>

      <p> ${currentQ.userAnswer}</p>

      <p> The correct answer was</p>

      <p> ${currentQ.correctAnswer} </p>

      <button class = "continue">Continue</button>
      `;
    } if (!this.model.active && this.model.scoreHistory.length > 0){
      let html =  `
         <p> Good Job! </p> <p> Your final score was ${this.model.score} out of ${this.model.numberOfQuestions} </p>         
         `;

      if(this.model.updateHighestScore()){
        html+='<p>That\'s a new high score!</p>';
      }
      html+='<button class = "playAgain">Play Again</button>';
      return html;
         
    }      
    
  }

  /**
  * This function must return an object
  */
  getEvents() {
    return {
      'click .start': 'handleStart',
      'click .submitAnswer': 'handleSubmitAnswer',
      'click .continue': 'handleNext',
      'click .playAgain': 'handlePlayAgain'
    };
  }

  handleSubmitAnswer (event){
    event.preventDefault();

  }


  handleNext (event){
    event.preventDefault();

  }


  handlePlayAgain (event){
    event.preventDefault();

  }

  



  /**
  * All event handler functions should call model methods
  */ 
  handleStart(event) {
    event.preventDefault();
    this.model.start();
  }
}

export default QuizDisplay;