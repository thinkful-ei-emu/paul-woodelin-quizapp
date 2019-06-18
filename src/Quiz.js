import Question from './Question';

import TriviaApi from './TriviaApi';
import Model from './lib/Model';

class Quiz extends Model{

  constructor(){
    super();
    this.unasked=[];
    this.asked=[];
    this.score=0;
    this.scoreHistory=[];
    this.active=false;
  }
  
  start() {
    let api = new TriviaApi();
    let num=5;
    api.getQuestionsData(num)
      .then(arrQData=>{
        for(let i=0;i<num;i++){
          this.unasked.push(new Question(arrQData[i]));
        }
        this.asked.push(this.unasked.pop());
        this.active = true;
        this.update();
        return 1;
      }) 
      .catch(error => {
        console.log(error.message);
        return 0;
      });
  }

  

  getCurrentQuestion(){
    return this.asked[this.asked.length-1];
  }

  nextQuestion() {
    if(this.getCurrentQuestion().answerStatus()===-1){
      return false;
    }
    if(this.unasked.length === 0){
      this.active=false;
      this.scoreHistory.push(this.score);
      this.score = 0;
      this.asked = [];
      this.update();
      return 'reset';
    } else {
      this.asked.push(this.unasked.pop());
      this.update();
      return true;
    }
  }

  submitAnswer(answer){
    let currentQ=this.getCurrentQuestion();
    if(!currentQ){
      return false;
    }
    if(currentQ.answerStatus()!==-1){
      return false;
    }
    currentQ.submitAnswer(answer);
    this.update();
    if(currentQ.answerStatus()===1){
      this.score++;
      this.update();
      return true;
    } else {
      this.update();
      return false;
    }
  }
}






export default Quiz;