import { Button, Box } from "@mui/material";

export default function Navigation() {
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
    <>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        {Navigation.map((item) => (
          <Button variant="text" color="inherit" key={item.name}>
            <img
              src={require(`./icons/${item.icon}.svg`)}
              alt={" "}
              className="menu-icons"
            />
            {item.name}
          </Button>
        ))}
      </Box>
    </>
  );
}
