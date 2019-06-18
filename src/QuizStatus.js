import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {
  template(){
    let html= `
    <div class="top-header">
      <div>Score: ${this.model.score}</div>
      <div>High Score: ${this.model.highestScore}</div>
      `;
    if(this.model.active){
      html+=`<div>Progess: ${this.model.asked.length} of ${this.model.numberOfQuestions}</div>`;
    }
    else{
      html+='<div>Progess: Inactive</div>';
    }
    html+='</div>';
    return html;
  }
}

export default QuizDisplay;