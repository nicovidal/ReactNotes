import PropTypes from 'prop-types';



export const CounterApp = ({value}) => {
  return (
    <div>
    <div>CounterApp</div>
    <h2>{value}</h2>
    </div>
  )
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