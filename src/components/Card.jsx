import Answer from './Answer';
import { useState, useEffect} from 'react';
import randomQuestion from '../models/randomQuestion';

const Card = ({data}) =>{
  const[question, setQuestion] = useState ('');
  const[answers, setAnswers] = useState ([]);

  useEffect(
    ()=>{
      async function generateQuestion(){
        const countries = await data;
        const q = new randomQuestion(countries);

        console.log(q)
        setQuestion(q.completeQuestion.question);
      }
      generateQuestion();
    }, [data]);

  return(
    <div>Card</div>
  )
}

export default Card;