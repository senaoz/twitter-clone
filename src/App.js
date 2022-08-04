import { Container, useMediaQuery } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Trends from "./components/Trends";
import Timeline from "./components/Timeline";
import sampleTweets from "./components/Timeline/sampleTweets";

function App() {
  const tweetList = [];

  if (tweetList.length < 2) sampleTweets();

  const mobile = useMediaQuery("(max-width:1350px)");
  console.log(mobile);

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
      style={{ padding: 0 }}
    >
      <Sidebar />
      <Timeline />
      {mobile ? null : <Trends />}
    </Container>
  );
}

export default App;
