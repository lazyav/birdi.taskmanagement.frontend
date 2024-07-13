import { Box, Grid } from "@mui/material";
import React from "react";
import bg from "../../assets/bg.png";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid
        container
        spacing={0}
        display={"flex"}
        direction="row"
        justifyContent="center"
        sx={{
          width: "100vw",
          height: "100vh",
          spacing: 0,
        }}
      >
        <Grid container>
          <Header></Header>
        </Grid>
        <Grid
          container
          justifyContent={"center"}
          alignContent={"center"}
          display={"flex"}
        >
          <Outlet></Outlet>
        </Grid>
        <Grid container alignContent={"flex-end"}>
          <Footer></Footer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Welcome;
