import { Container, useMediaQuery } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Trends from "./components/Trends";
import Timeline from "./components/Timeline";
import { ActiveUserProvider } from "./context/ActiveUserProvider";

function App() {
  const mobile = useMediaQuery("(max-width:1350px)");

  return (
    <ActiveUserProvider>
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
    </ActiveUserProvider>
  );
}

export default App;
