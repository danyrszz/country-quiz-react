
import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card';

export default function App() {   
  const [data, setData] = useState ( [] );

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

  return (
    <div className="App"> 
      <Card data={data}></Card>
    </div>
  );
}
