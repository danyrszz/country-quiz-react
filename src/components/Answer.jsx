import './Answer.css';

const Answer = ({option, answer, handleClick, answerStyle, isCorrect}) =>{
  const click = () =>{
    //make know question component there's now a selected answer
    handleClick(answer);
  }

  // if(!isCorrect){
  //   if()
  // }

  return(
    <button className={'answer-option ' + answerStyle } onClick={click}>
      <div>{option}</div>
      <div>{answer}</div>
      <div></div>
    </button>
  )
}
export default Answer;