import { Avatar, Button, Stack, Typography } from "@mui/material";
import arrowBottom from "../icons/arrow-bottom.svg";

export default function ProfileSettings() {
  return (
    <Button
      variant="text"
      color="inherit"
      sx={{ width: "100%", justifyContent: "space-between" }}
      endIcon={<img src={arrowBottom} />}
    >
      <Stack direction="row" alignItems="center">
        <Avatar />
        <Stack marginX={1}>
          <Typography variant="body1">Sena Oz</Typography>
          <Typography variant="body2">@zsena0z</Typography>
        </Stack>
      </Stack>
    </Button>
  );
}
