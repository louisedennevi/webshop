// Här ska vi definiera vår server! Men vi ska inte starta den
// (alltså app.listen(port, () =>{}), har vi inte i denna fil, utan i index.js


// Test för server.js

const supertest = require('supertest')
const {app, port} = require('../src/server') // hämtar in app och port från server.js

describe('Simple test, does it work?', () => { // huvudrubrik till våra test
    let server

    beforeEach(() => { // beforeEach körs innan varje 'it' test
        
        server = app.listen(port, () => console.log('Testing server up'))

    })

    it('Should repond to', (done) => { // ett test för att se om servern svarar på get
        
        supertest(server).get('/').expect(200, done); 

    })

    afterEach((done) => {    // afterEach körs efter varje 'it' test
        server.close(done)  // servern stängs
    })

})


