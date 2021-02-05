import { useState } from 'react';
import Draggable from 'react-draggable';

// Main Component
const Calculator = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");

  if(props.props === true && isActive !== true){
    setIsActive(true)
  } 
  if(props.props === false && isActive !== false){
    setIsActive(false)
  }

  // our method to handle all click events from our buttons 
  const handleClick = (value) =>{ 
    // get the value from the target element (button) 
    switch (value) { 
      case '=': { 
        // if it's an equal sign, use the eval module 
        // to evaluate the question ,convert the answer 
        // (in number) to String 
        if (question !== '') 
        { 
          let ans=''; 
          try { 
              ans = eval(question); 
            } 
            catch(err) 
            { 
              setAnswer("Math Error"); 
            } 
            if (ans===undefined) {
              setAnswer("Math Error"); 
            } else {
              setAnswer(ans);  setQuestion(''); 
            }
        } 
        break;
      } 
      case 'Clear': { 
  
        // if it's the Clears sign, just clean our  
        // question and answer in the state 
        setQuestion('')
        setAnswer(''); 
        break; 
      } 
  
      case 'Delete': { 
        var str = question; 
          str = str.substr(0,str.length-1); 
          setQuestion(str); 
          break; 
      } 
  
    default: { 
        // for every other command, update the answer in the state 
        setQuestion(question + value); 
        break; 
      } 
    } 
  } 

  if(isActive === true){
    return (
      <Draggable handle=".handle">
        <div className="Calculator">
          <div className="calculator-x-button-div handle">
            <p className="calculator-title"><strong>Calculator</strong></p>
            <button className="calculator-x-button" onClick={() => {props.setClose(false)}}>x</button>
          </div>
          <div className="calculator-case">
            <div className="screen"> 
              <div className="screen-row"> 
                <input className="calculator-screen" type="text" readOnly value={question}/> 
              </div>
              <div className="screen-row"> 
                <input className="calculator-screen" type="text" readOnly value={answer}/> 
              </div>
            </div>
            <div className="button-row"> 
              <button label={'Clear'} onClick={() => {handleClick('Clear')}}>Clear</button>
              <button label={'Delete'} onClick={() => {handleClick('Delete')}}>Delete</button>
              <button label={'.'} onClick={() => {handleClick('.')}}>.</button>
              <button label={'/'} onClick={() => {handleClick('/')}}>/</button>
            </div> 
            <div className="button-row"> 
              <button label={'7'} onClick={() => {handleClick('7')}}>7</button>
              <button label={'8'} onClick={() => {handleClick('8')}}>8</button>
              <button label={'9'} onClick={() => {handleClick('9')}}>9</button>
              <button label={'*'} onClick={() => {handleClick('*')}}>*</button>
            </div> 
            <div className="button-row"> 
              <button label={'4'} onClick={() => {handleClick('4')}}>4</button>
              <button label={'5'} onClick={() => {handleClick('5')}}>5</button>
              <button label={'6'} onClick={() => {handleClick('6')}}>6</button>
              <button label={'-'} onClick={() => {handleClick('-')}}>-</button>
            </div> 
            <div className="button-row"> 
              <button value={'1'} onClick={() => {handleClick('1')}}>1</button>
              <button label={'2'} onClick={() => {handleClick('2')}}>2</button>
              <button label={'3'} onClick={() => {handleClick('3')}}>3</button>
              <button label={'+'} onClick={() => {handleClick('+')}}>+</button>
            </div> 
            <div className="button-row"> 
              <button onClick={() => {handleClick('0')}}>0</button>
              <button onClick={() => {handleClick('=')}}>=</button>
            </div> 
          </div>
        </div>
      </Draggable> 
    )
  } else {
    return null;
  }
}

export default Calculator