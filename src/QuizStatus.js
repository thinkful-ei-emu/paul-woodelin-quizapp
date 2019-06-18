import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {
  template(){
    let html= `
    <div class="top-header">
      <div>Score: ${this.model.score}</div>
      <div>High Score: ${this.model.highestScore}</div>
      <div>Progress: ${this.model.active}</div>
    </div>
      
      `;
    return html;
  }
}

export default QuizDisplay;