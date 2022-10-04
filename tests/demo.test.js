describe('Pruebas en <demoComponente/>',()=>{


test('Esta prueba no debe de fallar',()=>{
    //1 Inicializacion
    const message1='Hola mundo';
    //2.estimulo
    const message2=message1.trim();
    //3.observar el comportamiento ... esperado
    //toBe es que sea igual a 
    /* expect(message1).toBe(message2); */
    expect(message1).toBe(message2);

    });
});