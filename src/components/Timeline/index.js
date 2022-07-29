import { AppBar, Stack, Typography } from "@mui/material";
import timelineProp from "../icons/timeline-prop.svg";
import { useState } from "react";
import Tweet from "./tweet";

export default function Timeline() {
  const [tweet, setTweet] = useState();
  const tweetList = [];

  for (var key in localStorage) {
    if (key.includes("tweet")) {
      tweetList.push(JSON.parse(localStorage.getItem(key)));
    }
  }

  console.log(tweetList);

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
        <Typography variant="subtitle1">Home</Typography>
        <img src={timelineProp} width="24px" />
      </AppBar>
      <Stack sx={{ overflowY: "auto", flexWrap: "nowrap" }}></Stack>
      <Tweet tweet={tweetList[0]} />
    </Stack>
  );
}
