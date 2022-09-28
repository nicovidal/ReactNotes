import PropTypes from 'prop-types';



export const CounterApp = ({value}) => {
    const handledAdd=(event)=>{
        /* console.log(event) */
        console.log('+1')
        value+=1000;
    }
  return (
    <div>
        <h1>CounterApp</h1>
        <h2>{value}</h2>
        {/* <button onClick={(event)=>handledAdd(event,'hola')}></button> */}
        <button onClick={handledAdd}>
            +1
        </button>
    </div>
  );
}


/* export function CounterApp({value}){

    return(
        <div>
        <h1>CounterApp</h1>
        <h2>{ value }</h2>
        </div>
    )
} */

CounterApp.protoType={

    value:PropTypes.number.isRequired
}

//hay que avisar a react de que haga el cambio en el value