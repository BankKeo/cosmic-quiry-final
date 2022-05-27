import { Article, Home } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import CategoryIcon from "@mui/icons-material/Category";

import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../utils/TypeScript";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/authAction";

const Sidebar = () => {
  const { auth } = useSelector((state: RootStore) => state);
  const dispatch = useDispatch();

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", md: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Homepage" />
              </ListItemButton>
            </Link>
          </ListItem>
          {auth.user?.role === "admin" && (
            <ListItem disablePadding>
              <Link
                to="/category"
                style={{ color: "black", textDecoration: "none" }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <CategoryIcon />
                  </ListItemIcon>
                  <ListItemText primary="Category" />
                </ListItemButton>
              </Link>
            </ListItem>
          )}

          {auth.user && (
            <>
              <ListItem disablePadding>
                <Link
                  to="/create_blog"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <Article />
                    </ListItemIcon>
                    <ListItemText primary="Create Blog" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  to={`/profile/${auth.user._id}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profiles" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  to="/"
                  style={{ color: "black", textDecoration: "none" }}
                  onClick={() => dispatch(logout())}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </Link>
              </ListItem>
            </>
          )}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
