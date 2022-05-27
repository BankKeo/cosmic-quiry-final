import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStore } from "../../utils/TypeScript";

import { Avatar, Box, styled, Typography } from "@mui/material";

interface IProps {
  setOpen: any;
}

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.down("xl")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
}));

const HeaderMenu: React.FC<IProps> = ({ setOpen }) => {
  const { auth } = useSelector((state: RootStore) => state);

  return (
    <>
      {auth.access_token ? (
        <UserBox onClick={() => setOpen(true)}>
          {auth.user && (
            <>
              <Avatar
                sx={{ width: "30px", height: "30px" }}
                src={auth.user.avatar}
                alt="profile"
              />
              <Typography>{auth.user.name}</Typography>
            </>
          )}
        </UserBox>
      ) : (
        <Icons>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Typography
              variant="body2"
              sx={{ cursor: "pointer", color: "white" }}
            >
              LOG IN
            </Typography>
          </Link>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Typography
              variant="body2"
              sx={{ cursor: "pointer", color: "white" }}
            >
              REGISTER
            </Typography>
          </Link>
        </Icons>
      )}
    </>
  );
};

export default HeaderMenu;
