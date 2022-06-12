import { useState, useEffect} from 'react';
import Question from './Question';
import TryAgain from './TryAgain';
import Status from './Status';
import randomQuestion from '../models/randomQuestion';
import './Card.css';

const Card = () =>{

  const [question ,setQuestion] = useState ( [] );
  const [correctAnswers ,setCorrectAnswers] = useState ( 0 );
  const [lives ,setLives] = useState ( 3 );
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
  [correctAnswers, lives]);

  const updateGameStatus = (isCorrect)=>{
    if(isCorrect){
      setCorrectAnswers(correctAnswers+1);
    }else{
      lives>0 ? setLives(lives-1) : setGameEnded (true)
    }
  }

  const resetGame = ()=>{
    setCorrectAnswers(0);
    setLives(3);
    setGameEnded(false);
  }

  return(
    <div className='card'>
      <Status correctAnswers = {correctAnswers} lives={lives}/>
      {!gameEnded ?
      <Question 
        question = {question}
        updateGameStatus = {updateGameStatus}
      /> :
      <TryAgain 
        correctAnswers = {correctAnswers}
        resetGame = {resetGame}
      />
      }
      <h2 className='card-title'>COUNTRY QUIZ</h2>

    </div>
  )
}

export default Card;