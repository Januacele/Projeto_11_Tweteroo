import express, {json} from "express";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

const users = [];
const tweets = [];

// Get the user information (userName and avatar)
app.post("/sign-up", (req, res) => {
    const sign = req.body;

    const newUser ={
        username: sign.username, 
	    avatar: sign.avatar,
    }
    users.push(newUser);
    res.send("OK");
});

app.get('/sign-up', (req,res) => {
    res.send(users);
});

// Get the tweets information (userName and tweet)
app.post("/tweets", (req, res) => {
    const tweet = req.body;

    const newTweet = {
        username: tweet.username,
        avatar: tweet.avatar,
        tweet: tweet.tweet,
    }

    tweets.push(newTweet);
    res.send("OK");
});

app.get("/tweets", (req,res) => {
    let lastTen = [];
    if(tweets.length < 10){
        for (let i = tweets.length-1; i >= 0; i--){
            lastTen.push(tweets[i]);
        }
    } else {
        for (let i = tweets.length-1; tweets.length - 10; i--){
            lastTen.push(tweets[i]);
        }
    }

    res.send(lastTen);
})


app.listen(5000, () => console.log("Server is running."));

