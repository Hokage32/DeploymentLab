const express = require('express')

const app = express()

app.use(express.json())




app.use(express.static(`${__dirname}/public`))

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'e8672a55788b4d138e7689a8ef50c5e2',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.post('/bananas', (req,res) => {
    try{
        rollbar.info('Bananas have been delivered!')
        giveMeBananas()
    }catch (err){
        rollbar.error('ERROR')
        console.log(err)

    }
})





app.listen(4000, () => {
    console.log('app up on 4000')
})

