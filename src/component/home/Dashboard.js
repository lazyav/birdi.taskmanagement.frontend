import { Grid } from "@mui/material";
import React from "react";

import TaskList from "../task/TaskList";
import Footer from "../layout/Footer";
import DashboardHeader from "../layout/DashboardHeader";

const Dashboard = () => {
  return (
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
        <DashboardHeader></DashboardHeader>
      </Grid>
      <Grid
        container
        flexGrow={1}
        justifyContent={"center"}
        alignContent={"flex-start"}
      >
        <TaskList></TaskList>
      </Grid>
      <Grid container alignContent={"flex-end"}>
        <Footer></Footer>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
