import { Avatar, Grid, Card, IconButton, Button } from "@mui/material";
import { nanoid } from "nanoid";
import GifIcon from "../icons/gif.svg";
import QuestionIcon from "../icons/question.svg";
import EmojiIcon from "../icons/emoji.svg";
import { useEffect, useRef, useState, useContext } from "react";
import { MediaIcon } from "../icons/icons";
import { ActiveUserContext } from "../../context/ActiveUserProvider";

export default function TweetEditor() {
  const activeUser = useContext(ActiveUserContext);
  const activeUserID = activeUser.id;

  async function PostTweet(body) {
    try {
      const response = await fetch("http://localhost:4000/tweet/", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  }

  const [text, setText] = useState("");
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

      PostTweet({
        text: text,
        user_id: activeUserID,
        hashtags: [],
        media: [file ? fileDataURL : null],
        str_id: id,
        user_mentions: [],
        urls: [],
      });

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
          src={activeUser.profile_image}
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
