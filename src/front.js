import React from 'react';
import { useState } from 'react';
import './App.css'
const Front = () => {
    const [input,setInput]=useState('');
     const[result,setResult]=useState(0)

    const changehandler=e=>
    {
        setInput(e.target.value);
    }
  return <div>
      <div className='container'>
          <h3 style={{"fontFamily":"italic","fontWeight":"bold","color":"rgb(15, 5, 148)"}}>Simple caluculator</h3>
          <input type="text" name='input' className='top' onChange={changehandler} value={input}/>
    
     <br/>
     <button  className='btn btn-primary pl-9' onClick={()=>setResult(eval(input))}>Result</button>
     <br/>
     <br/>
     <h3>Result: {result}</h3>

     <button className='btn btn-secondary' onClick={()=>setInput(input+'1')} >1</button>
     <button className='btn btn-secondary' onClick={()=>setInput(input+'2')} >2</button>
     <button className='btn btn-secondary' onClick={()=>setInput(input+'3')} >3</button>
     <button className='btn btn-secondary'onClick={()=>setInput(input+'4')}>4</button>
     <br/>
     <button className='btn btn-secondary' onClick={()=>setInput(input+'5')}>5</button>
     <button className='btn btn-secondary' onClick={()=>setInput(input+'6')}>6</button>
     <button className='btn btn-secondary' onClick={()=>setInput(input+'7')}>7</button>
     <button className='btn btn-secondary' onClick={()=>setInput(input+'8')}>8</button>
     <br/>
     <button className='btn btn-secondary' onClick={()=>setInput(input+'9')}>9</button>
     <button className='btn btn-secondary' onClick={()=>setInput(input+'0')}>0</button>

     <button className='btn btn-secondary' onClick={()=>setInput(input+'+')}>+</button>
     <button className='btn btn-secondary' onClick={()=>setInput(input+'-')}>-</button>
     <br/>
     <button className='btn btn-secondary' onClick={()=>setInput(input+'*')}>*</button>
     <button className='btn btn-secondary' onClick={()=>setInput(input+'%')}>%</button>
     <button className='btn btn-secondary' onClick={()=>setInput(input+'/')}>/</button>
     <button className='btn btn-secondary' onClick={()=>{setInput('');setResult(0)}}>clr</button>
     <br/>
     <button className='btn btn-primary btn-block' onClick={()=>setResult(eval(input))}>=</button>

  </div>
  </div>;
};

export default Front;
