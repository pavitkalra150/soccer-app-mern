import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/soccerRoutes';
import cors from 'cors';
const app = express();
const PORT = 4000;


app.use(cors());

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB',{
    useNewURLParser:true,
    useUnifiedTopology:true
});

//bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/',(req,res) => 
res.send(`Our soccer application is running on ${PORT}`)
)

routes(app);


app.listen(PORT,() =>
console.log(`Your soccer server is running on port ${PORT}`)
)