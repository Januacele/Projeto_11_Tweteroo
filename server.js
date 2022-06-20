import express, {json} from "express";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

const users = [];
const tweets = [];

// Get the user information (userName and userImage)
app.post("/sign-up", (req, res) => {
    const sign = req.body;
    users.push(sign);
    res.send("OK");
});

app.get('/sign-up', (req,res) => {
    res.send(users);
})

// Get the tweets information (userName and tweet)
app.post("/tweets", (req, res) => {
    const tweet = req.body;
    tweets.push(tweet);
    res.send("Tweets Cadastrados");
});

app.get("/tweets", (req,res) => {
    res.send(tweets);
})


app.listen(5000);