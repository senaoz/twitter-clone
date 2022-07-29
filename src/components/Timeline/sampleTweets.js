export default function sampleTweets() {
  const tweets = [
    {
      str_id: "1000",
      created_at: "Thu Apr 06 15:24:15 +0000 2017",
      text: "1- Today we\u2019re sharing our vision for the future of the Twitter API platform!\nhttps://t.co/XweGngmxlP",
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
    localStorage.setItem(`tweet${tweets[i].str_id}`, JSON.stringify(tweets[i]));
  }
}
