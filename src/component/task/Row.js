import { Button, Grid } from "@mui/material";
import React from "react";

const Row = (props) => {
  const task = props.task;
  return (
    <Grid
      container
      //rowGap={5}
      //columnGap={4}
      //columnSpacing={3}
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>{task.id}</Grid>
      <Grid item>{task.description}</Grid>
      <Grid item>{task.status}</Grid>
      <Grid item>{task.duedate}</Grid>
      <Grid item>
        <Button size="small" variant="contained" fullWidth color="success">
          Edit
        </Button>
      </Grid>
      <Grid item>
        <Button size="small" variant="contained" fullWidth color="error">
          Delete
        </Button>
      </Grid>
    </Grid>
  );
};

export default Row;
