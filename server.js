import express, {json} from "express";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

const users = [];

app.post("/sign-up", (req, res) => {
    const sign = req.body;
    users.push(sign);
    res.send("OK");
});

app.get('/sign-up', (req,res) => {
    res.send(users);
})

app.listen(5000);