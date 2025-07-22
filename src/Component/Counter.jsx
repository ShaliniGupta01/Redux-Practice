import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setCountDecrement, setCountIncrement, setCountIncrementBy5 } from '../Redux/Slices/counterslice';

const Counter = () => {

   const count = useSelector((state)=>{
        return state.counter.count;
    });
  

    const dispatch = useDispatch();

    const  handleIncrement = () =>{
       dispatch (setCountIncrement());
    }

     const  handleDecrement= () =>{
       dispatch (setCountDecrement());
    }

     const  handleIncrementBy5= () =>{
       dispatch (setCountIncrementBy5(5));
    }
    // console.log(count);
    //   <h1>{count}</h1>

   
    
  return (
    <div>
       
       <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>
      
      <button onClick={handleDecrement}>-</button>

      <button onClick={handleIncrementBy5}>+5</button>
    </div>
  )
}

export default Counter
