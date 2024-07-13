import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Link,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { deleteTask, getAllTasks } from "../../api/taskService";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../layout/Loading";

const TaskList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState({});
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState();
  const [reloadData, setReloadData] = useState(false);

  const handleSnackBarClose = () => {
    setShowSnackBar(false);
    setSnackBarMessage("");
  };

  const handleEdit = async (id) => {
    navigate("/task/edit", { state: id });
  };

  const handleDelete = async (id) => {
    setLoading(true);
    setShowSnackBar(true);
    setSnackBarMessage("Task delete succesffully.");
    await deleteTask(id);
    setReloadData(true);
  };

  useEffect(() => {
    if (location.state?.show !== undefined) {
      setShowSnackBar(location.state.show);
      setSnackBarMessage(location.state.message);
    }
  }, []);

  useEffect(() => {
    const getUserTasks = async () => {
      const response = await getAllTasks();

      if (response.data.isSuccess) {
        setTasks(response.data.data);
        setLoading(false);
      }
    };
    getUserTasks();
  }, [reloadData]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Button
            sx={{ textAlign: "center" }}
            onClick={() => {
              navigate("/task/add");
            }}
          >
            Add Task
          </Button>
          <TableContainer
            component={Paper}
            sx={{ width: 650, overflow: "hidden" }}
          >
            <Table
              stickyHeader
              sx={{ width: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ backgroundColor: "lightgray" }}>
                    Title
                  </TableCell>
                  <TableCell
                    sx={{ backgroundColor: "lightgray" }}
                    align="center"
                  >
                    Description
                  </TableCell>
                  <TableCell
                    sx={{ backgroundColor: "lightgray" }}
                    align="center"
                  >
                    Duedate
                  </TableCell>
                  <TableCell
                    sx={{ backgroundColor: "lightgray" }}
                    align="center"
                  >
                    Status
                  </TableCell>
                  <TableCell
                    sx={{ backgroundColor: "lightgray" }}
                    align="center"
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(tasks).map((e, i) => (
                  <TableRow
                    key={tasks[i].id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {tasks[i].title}
                    </TableCell>
                    <TableCell align="left"> {tasks[i].description}</TableCell>
                    <TableCell align="left">{tasks[i].duedate}</TableCell>
                    <TableCell align="left">{tasks[i].status}</TableCell>
                    <TableCell align="center">
                      <Link
                        component="button"
                        underline="none"
                        variant="body2"
                        onClick={() => {
                          handleEdit(tasks[i].id);
                        }}
                        sx={{ paddingRight: "10px" }}
                      >
                        Edit
                      </Link>
                      <Link
                        component="button"
                        underline="none"
                        color="red"
                        variant="body2"
                        onClick={() => {
                          handleDelete(tasks[i].id);
                        }}
                        sx={{ paddingRight: "5px" }}
                      >
                        Delete
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={showSnackBar}
            key={"topRight"}
            sx={{ marginTop: "50px" }}
          >
            <Alert
              onClose={handleSnackBarClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
            >
              {snackBarMessage}
            </Alert>
          </Snackbar>
        </div>
      )}
    </>
  );
};

export default TaskList;
