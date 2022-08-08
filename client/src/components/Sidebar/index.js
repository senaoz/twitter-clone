import { Grid, Button, Stack, useMediaQuery } from "@mui/material";
import twitter from "../icons/twitter.svg";

import { useState } from "react";
import ProfileSettings from "./ProfileSettings";
import tweet from "../icons/tweet.svg";

export default function Sidebar() {
  const mobile = useMediaQuery("(max-width:1350px)");
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
      minWidth={"65px"}
      height={"100vh"}
      sx={{
        overflowY: "auto",
        flexWrap: "nowrap",
        padding: "10px",
        width: "auto",
      }}
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
              sx={{
                fontWeight: "700",
                padding: mobile ? "10px" : "6px 18px 6px 12px",
              }}
              onClick={() => setSelected(item.name)}
            >
              <img
                src={require(`../icons/${item.icon}-fill.svg`)}
                alt={" "}
                className="menu-icons"
                color="secondary.main"
                style={{ marginRight: mobile ? "0px" : "20px" }}
              />
              {mobile ? null : item.name}
            </Button>
          ) : (
            <Button
              variant={"text"}
              color={"inherit"}
              key={item.name}
              sx={{ padding: mobile ? "10px" : "6px 18px 6px 12px" }}
              onClick={() => setSelected(item.name)}
            >
              <img
                src={require(`../icons/${item.icon}.svg`)}
                alt={" "}
                style={{ marginRight: mobile ? "0px" : "20px" }}
                className="menu-icons"
              />
              {mobile ? null : item.name}
            </Button>
          )
        )}
        {mobile ? (
          <Button variant="tweet" sx={{ padding: 0 }}>
            <img src={tweet} alt={"Tweet"} />
          </Button>
        ) : (
          <Button variant="tweet" sx={{ width: "200px" }}>
            Tweet
          </Button>
        )}
      </Stack>
      <ProfileSettings mobile={mobile} />
    </Grid>
  );
}
