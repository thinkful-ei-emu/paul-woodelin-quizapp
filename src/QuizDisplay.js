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
          <p> Welcome to our trivia quiz. Test your smart and see how high you can score. </p>
          <button class = "start"> Start </button>
      `;
    }
    if(this.model.active && this.model.getCurrentQuestion().answerStatus() === -1){
      
      let html=`<span> ${currentQ.text}</span>`;
      for(let i=0;i<currentQ.answers.length;i++){
        html+=`
        <input type="radio" id="currentPossibleAnswer${i}" name="aAnswer" value="${currentQ.answers[i]}">
        <label for="currentPossibleAnswer${i}">${currentQ.answers[i]}</label>`;
      }
      html+='<button class="submitAnswer"> Submit </button>';
      return html;
        
    } if(this.model.active && this.model.getCurrentQuestion().answerStatus() === 1){
      return `
      
      <span> ${currentQ.text} </span> 
      
      <p> You got it !. the correct answer was</p>  
      
      <span> ${currentQ.correctAnswer} </span>
      
      <button class = "continue">continue</button>
      `
    } if(this.model.active && this.model.getCurrentQuestion().answerStatus() === 0){
      return `
      <span> ${currentQ.text} </span> 

      <p> Sorry that was incorrect. you answered</p>

      <span> ${currentQ.userAnswer}</span>

      <p> The correct answer was</p>

      <span> ${currentQ.correctAnswer} </span>

      <button class = "continue">continue</button>
      `
    } if (!this.model.active && this.model.scoreHistory.length > 0){
         let html =  `
         <p> Good Job! your final score was ${this.model.score} out of ${this.score.correctAnswer} </p>         
         `

         if(this)
         
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