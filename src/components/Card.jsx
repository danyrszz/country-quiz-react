import { useState, useEffect} from 'react';
import Question from './Question';
import randomQuestion from '../models/randomQuestion';

const Card = () =>{

  const [question ,setQuestion] = useState ( [] );

  useEffect(
    ()=>{
      async function getData (){
        try{
          const res = await fetch("https://restcountries.com/v3.1/all");
          const fetchedData = await res.json();
          const q = new randomQuestion(fetchedData);
          setQuestion(q.allQuestionData);
        }catch (err) {
          console.log(err);
          return null;
        }
      }
      getData();
    }, 
  []);

  return(
    <>
   <h1>you are in card</h1>
   <Question 
     question = {question}
   />
    </>
  )
}

export default Card;