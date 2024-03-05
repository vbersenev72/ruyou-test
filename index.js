import express from 'express'
import { config } from 'dotenv'
import router from './src/routers/index.js'
import swagger from './swaggerConfig.js'
import cors from 'cors'

config()

const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', router)

const start = () => {
    try {

        swagger(app)
        app.listen(port, () => console.log(`server started on ${port}`))

    } catch (error) {
        console.log(error);
    }
}


start()