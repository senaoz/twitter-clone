import { AppBar, Stack, Typography } from "@mui/material";
import timelineProp from "../icons/timeline-prop.svg";
import { useState } from "react";

export default function Timeline() {
  const [tweets, setTweets] = useState({
    1: {
      id: 1, //nanoid is used to generate unique id
      user: "@user1",
      text: "This is a tweet",
      likes: 10,
      retweets: 5,
      comments: 3,
      time: "1 hour ago",
    },
    2: {},
  });
  return (
    <Stack
      width={"600px"}
      borderRight={1}
      borderLeft={1}
      borderColor={"divider"}
      height={"100vh"}
    >
      <AppBar
        position="sticky"
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottom: 1,
          borderColor: "divider",
          padding: 2,
        }}
      >
        <Typography variant="subtitle1">Latest Tweets</Typography>
        <img src={timelineProp} width="24px" />
      </AppBar>
      <Stack sx={{ overflowY: "auto", flexWrap: "nowrap" }}>Selamlar!</Stack>
    </Stack>
  );
}
