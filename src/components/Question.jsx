import { useState } from 'react';
import Answer from './Answer';
import './Question.css';
import questionDeco from '../img/question-deco.svg';


const Question = ({question, updateGameStatus}) =>{
  const letter =['A','B','C','D'];
  const answers = question.answers;
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(false);

  const handleClick = (selected)=>{
    setSelectedAnswer(selected[0])
    selected[1]? setIsCorrect (true) : setIsCorrect (false);
  }

  const nextQuestion = ()=>{
    updateGameStatus(isCorrect);
    setIsCorrect(null);
    setSelectedAnswer(false);
  }

  //render a next button when question is correct, 
  //on its click execute updategamestatus and set is correct to null again

  return(
    <>
      <img src={questionDeco} alt="" className="question-deco" />
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
      {isCorrect!=null ? 
      <button className='next-button' onClick={nextQuestion}>Next</button> 
      : null}
    </>
  )
}

export default Question ;