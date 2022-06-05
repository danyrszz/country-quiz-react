import { useState } from 'react';
import Answer from './Answer';

const Question = ({question}) =>{
  const letter =['A','B','C','D'];
  const answers = question.answers;
  const [style, setStyle] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(false);

  const handleClick = (selectedAnswer)=>{
    selectedAnswer[1]? setStyle ('correct') : setStyle ('wrong');
    setSelectedAnswer(selectedAnswer[0]);
  }

  const renderAnswer = (answer, index)=>{
    //if there's no selected answer, style will be null
    if(!selectedAnswer){
      console.log('here')
      return (<Answer
        key = {letter[index]}
        option = {letter[index]}
        answer={answer}
        handleClick = {handleClick}
        answerStyle = {null}
        isCorrect = {null}
      />)
    }else{
      //since there's a selected answer
      //we need to disable the buttons to be clicked again
      //if it's correct
      if(style === 'correct'){
        return (<Answer
          key = {letter[index]}
          option = {letter[index]}
          answer={answer}
          handleClick = {handleClick}
          answerStyle = {selectedAnswer===answer[0] ? 'correct' : null}
          isCorrect = {true}
        />)
      }
      //if it's wrong (we'll need to paint the correct answer in green aswell)
      else if(style==='wrong'){
        return (<Answer
          key = {letter[index]}
          option = {letter[index]}
          answer={answer}
          handleClick = {handleClick}
          answerStyle = {selectedAnswer===answer[0] ? 'wrong' : null}
          isCorrect = {false}
        />)
      }

    }
  }
  
  return(
    <>
      <p>{question.question}</p>
      {question.flag ? 
      <img src={`${question.flag}`} alt="flag" /> : null}
      {answers ? 
      answers.map((answer, index)=>{
        return renderAnswer(answer, index);
      }):null
      }
    </>
  )
}

export default Question ;