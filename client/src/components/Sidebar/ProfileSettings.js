import { Avatar, Button, Stack, Typography } from "@mui/material";
import arrowBottom from "../icons/arrow-bottom.svg";
import { useContext } from "react";
import { ActiveUserContext } from "../../context/ActiveUserProvider";

export default function ProfileSettings(props) {
  let mobile = props.mobile;
  const activeUser = useContext(ActiveUserContext);
  console.log(activeUser);

  const { display_name, username, profile_image } = activeUser;

  return (
    <Button
      variant="text"
      color="inherit"
      sx={{
        width: "100%",
        minWidth: "0",
        justifyContent: "space-between",
        marginBottom: "12px",
        padding: mobile ? "10px 0 0 0 " : " ",
      }}
      endIcon={mobile ? null : <img src={arrowBottom} alt={"arrowBottom"} />}
    >
      <Stack direction="row" alignItems="center">
        <Avatar src={profile_image} />
        {mobile ? null : (
          <Stack marginX={1}>
            <Typography variant="body1">{display_name}</Typography>
            <Typography variant="body2">@{username}</Typography>
          </Stack>
        )}
      </Stack>
    </Button>
  );
}
