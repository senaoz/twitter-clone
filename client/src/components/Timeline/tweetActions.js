import { IconButton, Typography, Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import { ReplyIcon, RetweetIcon, LikeIcon, ShareIcon } from "../icons/icons";
import { useContext, useEffect, useState } from "react";
import { ActiveUserContext } from "../../context/ActiveUserProvider";

export default function TweetActions(props) {
  let activeUser = useContext(ActiveUserContext);
  const { id, tweet } = props;
  const { like_count, reply_count, retweet_count } = tweet;

  const [likeCountState, setLikeCountState] = useState(like_count);
  const [replyCountState, setReplyCountState] = useState(reply_count);
  const [retweetCountState, setRetweetCountState] = useState(retweet_count);

  const [likeState, setLikeState] = useState(
    activeUser.retweets[0].split(",").length < 1
      ? false
      : activeUser.likes[0].split(",").includes(id)
  );
  const [retweetState, setRetweetState] = useState(
    activeUser.retweets[0].split(",").length < 1
      ? false
      : activeUser.retweets[0].split(",").includes(id)
  );

  async function GlobalActions(action) {
    try {
      const response = await fetch("http://localhost:4000/tweet/" + id, {
        method: "PUT",
        body: JSON.stringify(action),
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  }

  async function IndividualActions(id, retweeted) {
    try {
      const response = await fetch(
        "http://localhost:4000/user/" + activeUser.id,
        {
          method: "PUT",
          body: retweeted
            ? JSON.stringify({
                retweet: id,
              })
            : JSON.stringify({ like: id }),
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  }

  const handleLike = () => {
    setLikeCountState(likeState ? like_count - 1 : like_count + 1);
    tweet.like_count = likeState ? like_count - 1 : like_count + 1;
    GlobalActions(tweet);
    setLikeState(!likeState);
    IndividualActions(id, false);
  };

  const handleRetweet = () => {
    console.log(retweetState);
    setRetweetCountState(retweetState ? retweet_count - 1 : retweet_count + 1);
    tweet.retweet_count = retweetState ? retweet_count - 1 : retweet_count + 1;
    GlobalActions(tweet);

    setRetweetState(!retweetState);
    IndividualActions(id, true);
  };

  const handleReply = () => {
    setReplyCountState(reply_count + 1);
    tweet.reply_count = reply_count + 1;
    GlobalActions(tweet);
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
