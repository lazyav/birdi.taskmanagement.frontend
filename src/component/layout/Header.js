import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={10}
        sx={{ alignItems: "center", opacity: 0.5 }}
      >
        <Toolbar opacity={1}>
          <Typography variant="h5">Task Management System</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
