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
import { useLocation, useNavigate } from "react-router-dom";
import { editTask, getTask, getTaskStatusues } from "../../api/taskService";
import dayjs from "dayjs";
import Loading from "../layout/Loading";

const EditTask = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [taskStatusId, setTaskStatusId] = useState(0);
  const [taskStatuses, setTaskStatuses] = useState({});
  const [taskId, setTaskId] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    const getUserTask = async () => {
      const response = await getTask(location.state);
      setTaskId(response.data.data.id);
      setTitle(response.data.data.title);
      setDescription(response.data.data.description);
      setTaskStatusId(response.data.data.statusId);
      setDueDate(dayjs(response.data.data.duedate));
      setLoading(false);
    };
    getUserTask();
  }, []);

  useEffect(() => {
    const getTaskStatus = async () => {
      const response = await getTaskStatusues();
      setTaskStatuses(response.data.data);
    };
    getTaskStatus();
  }, [taskStatusId]);

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    let task = {
      id: taskId,
      title,
      description,
      dueDate,
      statusId: taskStatusId,
    };
    await editTask(task);
    setLoading(false);
    navigate("/dashboard", {
      state: { show: true, message: "Task updated successfully." },
    });
    return false;
  };

  const DropDown = () => {
    return (
      <>
        <FormControl fullWidth sx={{ marginTop: "15px" }}>
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
              <Typography variant="h5" textAlign={"center"} color={"Red"}>
                Edit Task
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
                  sx={{ marginTop: "15px" }}
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
                  Save Task
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      )}
    </>
  );
};

export default EditTask;
