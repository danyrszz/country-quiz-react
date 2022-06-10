import { useState, useEffect } from 'react';
import Answer from './Answer';
import './Question.css';


const Question = ({question, updateGameStatus}) =>{
  const letter =['A','B','C','D'];
  const answers = question.answers;
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(false);

  const handleClick = (selected)=>{
    setSelectedAnswer(selected[0])
    selected[1]? setIsCorrect (true) : setIsCorrect (false);
  }

  useEffect( ()=>{
    updateGameStatus(isCorrect);
  }, [isCorrect]);

  //render a next button when question is correct, 
  //on its click execute updategamestatus and set is correct to null again

  return(
    <>
      <h3>{question.question}</h3>
      {question.flag ? 
      <img src={`${question.flag}`} alt="flag" className='flag'/> : null}
      {answers ? 
      answers.map((answer, index)=>{
        return <Answer
        key = {letter[index]}
        option = {letter[index]}
        answer={answer}
        handleClick = {handleClick}
        isCorrect = {isCorrect}
        selectedAnswer = {selectedAnswer}
      />
      }):null
      }
    </>
  )
}

export default Question ;