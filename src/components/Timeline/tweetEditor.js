import { Avatar, Grid, Card, IconButton, Button } from "@mui/material";
import { nanoid } from "nanoid";
import GifIcon from "../icons/gif.svg";
import QuestionIcon from "../icons/question.svg";
import EmojiIcon from "../icons/emoji.svg";
import { useEffect, useRef, useState } from "react";
import { MediaIcon } from "../icons/icons";

export default function TweetEditor(props) {
  const [text, setText] = useState("");
  const theLength = props.length;
  const [fileDataURL, setFileDataURL] = useState(null);
  const imageMimeType = /image\/(png|jpg|jpeg)/i;
  const [file, setFile] = useState(null);
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  function handleSubmit(e) {
    e.preventDefault();

    if (text.length > 0) {
      const id = nanoid();

      localStorage.setItem(
        `tweet-${id}`,
        JSON.stringify({
          str_id: `${id}`,
          created_at: new Date().toUTCString(),
          text: `${text}`,
          user: {
            user_id: 100001,
            name: "My Account",
            profile_image_url:
              "https://images.ctfassets.net/spoqsaf9291f/3lEd6s7d8pem7vwS6njpqh/e5e837543327c4f20cdc8da6427e6025/Notion_Apps_-_Chapter_Hero.png",
            username: "demoAccount",
          },
          reply_count: 0,
          retweet_count: 0,
          like_count: 0,
          retweeted: false,
          liked: false,
          entities: {
            hashtags: [],
            user_mentions: [],
            urls: [],
            media: [fileDataURL],
          },
        })
      );

      setText("");
      setFile(null);
      setFileDataURL(null);
      window.location.reload();
    } else alert("Please enter some text");
  }

  return (
    <>
      <Card
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
        }}
      >
        <Avatar
          sx={{ marginRight: 1, width: "48px", height: "48px" }}
          src={
            "https://images.ctfassets.net/spoqsaf9291f/3lEd6s7d8pem7vwS6njpqh/e5e837543327c4f20cdc8da6427e6025/Notion_Apps_-_Chapter_Hero.png"
          }
        />

        <form
          style={{ width: "100%", maxHeight: "600px" }}
          onSubmit={handleSubmit}
        >
          <textarea
            rows="3"
            className="tweet-text-field"
            name={"tweet"}
            placeholder="What's happening?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {fileDataURL ? (
            <>
              <img
                src={fileDataURL}
                className="tweet-image-preview"
                alt={"fileDataURL"}
              />
            </>
          ) : null}

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <IconButton onClick={handleClick}>
                <MediaIcon />
              </IconButton>
              <input
                type="file"
                name="image"
                accept="image/*"
                multiple
                ref={hiddenFileInput}
                onChange={changeHandler}
                style={{ display: "none" }}
              />
              <IconButton>
                <img src={GifIcon} alt={"GifIcon"} />
              </IconButton>
              <IconButton>
                <img src={QuestionIcon} alt={"QuestionIcon"} />
              </IconButton>
              <IconButton>
                <img src={EmojiIcon} alt={"EmojiIcon"} />
              </IconButton>
            </Grid>
            <Button
              variant="tweet"
              type={"submit"}
              sx={{ width: "fit-content" }}
            >
              Tweet
            </Button>
          </Grid>
        </form>
      </Card>
    </>
  );
}
