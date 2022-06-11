import { useState, useEffect} from 'react';
import Question from './Question';
import Status from './Status';
import randomQuestion from '../models/randomQuestion';
import './Card.css';


const Card = () =>{

  const [question ,setQuestion] = useState ( [] );
  //const [gameStatus, setGameStatus] = useState (0);
  const [correctAnswers ,setCorrectAnswers] = useState ( 0 );
  const [gameEnded ,setGameEnded] = useState ( false );

  useEffect(
    ()=>{
      async function getData (){
        try{
          const res = await fetch("https://restcountries.com/v3.1/all");
          const fetchedData = await res.json();
          const q = new randomQuestion(fetchedData);
          setQuestion(q.allQuestionData);
        }catch (err) {
          console.log('error processing the data');
          //load another question
          getData()
        }
      }
      getData();
    }, 
  []);

  //execute it when correct answers change inside update game status

  const updateGameStatus = (isCorrect)=>{
    isCorrect ? console.log('ok') : console.log('wrong')
    ///wait 3 seconds, update the state so a new question will be rendered.
    if(isCorrect){
      setCorrectAnswers(correctAnswers+1);
    } 
  }

  return(
    <div className='card'>
      {/* <Status /> */}
      <Question 
        question = {question}
        updateGameStatus = {updateGameStatus}
      />
    </div>
  )
}

export default Card;