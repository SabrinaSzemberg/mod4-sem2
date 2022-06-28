import  express  from "express";
const app = express()

import {db} from './infra/sqlite_db.js'
import {tips} from './controller/tips_controller.js'

app.use(express.json())

tips(app, db)

app.listen(3030, () => {
    console.log('Rodando servidor na porta 3030');
})
