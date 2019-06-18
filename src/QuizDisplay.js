import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {

  /**
  * This function must return an HTML string
  */
  template() {
    // if quiz is inactive and no questions are asked yet, then
    // we're at the intro state of app
    if (!this.model.active && this.model.askedQuestions.length === 0) {
      return `
          <p> Welcome to our trivia quiz. Test your smart and see how high you can score. </p>
          <button class = "start"> start </button>
      `;
    }
    if(this.model.active && this.model.getCurrentQuestion().answerStatus() === -1){
        return `
      <span> ${this.getCurrentQuestion().text}</span>
          <div>
              <input type="radio" id="huey" name="drone" value="huey"
                checked>
              <label for="huey">${this.model.getCurrentQuestion()}</label>
              </div>

              <div>
              <input type="radio" id="dewey" name="drone" value="dewey">
              <label for="dewey">${this.model.getCurrentQuestion()}</label>
              </div>

              <div>
              <input type="radio" id="louie" name="drone" value="louie">
              <label for="louie">${this.model.getCurrentQuestion()}</label>
              </div>


              <div>
              <input type="radio" id="louie" name="drone" value="louie">
              <label for="louie">${this.model.getCurrentQuestion()}</label>
          </div>

        
        
        `
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