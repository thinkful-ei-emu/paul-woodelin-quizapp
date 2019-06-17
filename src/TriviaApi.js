class TriviaApi {

  constructor(){
    this.baseURL = 'https://opentdb.com/api.php';
        
  }

  _listApiFetch(...args) { 
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
  
  _transferApiToQuestionFormat(qData,data){
    qData.text=data['question'];
    qData.answers=[...data['incorrect_answers']];
    let randomIndex=Math.floor(Math.random()*(qData.answers.length+1));
    qData.answers.splice(randomIndex, 0, data['correct_answer']);
    qData.correctAnswer=data['correct_answer'];
  }

  getQuestionsData(num) {
    return this._listApiFetch(`${this.baseURL}?amount=${num}`)
      .then(resJson => {
        let arrQData=[];
        let data;
        for(let i=0;i<num;i++){
          data = resJson['results'][i];
          arrQData.push({});
          this._transferApiToQuestionFormat(arrQData[i],data); 
        }
        return arrQData;  
      })
    ;
  }



}


export default TriviaApi;