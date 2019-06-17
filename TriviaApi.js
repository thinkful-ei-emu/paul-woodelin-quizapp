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
        this.listApiFetch(`${this.baseURL}?amount=1`)
        .then(resJson => {})
        .catch(error => {
            console.log(error.message);
        })
        ;
    }



}