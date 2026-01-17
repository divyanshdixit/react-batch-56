import React from "react";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Logo from "../../assets/logo.png";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Box from '@mui/material/Box';
// error boundary:

// func compo  => jsx, null
const BasicHeader = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{
            dxisplay: 'flex',
            justifyContent: 'space-between'
        }}>
          <Box sx={{
            
          }}>
            <MenuIcon sx={{ color: "red", width: 30, height: 30 }} />
            <Typography
              variant="h6"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Logo
            </Typography>
          </Box>

          <Tooltip title="menus">
            <IconButton onClick={() => {}} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={<Logo />} />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default BasicHeader;
