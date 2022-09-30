import PropTypes from 'prop-types';
import { useState } from 'react';


export const CounterApp = ({value}) => {
    //destructurar algo
    //y se declara el valor del estado
    // se designa con set para hacerlo cambiar
    const [ counter,setCounter ]=useState(value);

    const handledAdd=()=>{
        //aqui hace cambiar el estado.
        //setCounter(counter+1)
        //va a tener el valor actual del counter + 1
        setCounter((c)=>c+1)

    }
  return (
    <div>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>
        <button onClick={handledAdd}>
            +1
        </button>
    </div>
  );
}



CounterApp.propType={

    value:PropTypes.number.isRequired
}
