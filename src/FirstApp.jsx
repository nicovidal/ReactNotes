
//son las propiedades a la funcion
//se debe destructurar
//un PropTypes sirven para definirle el tipo alas properties
import PropTypes from 'prop-types';


export const FirstApp =({title,subTitle,name})=>{
   title,
   subTitle
 

    return(
        <div>
        <h1 data-testid="test-title">{ title}</h1>
        {/* <code>{JSON.stringify(newMessage)}</code> */}   
        <p>{subTitle} </p>
        <p>{subTitle} </p>
        <p>{name}</p>
        </div>
    )
}


FirstApp.protoType={

    title:PropTypes.string.isRequired,
    subTitle:PropTypes.string.isRequired
}

//se puede definir cualquier cantidad de valores

FirstApp.defaultProps={
    /* title:'NO hay ningun Titulo', */
    subTitle:'No hay subtitulo',
    name:'nico',

}



