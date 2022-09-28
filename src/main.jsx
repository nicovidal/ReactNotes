//elementos para renderizar la app
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp';

//importar el componente
//import { App} from './HelloWorldApp'



//todo react comienza con un componente no es mas que una funcion
//function alt components 

//function App(){
    //document.createElement...
    //estoe s una forma sensilla
    //return(<h1>Hola Mundo!!</h1>)

//}


//ahora lo renderizamos

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp/>
    </React.StrictMode>
)