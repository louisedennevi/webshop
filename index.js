// Härifrån startar vi upp vår webshop
const {app, port, config} = require('./src/server')
const mongoose = require('mongoose')



// Klicka igång servern
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect(config.databaseURL, options).then(() => {
    //app is listening to port 
    app.listen(port, ()=> console.log(`App listening on port ${port}!`))
})




