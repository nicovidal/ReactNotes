import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";




describe('Pruebas en <first app/>', () => { 

/*     test('debe de hacer match con el snapshot', () => { 
        const title="Hola, soy Nico"
        //renderisa el componente en memoria
        const { container }=render(<FirstApp title={title}/>)

        expect(container).toMatchSnapshot();

     }); */

     test('debe de mostrar el titulo en un h1', () => {            
        const title="Hola, soy Nico";
        //renderisa el componente en memoria
        const { container,getByText,getByTestId }=render(<FirstApp title={title}/>);

        expect(getByTestId('test-title').innerHTML).toContain(title);


        //queryselector buscar algo en un html
       /*  const h1=container.querySelector('h1');
        expect( h1.innerHTML).toBe(title);
        expect( h1.innerHTML).toContain(title); */

      });
      test('debe de mostrar el subtitulo enviado por props', () => { 
        const title="Hola, soy Nico";
        const subTitle='soy un subtitulo'
        const {getByText,getAllByText}=render(
          <FirstApp
              title={title}
              subTitle={subTitle}
          
          />
        )
        //solo encontrar uno 
        /* expect(getByText(subTitle)).toBeTruthy(); */

        //traer mas de un elemento.
        // como un arreglo y se puede preguntar que cuanto entrego.
        expect(getAllByText(subTitle).length).toBe(2);
        
        
   })
 });