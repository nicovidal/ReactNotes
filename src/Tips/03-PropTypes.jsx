
//son las propiedades a la funcion
//se debe destructurar
//un PropTypes sirven para definirle el tipo alas properties
import PropTypes from 'prop-types';


export const FirstApp =({title,subTitle})=>{
   
 

    return(
        <div>
        <h1>{ title}</h1>
        {/* <code>{JSON.stringify(newMessage)}</code> */}   
        <p>{subTitle} </p>
        </div>
    )
}


FirstApp.protoType={

    title:PropTypes.string.isRequired,
    subTitle:PropTypes.string.isRequired
}



