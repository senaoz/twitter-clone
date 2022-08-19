# Twitter Web Clone

### Built with
- ReactJS
- Material UI
- NodeJS
- PostgreSQL

User will be able to,
- Tweeting (can write and upload images),
- Liking a tweet,
- Retweet a tweet,
- Deleting your own tweet.

<img width="70%" alt="entity relationship diagram" src="https://user-images.githubusercontent.com/66164676/183708486-fbdac543-701d-4ac1-87ad-55f6a4a44303.png">

## Tweets

For get all tweets from most recent to oldest
```javascript
GET /tweets
```

For creating a tweet
```javascript
POST /tweet
```

For get a tweet by id
```javascript
GET /tweet/{id}
```

For update a tweet by id
```javascript
PUT /tweet/{id}
```

## User

For get a user by id
```javascript
GET /user/{id}
```

For get a user by id
```javascript
GET /user/{id}
```

For get a user's password and email by id
```javascript
GET /user/{id}/authentication
```

For get a user's public information (display name, username, created time, profile image, likes, retweets) by id
```javascript
GET /user/{id}/public
```

For create a user
```javascript
POST /user
```

For get a user by id
```javascript
GET /user/{id}
```

For get a user's retweets&likes by id
```javascript
GET /user/{id}/actions
```

For update a user's retweets&likes by id
```javascript
PUT /user/{id}
```
