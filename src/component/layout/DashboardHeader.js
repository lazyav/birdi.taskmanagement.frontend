import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";

const DashboardHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={10}
        sx={{ alignItems: "flex-end", opacity: 1 }}
      >
        <Toolbar>
          <Button sx={{ color: "white" }}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default DashboardHeader;
