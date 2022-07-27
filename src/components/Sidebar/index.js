import { Button, Stack } from "@mui/material";
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
    <Stack
      height={window.innerHeight}
      justifyContent={"space-between"}
      width={"275px"}
      paddingRight={5}
    >
      <Stack justifyContent="flex-start" alignItems="flex-start" spacing={1}>
        <img
          src={twitter}
          alt={"Twitter"}
          style={{ paddingLeft: "12px", paddingTop: "12px" }}
        />

        {Navigation.map((item) => (
          <Button
            variant={selected === item.name ? "contained" : "text"}
            color={selected === item.name ? "secondary" : "inherit"}
            key={item.name}
          >
            {selected === item.name ? (
              <img
                src={require(`../icons/${item.icon}-fill.svg`)}
                alt={" "}
                className="menu-icons"
                color="secondary.main"
              />
            ) : (
              <img
                src={require(`../icons/${item.icon}.svg`)}
                alt={" "}
                className="menu-icons"
              />
            )}
            {item.name}
          </Button>
        ))}
        <Button variant="tweet" sx={{ width: "200px" }}>
          Tweet
        </Button>
      </Stack>
      <ProfileSettings />
    </Stack>
  );
}
