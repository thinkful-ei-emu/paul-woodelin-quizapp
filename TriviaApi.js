class Triviapi {

  constructor(){
    this.baseURL = 'https://opentdb.com/api.php';
        
  }

  listApiFetch(...args) { 
    let error; 
    return fetch(...args) 
      .then(res => {
        if (!res.ok) {
          // Valid HTTP response but non-2xx status - let's create an error! 
          error = { code: res.status }; 
        }
        // In either case, parse the JSON stream:
        return res.json();
      })

      .then(data => {
        // If error was flagged, reject the Promise with the error object
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        // Otherwise give back the data as resolved Promise 
        return data; 
      });
  }
    
  getQuestionData() {
    let qData={};
    this.listApiFetch(`${this.baseURL}?amount=1`)
      .then(resJson => {
        let data = resJson['results'][0];
        console.log(data);        
        qData.text=data['question'];
        qData.answers=[...data['incorrect_answers']];
        let randomIndex=Math.floor(Math.random()*(qData.answers.length+1));
        console.log(randomIndex);
        if (randomIndex===qData.answers.length){
          qData.answers.push(data['correct_answer']);
        }
        else{    
          qData.answers.splice(randomIndex, 0, data['correct_answer']);
        }
        qData.correctAnswer=data['correct_answer'];
      })
      .catch(error => {
        console.log(error.message);
      })
    ;
    return qData;
  }



}

export default Triviapi;
let obj= new Triviapi();
console.log(obj.getQuestionData());