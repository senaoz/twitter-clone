import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { EditDots } from "../icons/icons";
import { IconButton } from "@mui/material";

export default function TweetEditMenu(props) {
  const { str_id } = props.tweet;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    handleClose();
  };

  async function DeleteTweet(id) {
    try {
      const response = await fetch("http://localhost:4000/tweet/" + id, {
        method: "DELETE",
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  }

  const handleDelete = () => {
    DeleteTweet(str_id);
    handleClose();
    window.location.reload();
  };

  return (
    <div>
      <IconButton
        aria-label="EditButton"
        className="menu-icons"
        sx={{ margin: "-8px" }}
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <EditDots width="20" fill="#6E767D" />
      </IconButton>

      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </div>
  );
}

// <MenuItem onClick={handleEdit}>Edit</MenuItem>
