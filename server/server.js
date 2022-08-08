const express = require("express");
const app = express();
const port = 4000;
const pool = require("./db");
const cors = require("cors");
var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "1000mb" }));
app.use(bodyParser.urlencoded({ limit: "1000mb", extended: true }));

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "Hello World!" });
});

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//create a new user
app.post("/user", async (req, res) => {
  try {
    const { id, username, password, display_name, email, profile_image } =
      req.body;
    const queryText = `INSERT INTO "Users"(id, username, password, display_name, email, profile_image) VALUES (${id}, '${username}', '${password}', '${display_name}', '${email}', '${profile_image}')`;
    const { rows } = await pool.query(queryText);
    res.json(rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a user
app.put("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { like, retweet } = req.body;

    const activeUser = await pool.query(
      `SELECT likes, retweets FROM "Users" WHERE id = '${id}'`
    );
    const { likes, retweets } = activeUser.rows[0];
    let likesArray =
      likes === null || likes.length < 1 ? [] : likes[0].split(",");
    likesArray = likesArray.filter((e) => e !== "");
    let retweetsArray =
      retweets === null || retweets.length < 1 ? [] : retweets[0].split(",");
    retweetsArray = retweetsArray.filter((e) => e !== "");

    if (req.body.like) {
      if (likesArray.includes(like)) {
        likesArray = likesArray.filter((e) => e !== like);
      } else {
        likesArray.push(like);
      }
    }

    if (req.body.retweet) {
      if (retweetsArray.includes(retweet)) {
        retweetsArray = retweetsArray.filter((e) => e !== retweet);
      } else {
        retweetsArray.push(retweet);
      }
    }

    console.log("likesArray", likesArray);
    console.log("retweetsArray", retweetsArray);

    const queryText = `UPDATE "Users" SET likes = ARRAY['${likesArray}'], retweets=ARRAY['${retweetsArray}'] WHERE id=${id}`;

    const { rows } = await pool.query(queryText);
    res.json(rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get a user by id
app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const queryText = `SELECT * FROM "Users" WHERE id = '${id}'`;
    const { rows } = await pool.query(queryText);
    res.json(rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// create a tweet
app.post("/tweet", async (req, res) => {
  try {
    const {
      str_id,
      text,
      user_id,
      reply_count,
      retweet_count,
      like_count,
      hashtags,
      user_mentions,
      urls,
      media,
    } = req.body;

    const queryText = `INSERT INTO "Tweets"(str_id, text, user_id,  hashtags,user_mentions, urls,media ) 
                        VALUES('${str_id}', '${text}', ${user_id}, ARRAY['${hashtags}'],ARRAY['${user_mentions}'],ARRAY['${urls}'],ARRAY ['${media}'] )
                        RETURNING *`;
    const { rows } = await pool.query(queryText);
    res.json(rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get a tweet by id
app.get("/tweet/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const queryText = `SELECT * FROM "Tweets" WHERE str_id = '${id}'`;
    const { rows } = await pool.query(queryText);
    res.json(rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all tweets
app.get("/tweets", async (req, res) => {
  try {
    const queryText = `SELECT * FROM "Tweets" ORDER BY created_at DESC`;
    const { rows } = await pool.query(queryText);
    res.json(rows);
  } catch (err) {
    console.error(err.message);
  }
});

//update a tweet
app.put("/tweet/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      text,
      reply_count,
      retweet_count,
      like_count,
      hashtags,
      user_mentions,
      urls,
      media,
    } = req.body;
    const queryText = `UPDATE "Tweets" SET text = '${text}', reply_count = ${reply_count}, retweet_count = ${retweet_count}, like_count = ${like_count}, hashtags = ARRAY['${hashtags}'], user_mentions = ARRAY['${user_mentions}'], urls = ARRAY['${urls}'], media = ARRAY['${media}'] WHERE str_id = '${id}' RETURNING *`;
    const { rows } = await pool.query(queryText);
    res.json(rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//delete a tweet
app.delete("/tweet/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const queryText = `DELETE FROM "Tweets" WHERE str_id = '${id}'`;
    const deleteTweet = await pool.query(queryText);
    res.json("Tweet deleted");
  } catch (err) {
    console.error(err.message);
  }
});
