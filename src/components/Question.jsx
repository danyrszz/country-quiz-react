import Answer from './Answer';
import { useState, useEffect} from 'react';
import randomQuestion from '../models/randomQuestion';

const Question = ({data, getAnswer}) =>{
  const[question, setQuestion] = useState ('');
  const[answers, setAnswers] = useState ([]);
  const letter =['A','B','C','D'];

  useEffect(
    ()=>{
      async function generateQuestion(){
        const countries = await data;
        const q = new randomQuestion(countries);
        const correctAnswerPosition = q.generateRandomNumber(4);

        let tempAnswers = [];
        q.wrongAnswers.forEach(answer => { tempAnswers.push([answer,false]) });
        tempAnswers.splice(correctAnswerPosition, 0, [q.completeQuestion.answer, true])
        setQuestion(q.completeQuestion.question);
        setAnswers(tempAnswers);
        console.log(q);
      }
      generateQuestion();
  }, [data]);

  return(
    <>
      <p> {question} </p>
      {answers.map( (answer, index)=>{
        return <Answer 
          option = {letter[index]}
          answer = {answer}
          key = {index}
          handleClick = { ()=> getAnswer(answer) }
        />
      })}
    </>
  )
}

export default Question ;