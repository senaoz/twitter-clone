User will be able to,
- Tweeting (can write 240 characters and upload images),
- Liking a tweet,
- Retweet a tweet,
- Deleting your own tweet.

<img width="70%" alt="entity relationship diagram" src="https://user-images.githubusercontent.com/66164676/183708486-fbdac543-701d-4ac1-87ad-55f6a4a44303.png">

## Tweets

For get all tweets from most recent to oldest
- **GET /tweets**

For creating a tweet
- **POST /tweet** 

For get a tweet by id
- **GET /tweet/{id}**

## User

For update a tweet by id
- **PUT /tweet/{id}**

For get a user by id
- **GET /user/{id}**


For create a new user
- **POST /user**


For get a users' retweets&likes by id
- **GET /user/{id}/actions**


For update a users' retweets&likes by id
- **PUT /user/{id}**


