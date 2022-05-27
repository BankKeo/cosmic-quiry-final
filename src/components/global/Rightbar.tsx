import { Divider, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { IHomeBlogs } from "../../redux/types/blogType";

interface IProps {
  homeBlog: IHomeBlogs;
}

const style = {
  width: "100%",
  maxWidth: "500px",
  bgcolor: "background.paper",
};

const Rightbar: React.FC<IProps> = ({ homeBlog }) => {
  return (
    <List sx={style} component="nav">
      <Link
        style={{ color: "black", textDecoration: "none" }}
        to={`/blogs/${homeBlog.name.toLowerCase()}`}
      >
        <ListItem button>
          <ListItemText primary={homeBlog.name} />
        </ListItem>
      </Link>
      <Divider />
    </List>
  );
};

export default Rightbar;
