import PropTypes from 'prop-types';
import { useState } from 'react';


export const CounterApp = ({value}) => {

    const [ counter,setCounter ]=useState(value);

    const handledAdd=()=>{

        setCounter((c)=>c+1)


    }
    const handdleSubstract=()=>{
        setCounter((c)=>c-1)
    }
    const handdleReset=()=>{
        /* setCounter((c)=>c=value) */
        setCounter(value)
    }
  return (
    <div>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>
        <button onClick={handledAdd}>+1</button>
        <button onClick={handdleSubstract}>-1</button>
        <button onClick={ handdleReset }>Reset</button>
    </div>
  );
}



CounterApp.propType={

    value:PropTypes.number.isRequired
}
