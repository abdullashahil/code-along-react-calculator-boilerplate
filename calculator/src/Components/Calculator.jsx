import React, { useState } from 'react';

function Calculator() {
  const [exp, setExp] = useState('');
  const [val, setVal] = useState('0');

  function inputhandler(e) {

    if(e.target.innerHTML.length<4){
      switch (e.target.innerHTML) {
        case 'x':
          setExp(exp + val + '*');
          setVal('');
          break;
        case '+':
          setExp(exp + val + '+');
          setVal('');
          break;
        case '-':
          setExp(exp + val + '-');
          setVal('');
          break;
        case '÷':
          setExp(exp + val + '/');
          setVal('');
          break;
        case '=':
          try {
            setVal(eval(exp + val));
          } catch (error) {
            setVal('Error');
          }
          setExp('');
          break;
        case 'AC':
          setVal('');
          setExp('');
          break;
        case 'DEL':
          if (val.length > 0) {
            let newval = val.slice(0, -1);
            setVal(newval);
          }
          break;
        default:
          setVal((val === '0' || isNaN(val)) ? e.target.innerHTML : val + e.target.innerHTML);
          break;
      }
    }
  }

  return (
    <div className='main'>
      <h1 className="head">Calculator</h1>

      <div className="calculator" onClick={inputhandler}>

        <div className="result btn">
          <h1 className="result-val">
            {exp}
          <br />{val}
          </h1>
         
         
        </div>

        <button className='btn btn2 ac'>
          AC
        </button>

        <button className='btn btn2 delete'>
          DEL
        </button>

        <button className='btn btn2 division'>
          ÷
        </button>

        <button className='btn btn2'>
          1
        </button>

        <button className='btn btn2'>
          2
        </button>

        <button className='btn btn2'>
          3
        </button>

        <button className='btn btn2 multiply'>
          x
        </button>

        <button className='btn btn2'>
          4
        </button>

        <button className='btn btn2'>
          5
        </button>

        <button className='btn btn2'>
          6
        </button>

        <button className='btn btn2 add'>
          +
        </button>

        <button className='btn btn2'>
          7
        </button>

        <button className='btn btn2'>
          8
        </button>

        <button className='btn btn2'>
          9
        </button>

        <button className='btn btn2 subtraction'>
          -
        </button>

        <button className='btn btn2 dot'>
          .
        </button>

        <button className='btn btn2'>
          0
        </button>

        <button className='btn btn2 equal'>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
