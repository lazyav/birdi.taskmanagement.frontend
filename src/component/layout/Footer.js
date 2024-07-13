import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ alignItems: "center", opacity: 0.7 }}>
        <Toolbar variant="dense">
          <Typography fontSize={13}>
            Copyright 2024. All Rights Reserved
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
