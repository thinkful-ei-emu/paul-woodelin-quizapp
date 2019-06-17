import Question from './Question';

import TriviaApi from './TriviaApi';

class Quiz {

  constructor(){
    this.unasked=[];
    this.asked=[];
    this.score=0;
    this.scoreHistory=[];
    this.active=false;
  }
  
  start() {
    let api = new TriviaApi();
    for(let i = 0; i < 5; i++){
      this.unasked.push(new Question(api.getQuestionData()));
    }

    this.asked.push(this.unasked.pop());
    this.active = true;
  }

  nextQuestion() {
      if(this.unasked.length === 0){
        this.active=false;
        this.scoreHistory.push(this.score);
        this.score = 0;
        this.asked = [];
        return false;
      } else {
        this.asked.push(this.unasked.pop())
      }
  }

  submitAnswer(){

  }

}






export default Quiz;