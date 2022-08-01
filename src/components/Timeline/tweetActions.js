import { IconButton, Typography, Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import { ReplyIcon, RetweetIcon, LikeIcon, ShareIcon } from "../icons/icons";
import { useState } from "react";

export default function TweetActions(props) {
  const { id } = props;

  const tweet = JSON.parse(localStorage.getItem(`tweet-${id}`));

  const { liked, retweeted, like_count, reply_count, retweet_count } = tweet;

  const [likeCountState, setLikeCountState] = useState(like_count);
  const [replyCountState, setReplyCountState] = useState(reply_count);
  const [retweetCountState, setRetweetCountState] = useState(retweet_count);

  const [likeState, setLikeState] = useState(liked);
  const [retweetState, setRetweetState] = useState(retweeted);

  const handleLike = () => {
    tweet.liked = !liked;
    setLikeState(!liked);
    setLikeCountState(liked ? like_count - 1 : like_count + 1);
    tweet.like_count = liked ? like_count - 1 : like_count + 1;
    localStorage.setItem(`tweet-${id}`, JSON.stringify(tweet));
  };

  const handleRetweet = () => {
    tweet.retweeted = !retweeted;
    setRetweetState(!retweeted);
    setRetweetCountState(retweeted ? retweet_count - 1 : retweet_count + 1);
    tweet.retweet_count = retweeted ? retweet_count - 1 : retweet_count + 1;
    localStorage.setItem(`tweet-${id}`, JSON.stringify(tweet));
  };

  const handleReply = () => {
    setReplyCountState(reply_count + 1);
    tweet.reply_count = reply_count + 1;
    localStorage.setItem(`tweet-${id}`, JSON.stringify(tweet));
  };

  return (
    <CardActions
      sx={{ margin: "0 96px -8px -8px", justifyContent: "space-between" }}
    >
      <Box className="menu-icons">
        <IconButton
          aria-label="ReplyIcon"
          onClick={() => {
            handleReply();
          }}
        >
          <ReplyIcon width="20" />
        </IconButton>
        <Typography variant="caption">{replyCountState}</Typography>
      </Box>
      <Box className="menu-icons retweet">
        <IconButton
          aria-label="RetweetIcon"
          onClick={() => {
            handleRetweet();
          }}
        >
          <RetweetIcon width="20" color={retweetState ? "#00BA7CFF" : null} />
        </IconButton>
        <Typography variant="caption" color={retweetState ? "#00BA7CFF" : null}>
          {retweetCountState}
        </Typography>
      </Box>
      <Box className="menu-icons like">
        <IconButton
          aria-label="LikeIcon"
          onClick={() => {
            handleLike();
          }}
        >
          <LikeIcon
            width="20"
            color={likeState ? "rgba(249, 24, 128)" : null}
          />
        </IconButton>
        <Typography
          variant="caption"
          color={likeState ? "rgba(249, 24, 128)" : null}
        >
          {likeCountState}
        </Typography>
      </Box>
      <IconButton aria-label="ShareIcon" className={"menu-icons"}>
        <ShareIcon width="20" />
      </IconButton>
    </CardActions>
  );
}
