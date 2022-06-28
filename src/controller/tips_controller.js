import {db} from "../infra/sqlite_db.js"
import {Tips} from "../model/tips_model.js"

export const tips = (app) => {
    app.get('/tips', (req, res) => {
        res.json({"your tips": db})
    })

    app.post('/tips/create', (req, res) => {
        try {
            const body = req.body;
            const newTip = new Tips(body.dica, body.data)
            db.tips.push(newTip)
            res.json({'New Tip:' : newTip})
        }catch(error) {
            res.json({"message": error.message})
        }
    })

    app.get('/tips/tips', (req, res) => {
        const alTips =  db.tips.length
        let iTip = Math.floor(Math.random() * alTips)
        const alTip = db.tips.filter(t => db.tips.indexOf(t) === iTip)
        res.json(alTip)
    })

}