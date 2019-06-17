class Question {
    constructor(Qdata){
        this.text = 0;
        this.answers = [];
        this.correctAnswer = '';
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
