import { TextField } from "@mui/material";
import search from "../icons/search.svg";

export default function SearchBox() {
  return (
    <label className="search-box">
      <img src={search} width="20px" />
      <input />
    </label>
  );
}
