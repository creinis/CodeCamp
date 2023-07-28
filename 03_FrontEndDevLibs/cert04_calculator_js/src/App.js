import { useState } from 'react'; 
import './App.css';

function App() {

  const [display, setDisplay] = useState('0');

  const imputNumber = (event) => {
    const number = event.target.textContent;

    if(display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
    
  };

  const imputOperator = (event) => {
    const operator = event.target.textContent;
    setDisplay(display + ' ' + operator + ' ');
  };

  const imputEquals = () => {
    setDisplay(eval(display));
  };

  const imputDecimal = () => {
    const array = display.split(' ');
    const lastElement = array[array.length - 1];

    if(!lastElement.includes('.') && isNaN(parseInt(lastElement))  === false) 
    {
      setDisplay(display + '.');
    }
  };

  const imputClear = () => {
    setDisplay('0');
  }

  const imputDelete = () => {

  };

  return (
    <div className="App">
      <div className="calculator">
        <div id="display" className="row"> {display} </div>
        <div id="clear" className="double"onClick={imputClear} >AC</div>
        <div id="delete" onClick={imputDelete} >Del</div>
        <div id="add" onClick={imputOperator} >+</div>
        <div id="subtract" onClick={imputOperator} >-</div>
        <div id="divide" onClick={imputOperator} >/</div>
        <div id="multiply" onClick={imputOperator} >*</div>

        <div id="seven" onClick={imputNumber} >7</div>
        <div id="eight" onClick={imputNumber} >8</div>
        <div id="nine" onClick={imputNumber} >9</div>
        
        <div id="four" onClick={imputNumber} >4</div>
        <div id="five" onClick={imputNumber} >5</div>
        <div id="six" onClick={imputNumber} >6</div>
        
        <div id="one" onClick={imputNumber} >1</div>
        <div id="two" onClick={imputNumber} >2</div>
        <div id="three" onClick={imputNumber} >3</div>
        
        <div id="zero" onClick={imputNumber} >0</div>
        <div id="decimal" onClick={imputDecimal} >.</div>
        <div id="equals" onClick={imputEquals} >=</div>
        
      </div>;

    </div>
  );
}

export default App;
