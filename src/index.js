import express from 'express'
import dbConnction from './config/database'
import routes from './routes/router'
import cors from 'cors'

const app = express()


app.set('port', process.env.PORT_APP || process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log("Server is running on port " + app.get('port'));
})

app.use(express.json());
app.use(dbConnction)
app.use(cors())


app.get('/', (req, res) => {
    res.json({'message' : 'Welcome to app'});
})

app.use(routes)