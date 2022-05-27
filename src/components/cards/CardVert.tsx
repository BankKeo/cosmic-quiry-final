import React from "react";
import { Link } from "react-router-dom";

import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";

import { IBlog } from "../../utils/TypeScript";

interface IProps {
  blog: IBlog;
}

const CardVert: React.FC<IProps> = ({ blog }) => {
  return (
    <Card
      sx={{
        marginBottom: 2,
      }}
    >
      {typeof blog.user !== "string" && (
        <Link
          to={`/profile/${blog.user._id}`}
          style={{ color: "black", textDecoration: "none" }}
        >
          <CardHeader
            avatar={
              <img
                src={blog.user.avatar}
                style={{ height: "40px", width: "40px", borderRadius: "50%" }}
                alt=""
              />
            }
            title={blog.user.name}
            subheader={new Date(blog.createdAt).toLocaleString()}
          />
        </Link>
      )}
      <Link style={{ textDecoration: "none" }} to={`/blog/${blog._id}`}>
        {typeof blog.thumbnail === "string" && (
          <CardMedia
            component="img"
            height="400"
            image={blog.thumbnail}
            alt="Paella dish"
          />
        )}

        <CardContent sx={{ textAlign: "center" }}>
          <span style={{ fontSize: "15px", color: "black" }}>{blog.title}</span>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CardVert;
