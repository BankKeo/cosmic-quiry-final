import Logo from "../../assest/CosmicQuiry.png";

import { AppBar, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/authAction";

import HeaderMenu from "./Menu";

import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";

import { RootStore } from "../../utils/TypeScript";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Header = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const { auth } = useSelector((state: RootStore) => state);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Cosmic Quiry
          </Typography>

          <Box
            component="img"
            sx={{
              height: 40,
              display: { sm: "block", md: "none" },
            }}
            alt="logo."
            src={Logo}
          />
        </Link>

        <Search />

        <HeaderMenu setOpen={setOpen} />
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>
          <Link
            to={`/profile/${auth.user?._id}`}
            style={{ color: "black", textDecoration: "none" }}
          >
            Profile
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="/create_blog"
            style={{ color: "black", textDecoration: "none" }}
          >
            Create Blog
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="/"
            style={{ color: "black", textDecoration: "none" }}
            onClick={() => dispatch(logout())}
          >
            Logout
          </Link>
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
