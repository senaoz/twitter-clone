import { Grid, Button, Stack } from "@mui/material";
import twitter from "../icons/twitter.svg";
import arrowBottom from "../icons/arrow-bottom.svg";
import { useState } from "react";
import ProfileSettings from "./ProfileSettings";

export default function Sidebar() {
  const [selected, setSelected] = useState("Home");

  const Navigation = [
    { name: "Home", icon: "home" },
    { name: "Explore", icon: "explore" },
    { name: "Notifications", icon: "notification" },
    { name: "Messages", icon: "messages" },
    { name: "Bookmarks", icon: "bookmark" },
    { name: "Lists", icon: "lists" },
    { name: "Profile", icon: "profile" },
    { name: "More", icon: "more" },
  ];

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="flex-start"
      width={"275px"}
      height={"100vh"}
      sx={{ overflowY: "auto", flexWrap: "nowrap" }}
      paddingRight={4}
    >
      <Stack justifyContent="flex-start" alignItems="flex-start" spacing={2}>
        <img
          src={twitter}
          alt={"Twitter"}
          style={{ paddingLeft: "12px", paddingTop: "12px" }}
        />

        {Navigation.map((item) =>
          selected === item.name ? (
            <Button
              variant={"text"}
              color={"inherit"}
              key={item.name}
              sx={{ fontWeight: "700", padding: "6px 18px 6px 12px" }}
              onClick={() => setSelected(item.name)}
            >
              <img
                src={require(`../icons/${item.icon}-fill.svg`)}
                alt={" "}
                className="menu-icons"
                color="secondary.main"
                style={{ marginRight: "20px" }}
              />
              {item.name}
            </Button>
          ) : (
            <Button
              variant={"text"}
              color={"inherit"}
              key={item.name}
              sx={{ padding: "6px 18px 6px 12px" }}
              onClick={() => setSelected(item.name)}
            >
              <img
                src={require(`../icons/${item.icon}.svg`)}
                alt={" "}
                style={{ marginRight: "20px" }}
                className="menu-icons"
              />
              {item.name}
            </Button>
          )
        )}
        <Button variant="tweet" sx={{ width: "200px" }}>
          Tweet
        </Button>
      </Stack>
      <ProfileSettings />
    </Grid>
  );
}
