import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
} from "@mui/material";
import twitter from "./components/icons/twitter.svg";
import Sidebar from "./components/Sidebar";
import Trends from "./components/Trends";
import Timeline from "./components/Timeline";
import sampleTweets from "./components/Timeline/sampleTweets";
import { useEffect, useState } from "react";

function App() {
  const tweetList = [];
  let mobile = window.innerWidth < 1350;

  if (tweetList.length < 2) sampleTweets();

  for (var key in localStorage) {
    if (key.includes("tweet")) {
      tweetList.push(JSON.parse(localStorage.getItem(key)));
    }
  }

  window.addEventListener("resize", () => {
    mobile = window.innerWidth < 1350;
    window.location.reload();
  });

  const [value, setValue] = useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      <Sidebar mobile={mobile} />
      <Timeline />
      {mobile ? null : <Trends />}
    </Container>
  );
}

export default App;
