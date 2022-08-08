import { Avatar, Box, Card, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import TweetActions from "./tweetActions";
import TweetEditMenu from "./tweetEditMenu";
import { useEffect, useState, useContext } from "react";
import { ActiveUserContext } from "../../context/ActiveUserProvider";

export default function Tweet(props) {
  const activeUser = useContext(ActiveUserContext);
  const activeUserID = activeUser.id;

  const tweet = props.tweet;
  const { user_id } = props.tweet;
  const [user, setUser] = useState({
    profile_image: "",
    display_name: "",
    username: "",
    created_at: "",
  });

  async function FetchUser() {
    try {
      await fetch("http://localhost:4000/user/" + user_id)
        .then((response) => {
          if (response.ok && response.status === 200) {
            return response.json();
          }
        })
        .then((data) => {
          setUser(data);
        });
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    FetchUser();
  }, [tweet]);

  return (
    <Card
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        display: "flex",
      }}
    >
      <Avatar
        sx={{ marginRight: 1, width: "48px", height: "48px" }}
        src={user.profile_image}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography component="span" variant="body1">
            {user.display_name}
            {" · "}
            <Typography component="span" variant="body2" color="text.secondary">
              @{user.username}
            </Typography>
          </Typography>

          {tweet.user_id === activeUserID ? (
            <TweetEditMenu tweet={tweet} />
          ) : null}
        </Box>
        <Typography variant="body2">{tweet.text}</Typography>

        <Box display="grid">
          {tweet.media.length > 0 && tweet.media[0] != (null || "")
            ? tweet.media.map((item, index) => (
                <CardMedia
                  key={index}
                  component="img"
                  height="200"
                  image={item}
                  alt={index}
                />
              ))
            : null}
        </Box>
        <TweetActions id={tweet.str_id} tweet={tweet} />
      </CardContent>
    </Card>
  );
}
