// Härifrån startar vi upp vår webshop
const {app, port} = require('./src/server')


// Klicka igång servern
const server = app.listen(port, ()=> console.log(`App listening on port ${port}!`))


