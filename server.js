import express from 'express'

import router from './controller.js'

const app = express()

app.set('port', process.env.PORT || 3005)
app.use(express.json())

app.use('/design-patterns-example', router)

app.listen(app.get('port'), () => {
    console.log('Server listening on port ' + app.get('port'))
})

