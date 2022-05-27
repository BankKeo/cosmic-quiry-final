import { InputBase } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAPI } from "../../utils/FetchData";
import { IBlog } from "../../utils/TypeScript";
import CardHoriz from "../cards/CardHoriz";

const Input = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Search = () => {
  const [search, setSearch] = useState("");
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  const { pathname } = useLocation();

  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      if (search.length < 2) return setBlogs([]);

      try {
        const res = await getAPI(`search/blogs?title=${search}`);
        setBlogs(res.data);
      } catch (err) {
        console.log(err);
      }
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [search]);

  useEffect(() => {
    setSearch("");
    setBlogs([]);
  }, [pathname]);

  return (
    <Input>
      <InputBase
        value={search}
        placeholder="Enter your search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {search.length >= 2 && (
        <div
          className="position-absolute pt-2 px-1 w-100 rounded"
          style={{
            background: "#eee",
            zIndex: 10,
            maxHeight: "calc(100vh - 100px)",
            overflow: "auto",
          }}
        >
          {blogs.length ? (
            blogs.map((blog) => <CardHoriz key={blog._id} blog={blog} />)
          ) : (
            <h3 className="text-center">No Blogs</h3>
          )}
        </div>
      )}
    </Input>
  );
};

export default Search;
