import { Container } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Trends from "./components/Trends";
import Timeline from "./components/Timeline";

function App() {
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
