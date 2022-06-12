import winners from '../img/winners.svg';
import './TryAgain.css';

const TryAgain = ({correctAnswers, resetGame})=>{

  function reset(){
    resetGame();
  }
  return (
    <div className="try-again-wrapper">
      <img src={winners} alt="winners-img" />
      <h1>Results</h1>
      <p>You got {correctAnswers} correct answers!</p>
      <button className='try-again-button' onClick={reset}>Try Again</button>
    </div>
  )
}
export default TryAgain;