import { AppBar, Stack, Typography, Box } from "@mui/material";
import timelineProp from "../icons/timeline-prop.svg";
import Tweet from "./tweet";
import TweetEditor from "./tweetEditor";

export default function Timeline() {
  const tweetList = [];

  for (var key in localStorage) {
    if (key.includes("tweet")) {
      tweetList.push(JSON.parse(localStorage.getItem(key)));
    }
  }

  console.log(tweetList);

  return (
    <Box
      width={"600px"}
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
      {tweetList
        .slice(0)
        .reverse()
        .map((tweet, index) => (
          <Tweet key={index} tweet={tweet} />
        ))}
    </Box>
  );
}
