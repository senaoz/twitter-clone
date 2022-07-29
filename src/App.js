import { Container } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Trends from "./components/Trends";
import Timeline from "./components/Timeline";
import sampleTweets from "./components/Timeline/sampleTweets";

function App() {
  const tweetList = [];

  for (var key in localStorage) {
    if (key.includes("tweet")) {
      tweetList.push(JSON.parse(localStorage.getItem(key)));
    }
  }

  if (tweetList.length < 2) {
    sampleTweets();
  }

  return (
    <Container
      maxWidth="xl"
      sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
    >
      <Sidebar />
      <Timeline />
      <Trends />
    </Container>
  );
}

export default App;
