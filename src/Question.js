class Question {
  constructor(Qdata){
    this.text = Qdata.text;
    this.answers = Qdata.answers;
    this.correctAnswer = Qdata.correctAnswer;
    this.userAnswer = undefined;
        
  }
  submitAnswer(userAnswer){
    this.userAnswer = userAnswer;
        

  }
  answerStatus(){
    if(this.userAnswer === undefined){
      return -1;
    } if(this.userAnswer !== this.correctAnswer) {
      return 0;
    } else {
      return 1;
    }
  }
}
export default Question;
