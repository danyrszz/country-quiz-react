import './Answer.css';

const Answer = ({option, answer, handleClick, isCorrect, selectedAnswer}) =>{

  const click = () =>{
    //make know question component there's now a selected answer
    handleClick(answer);
  }

  const setAnswerStyle = ()=> {
    if(isCorrect===null){
      return 'answer-option';
    }else{
      //compare the answer with the selected answer
      if(isCorrect && selectedAnswer===answer[0]){
        return 'answer-option correct'
      }
      if(isCorrect && selectedAnswer!==answer[0]){
        return 'answer-option'
      }
      if(!isCorrect && selectedAnswer===answer[0]){
        return 'answer-option wrong'
      }
      if(!isCorrect && answer[1]){
        return 'answer-option correct'
      }
      if(!isCorrect&& answer[0]!==selectedAnswer){
        return 'answer-option'
      }
    }
  }

  const getIcon = ()=>{
    if (setAnswerStyle()==='answer-option correct') return 'check_circle';
    if (setAnswerStyle()==='answer-option wrong') return 'cancel';
    return null;
  }

  return(
    <button 
    className={ setAnswerStyle() } 
    onClick={click} 
    disabled ={isCorrect!=null ? true : false} > 
      <div>{option}</div>
      <div>{answer}</div>
      <span className="material-symbols-outlined icon-size">
        {getIcon()}
      </span>
    </button>
  )
}
export default Answer;