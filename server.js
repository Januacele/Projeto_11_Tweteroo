import express, {json} from "express";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

let users = [];
let tweets = [];

// Get the user information (userName and avatar)
app.post("/sign-up", (req, res) => {
    const body = req.body;

    const newUser ={
        username: body.username, 
	    avatar: body.avatar,
    }
    users.push(newUser);
    res.send("OK");
});

app.get('/sign-up', (req,res) => {
    res.send(users);
});

// Get the tweets information (userName and tweet)
app.post("/tweets", (req, res) => {
    const body = req.body;

    let userTweet = users.find(user => user.username === body.username);

    const newTweet = {
        username: body.username,
        avatar: userTweet.avatar,
        tweet: body.tweet,
    };

    tweets.push(newTweet);
    res.send("OK");
});

app.get("/tweets", (req,res) => {
    let lastTen = [];
    if(tweets.length < 10){
        for (let i = tweets.length - 1; i >= 0; i--){
            lastTen.push(tweets[i]);
        }
    } else {
        for (let i = tweets.length - 1; i >= tweets.length - 10; i--){
            lastTen.push(tweets[i]);
        }
    }

    res.send(lastTen);
})


app.listen(5000, () => console.log("Server is running."));

