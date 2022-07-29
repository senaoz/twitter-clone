import {
  Avatar,
  TextField,
  Card,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { EditDots } from "../icons/icons";
import CardMedia from "@mui/material/CardMedia";
import TweetActions from "./tweetActions";

export default function TweetEditor() {
  return (
    <>
      <Card
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          width: "600px",
          display: "flex",
        }}
      >
        <Avatar sx={{ marginRight: 1, width: "48px", height: "48px" }} />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <form style={{ display: "grid" }}>
            <TextField
              placeholder={"What's happening?"}
              id={"tweet-text-field"}
            />
            <Button
              variant="tweet"
              type={"submit"}
              sx={{ width: "fit-content" }}
            >
              Tweet
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
