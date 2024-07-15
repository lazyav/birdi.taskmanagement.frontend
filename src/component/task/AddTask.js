import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";
import { addTask, getTaskStatusues } from "../../api/taskService";
import dayjs from "dayjs";
import Loading from "../layout/Loading";

const AddTask = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [taskStatusId, setTaskStatusId] = useState(1);
  const [taskStatuses, setTaskStatuses] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());

  useEffect(() => {
    const getTaskStatus = async () => {
      const response = await getTaskStatusues();
      setTaskStatuses(response.data.data);
      setLoading(false);
    };
    getTaskStatus();
  }, [taskStatusId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    let task = {
      title,
      description,
      dueDate,
      statusId: taskStatusId,
    };
    await addTask(task);
    setLoading(false);
    navigate("/dashboard", {
      state: { show: true, message: "Task added successfully." },
    });
    return false;
  };

  //const isValid :

  const DropDown = () => {
    return (
      <>
        <FormControl fullWidth sx={{ marginTop: "25px" }}>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            id="demo-select-small"
            value={taskStatusId}
            label="Status"
            onChange={(e) => setTaskStatusId(e.target.value)}
          >
            {Object.keys(taskStatuses).map((item, i) => {
              return (
                <MenuItem value={taskStatuses[i].id} key={taskStatuses[i].id}>
                  {taskStatuses[i].status}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </>
    );
  };

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <Paper
          elevation={15}
          style={{ borderRadius: "15px", padding: "10px", width: "500px" }}
        >
          <form onSubmit={handleSubmit}>
            <Grid>
              <Typography variant="h4" textAlign={"center"}>
                Add Task
              </Typography>
              <TextField
                sx={{ marginTop: "15px" }}
                fullWidth
                size="small"
                margin="dense"
                id="standard-basic"
                label="Task title"
                variant="standard"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                sx={{ marginTop: "15px" }}
                multiline
                fullWidth
                size="small"
                margin="dense"
                label="Task description"
                inputProps={{
                  autoComplete: "new-password",
                  form: {
                    autocomplete: "off",
                  },
                }}
                variant="standard"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <DropDown />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ marginTop: "25px" }}
                  label="Task due date"
                  value={dayjs(dueDate)}
                  defaultValue={dueDate}
                  onChange={(newValue) => setDueDate(newValue)}
                />
              </LocalizationProvider>
              <Grid
                direction={"row"}
                justifyContent={"center"}
                display={"flex"}
              >
                <Button
                  sx={{ marginTop: "25px", marginRight: "5px" }}
                  variant="contained"
                  fullWidth
                  color="error"
                  onClick={() => {
                    navigate("/dashboard");
                    return false;
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  sx={{ marginTop: "25px" }}
                  variant="contained"
                  fullWidth
                  color="success"
                >
                  Add Task
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      )}
    </>
  );
};

export default AddTask;
