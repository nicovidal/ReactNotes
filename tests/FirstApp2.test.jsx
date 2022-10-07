import { render,screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";




describe('Pruebas en <first app/>', () => { 
  const subTitle='soy un subtitulo'
  const title='Hola,soy Nico'
  test('debe de hacer un match con el spapshot', () => { 
    const {container}=render(<FirstApp title={title}/>)
    expect(container).toMatchSnapshot();
   });

   test('debe de mostrar el mensaje "Hola,soy Nico"', () => { 

    render(<FirstApp title={title}/>);
    expect(screen.getByText(title)).toBeTruthy();
    /* screen.debug(); */



    });

    test('debe de mostar el titulo en un h1', () => { 

      render(<FirstApp title={ title }/>);
      expect(screen.getByRole('heading',{level: 1 }).innerHTML).toContain(title);

     });

     test('debe de mostrar el subitulo enviado por props', () => { 
        render(<FirstApp 
              title={ title }
              subTitle={ subTitle }
              />
              
            );
            expect(screen.getAllByText(subTitle).length).toBe(2);
      });
 });