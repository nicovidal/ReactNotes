import{fireEvent, render,screen}from'@testing-library/react';
import{ CounterApp } from '../src/CounterApp';


describe('Pruebas en CounterApp', () => { 
    const value=20;

    test('debe de hacer match con el snapshot', () => { 
        const {container}=render(<CounterApp/>)
        expect(container).toMatchSnapshot();


     });

     test('debe de mostrar el valor inicial de 100', () => {  
        render (<CounterApp value={value}/>)
        expect(screen.getByText(value)).toBeTruthy();

     });


    test('debe de incrementar con el boton +1', () => {  

        render(<CounterApp value={value}/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('21')).toBeTruthy();

    });
    test('debe de decrementar con el boton -1', () => {  

        render(<CounterApp value={value}/>);
        fireEvent.click(screen.getByText('-1'));
        screen.debug();
        expect(screen.getByText('19')).toBeTruthy();

    });
    test('debe de resetear el boton', () => {  

        render(<CounterApp value={value}/>);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));

        fireEvent.click(screen.getByRole('button',{name:'btn-reset'}));
        expect(screen.getByText(value)).toBeTruthy();

    });


});