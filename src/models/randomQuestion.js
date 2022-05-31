export default class randomQuestion {

  constructor(data){
    //utilities
    this.data = data;
    this.country = this.data[this.generateRandomNumber(250)]; //all the data
    this.language = Object.entries(this.country.languages);
    this.countryName = this.country.name.common;
    
    this.completeQuestion = this.getQuestion(data);
    this.wrongAnswers = this.getRandomAnswers(this.completeQuestion.answer,this.completeQuestion.topic);
    this.allQuestionData = this.getQuestionData();
  }
  //getting a random question from the country
  getQuestion(country){
    this.flag = this.country.flags.svg;
    //this array of objects contains both the question and the answers
    const questions = [
      { 
        question : `What is the capital of ${this.countryName}?`,
        answer : `${this.country.capital[0]}`,
        topic : "capital"
      },
      { 
        question : `What is the official language of ${this.countryName}?`,
        //getting the main language
        answer : `${this.language[0][1]}`,
        topic: "language"
      },
      { 
        question : `What is this country's flag?`,
        answer : `${this.countryName}`,
        topic: "flag"
      },
      { 
        question : `In which continent is ${this.countryName} located?`,
        answer : `${this.country.continents[0]}`,
        topic:"continent"
      }
    ];

    return questions[this.generateRandomNumber(questions.length)];
  }

  getRandomAnswers(correctAnswer, topic){
    let allWrongAnswers = [];
    switch (topic) {
      case "capital" :
        while(allWrongAnswers.length<3){
          let randomCountry = this.data[this.generateRandomNumber(250)];
          let randomAnswer = randomCountry.capital[0];
          if( randomAnswer!==correctAnswer && !allWrongAnswers.includes(randomAnswer)){
            allWrongAnswers = [...allWrongAnswers, randomAnswer];
          }
        }
        return allWrongAnswers;
      
      case "language" :
        while(allWrongAnswers.length<3){
          let randomCountry = this.data[this.generateRandomNumber(250)];
          let lang = Object.entries(randomCountry.languages);
          let randomAnswer = lang[0][1];
          if( randomAnswer!==correctAnswer && !allWrongAnswers.includes(randomAnswer)){
            allWrongAnswers = [...allWrongAnswers, randomAnswer];
          }
        }
        return allWrongAnswers;

      case "flag" :
        while(allWrongAnswers.length<3){
          let randomCountry = this.data[this.generateRandomNumber(250)];
          let randomAnswer = randomCountry.name.common;
          if( randomAnswer!==correctAnswer && !allWrongAnswers.includes(randomAnswer)){
            allWrongAnswers = [...allWrongAnswers, randomAnswer];
          }
        }
        return allWrongAnswers;

      case "continent" :
        while(allWrongAnswers.length<3){
          let randomCountry = this.data[this.generateRandomNumber(250)];
          let randomAnswer = randomCountry.continents[0];
          if( randomAnswer!==correctAnswer && !allWrongAnswers.includes(randomAnswer)){
            allWrongAnswers = [...allWrongAnswers, randomAnswer];
          }
        }
        return allWrongAnswers;
      default :
        return;
    }
  }

  getQuestionData () {
    let flag;
    if(this.completeQuestion.topic === "flag"){
      flag = this.flag;
    }else{
      flag = null;
    }
    const correctAnswerPosition = this.generateRandomNumber(4);
    let tempAnswers = [];
    this.wrongAnswers.forEach(answer => { tempAnswers.push([answer,false]) });
    tempAnswers.splice(correctAnswerPosition, 0, [this.completeQuestion.answer, true])

    return(
        {
        question: this.completeQuestion.question,
        answers: tempAnswers,
        flag: flag
      }
    )
  }

  generateRandomNumber(max){
    return Math.floor(Math.random() * max);
  }
}