export default function sampleTweets() {
  const utcDate1 = new Date(Date.UTC(2017, 1, 2, 3, 4, 5));

  const tweets = [
    {
      str_id: "1000",
      created_at: utcDate1.toUTCString(),
      text: "1- Today we\u2019re sharing our vision for the future of the Twitter API platform!",
      user: {
        user_id: 2244994945,
        name: "Twitter Dev",
        profile_image_url:
          "https://pbs.twimg.com/profile_images/1445765299974795279/ExVMkDHG_400x400.jpg",
        username: "TwitterDev",
      },
      reply_count: 0,
      retweet_count: 57,
      like_count: 324,
      retweeted: false,
      liked: false,
      entities: {
        hashtags: [],
        user_mentions: [],
        urls: [],
        media: [
          "https://pbs.twimg.com/profile_images/1445765299974795279/ExVMkDHG_400x400.jpg",
        ],
      },
    },
  ];

  for (let i = 0; i < tweets.length; i++) {
    localStorage.setItem(
      `tweet-${tweets[i].str_id}`,
      JSON.stringify(tweets[i])
    );
  }
}
