import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import FingerprintIcon from "@mui/icons-material/Fingerprint";

import male from "../../../images/male.png";
import female from "../../../images/female.png";
import logo from "../../../images/logo.png";

// const pages = [
//   "হোম",
//   "আমাদের সম্পর্কে",
//   "প্রশ্ন ও উত্তর",
//   "টিউটোরিয়াল",
//   "যোগাযোগ",
// ];

const pagePath = [
  { page: "হোম", paths: "home" },
  { page: "আমাদের সম্পর্কে", paths: "about" },
  { page: "প্রশ্ন ও উত্তর", paths: "faq" },
  { page: "টিউটোরিয়াল", paths: "tutorial" },
  { page: "যোগাযোগ", paths: "contact" },
];

const settings = [
  "Edit Biodata",
  "My Biodata",
  "Delete/Hide Biodata",
  "Setting",
  "Logout",
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [profile, setProfile] = React.useState({});

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { user, admin } = useAuth();

  React.useEffect(() => {
    fetch(`https://biodata-server.herokuapp.com/biodatas/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      });
  }, [user.email]);

  return (
    <div>
      <AppBar position="static" sx={{ bgcolor: "white", color: "blue" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 800,
                letterSpacing: ".3rem",
                color: "blue",
                textDecoration: "none",
              }}
            >
              <NavLink to="/home" style={{ textDecoration: "none" }}>
                LOGO
              </NavLink>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pagePath.map(({ page, paths }) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <NavLink to={paths} style={{ textDecoration: "none" }}>
                      <Typography textAlign="center">{page}</Typography>
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 800,
                letterSpacing: ".3rem",
                color: "blue",
                textDecoration: "none",
              }}
            >
              <NavLink to="/home" style={{ textDecoration: "none" }}>
                LOGO
              </NavLink>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pagePath.map(({ page, paths }) => (
                <NavLink to={paths} style={{ textDecoration: "none" }}>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      mx: 2,
                      color: "blue",
                      display: "block",
                      fontSize: "15px",
                      fontWeight: "700",
                    }}
                  >
                    {page}
                  </Button>
                </NavLink>
              ))}
            </Box>

            {user.email ? (
              <NavLink to="/profile">
                <Avatar
                  alt="Remy Sharp"
                  src={
                    profile && profile.biodataType == "পাত্রীর বায়োডাটা"
                      ? female
                      : male
                  }
                />
              </NavLink>
            ) : (
              <div>
                <NavLink to="/login" style={{ textDecoration: "none" }}>
                  <Button variant="outlined" startIcon={<FingerprintIcon />}>
                    Login
                  </Button>
                </NavLink>
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
