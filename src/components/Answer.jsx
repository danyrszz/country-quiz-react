import './Answer.css';

const Answer = ({option, answer, answerStatus}) =>{
  return(
    <button className='answer-option'>
      <div>{option}</div>
      <div>{answer}</div>
      <div> {answerStatus} </div>
    </button>
  )
}

export default Answer;