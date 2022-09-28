//import { Fragment } from "react"

//const newMessage='Nicolas';

const newMessage={
    message:'WEna wena',
    title:'Nicolas'
}

//para traer el objeto se puede user Json.stringfy

function getString(){
    return(
    <h1>hola hola soy una funcion</h1>
    
    )
}


export function FirstApp (){
    //se puede sacar de aqui
    /* const newMessage='Nicolas'; */

    return(
        <div>
        <h1>{ getString()}</h1>
        <h1>First App</h1>
        {/* <code>{JSON.stringify(newMessage)}</code> */}
        <h1>{ newMessage.title }</h1>
        <p>Soy un subtitulo </p>
        </div>
    )
}

//puedo hacerlo asi igualmente
/* export const FirstApp=()=><h1>First App</h1> */

//forma 3
/* export const FirstApp = () => {
    return (
      <h1>FirstApp</h1>
    );
  }
   */