import { Avatar, Button, Stack, Typography } from "@mui/material";
import arrowBottom from "../icons/arrow-bottom.svg";

export default function ProfileSettings(props) {
  let mobile = props.mobile;
  return (
    <Button
      variant="text"
      color="inherit"
      sx={{
        width: "100%",
        minWidth: "0",
        justifyContent: "space-between",
        marginBottom: "12px",
        padding: mobile ? "0px" : " ",
      }}
      endIcon={mobile ? null : <img src={arrowBottom} alt={"arrowBottom"} />}
    >
      <Stack direction="row" alignItems="center">
        <Avatar
          src={
            "https://images.ctfassets.net/spoqsaf9291f/3lEd6s7d8pem7vwS6njpqh/e5e837543327c4f20cdc8da6427e6025/Notion_Apps_-_Chapter_Hero.png"
          }
        />
        {mobile ? null : (
          <Stack marginX={1}>
            <Typography variant="body1">My Account</Typography>
            <Typography variant="body2">@demoAccount</Typography>
          </Stack>
        )}
      </Stack>
    </Button>
  );
}
