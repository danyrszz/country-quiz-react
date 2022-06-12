import './Status.css';
const Status = ({correctAnswers, lives})=>{
  return(
    <div className="status">

    <div className="status-element">
      <span className="material-symbols-outlined icon-size">
      done
      </span>
      <span>{correctAnswers}</span>
    </div>

    <div className="status-element">
      <span className="material-symbols-outlined">
      sentiment_satisfied
      </span>
      <span>{lives}</span>
    </div>


    </div>
  )
}

export default Status;