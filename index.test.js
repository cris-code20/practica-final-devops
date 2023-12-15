const saludo = require('./app.js')

test("de esperar un hola mundo", ()=>{
    expect(saludo()).toBe("hola mundo")
})