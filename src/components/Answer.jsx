import './Answer.css';

const Answer = ({option, answer, answerStatus, handleClick}) =>{
  return(
    <button className='answer-option' onClick={handleClick}>
      <div>{option}</div>
      <div>{answer}</div>
      <div> {answerStatus} </div>
    </button>
  )
}
export default Answer;