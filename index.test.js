const saludo = require('./index')


test("de esperar un hola mundo", ()=>{
    expect(saludo()).toBe("hola mundo")
})
