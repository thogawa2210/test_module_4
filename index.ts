import express from "express";
import router from "./src/routers/router";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 8000;
const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(DB_URL)
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err.message));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(bodyParser.json());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: false }));

app.use('/', router);

app.get('/*', (req: Request, res: Response) => {
    res.render('404page')
})

app.listen(port, () => {
    console.log(`running at http://localhost:${port}`);
});