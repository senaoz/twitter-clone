import { Avatar, Box, Card, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import TweetActions from "./tweetActions";
import TweetEditMenu from "./tweetEditMenu";

export default function Tweet(props) {
  const tweet = props.tweet;

  return (
    <Card
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        width: "600px",
        display: "flex",
      }}
    >
      <Avatar
        sx={{ marginRight: 1, width: "48px", height: "48px" }}
        src={tweet.user.profile_image_url}
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
            {tweet.user.name} ·{" "}
            <Typography component="span" variant="body2" color="text.secondary">
              @{tweet.user.username}
            </Typography>
          </Typography>

          {tweet.user.username === "demoAccount" ? (
            <TweetEditMenu tweet={tweet} />
          ) : null}
        </Box>
        <Typography variant="body2">{tweet.text}</Typography>

        {tweet.entities.media.length > 0 && tweet.entities.media[0] != null
          ? tweet.entities.media.map((item, index) => (
              <CardMedia
                key={index}
                component="img"
                height="200"
                image={item}
                alt={index}
              />
            ))
          : null}

        <TweetActions id={tweet.str_id} />
      </CardContent>
    </Card>
  );
}
