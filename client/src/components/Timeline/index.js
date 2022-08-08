import { AppBar, Stack, Typography, Box } from "@mui/material";
import timelineProp from "../icons/timeline-prop.svg";
import Tweet from "./tweet";
import TweetEditor from "./tweetEditor";
import { useState, useEffect } from "react";

export default function Timeline() {
  const [tweetList, setTweetList] = useState([]);

  async function FetchTweets() {
    try {
      const response = await fetch("http://localhost:4000/tweets")
        .then((response) => {
          if (response.ok && response.status === 200) {
            return response.json();
          }
        })
        .then((data) => {
          setTweetList(data);
        });
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    FetchTweets();
  }, []);

  return (
    <Box
      maxWidth={"600px"}
      width={"100%"}
      borderRight={1}
      borderLeft={1}
      borderColor={"divider"}
      height={"100vh"}
      sx={{ overflowY: "auto", flexWrap: "nowrap" }}
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
        <Typography variant="subtitle1">Home</Typography>
        <img src={timelineProp} width="24px" alt={"timelineProp"} />
      </AppBar>
      <Stack sx={{ overflowY: "auto", flexWrap: "nowrap" }}>
        <TweetEditor length={tweetList.length} />
      </Stack>
      {tweetList.map((tweet, index) => (
        <Tweet tweet={tweet} key={index} />
      ))}
    </Box>
  );
}
