import { useState, useEffect} from 'react';
import Question from './Question';

const Card = () =>{

  const [data, setData] = useState ( [] );
  const [gameState, setGameState] = useState ({
    correctAnswers : 0,
    ended : false
  })

  useEffect(
    ()=>{
      async function getQuestion (){
        try{
          const res = await fetch("https://restcountries.com/v3.1/all");
          const data = await res.json();
          if(data) setData(data);
        }catch (err) {
          console.log(err);
          return null;
        }
      }
      getQuestion();
    }, 
  []);

  function getAnswer(answer){
    //la respuesta solo puede clicarse una vez, al hacerlo actualizar el estado
    //al obtenerla esperar 1 segundo e ir a la siguiente pantalla/pregunta
    console.log(answer)
    if(answer[1]){
      setGameState({...gameState, correctAnswers: gameState.correctAnswers+1});
    }else{
      setGameState({...gameState, ended: true});
    }
  }

  return(
    <Question 
      data={data}
      getAnswer = { getAnswer }
    />
  )
}

export default Card;