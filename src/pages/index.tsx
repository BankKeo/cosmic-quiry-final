import { Box, Stack, styled, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Loading from "../components/alert/Loading";

import CardVert from "../components/cards/CardVert";
import Rightbar from "../components/global/Rightbar";
import Sidebar from "../components/global/Sidebar";

import { RootStore } from "../utils/TypeScript";

const Container = styled(Stack)(({ theme }) => ({
  spacing: 2,
  [theme.breakpoints.up("sm")]: {
    spacing: 0,
  },
}));

const Home = () => {
  const { homeBlogs } = useSelector((state: RootStore) => state);

  if (homeBlogs.length === 0) return <Loading />;
  return (
    <Box>
      <Container direction="row" justifyContent="space-between">
        <Sidebar />

        <Box flex={4} p={4}>
          {homeBlogs.map((homeBlog) => (
            <Box>
              {homeBlog.blogs.map((blog) => (
                <CardVert blog={blog} />
              ))}
            </Box>
          ))}
        </Box>

        <Box flex={2} p={2} sx={{ display: { xs: "none", md: "block" } }}>
          <Box position="fixed">
            <Typography
              sx={{
                marginLeft: "15px",
                marginBottom: "20px",
                fontSize: "35px",
              }}
            >
              Categories
            </Typography>
            {homeBlogs.map((homeBlog) => (
              <Rightbar key={homeBlog._id} homeBlog={homeBlog} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
