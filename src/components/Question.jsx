import Answer from './Answer';
import { useState, useEffect} from 'react';
import randomQuestion from '../models/randomQuestion';

const Question = ({data}) =>{
  const[question, setQuestion] = useState ('');
  const[answers, setAnswers] = useState ([]);

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
      }
      generateQuestion();
    }, [data]);

  return(
    <div>Card</div>
  )
}

export default Card;