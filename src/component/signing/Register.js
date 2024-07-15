import {
  Alert,
  Avatar,
  Button,
  Grid,
  Link,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PaddingTop from "../PaddingTop";
import { register } from "../../api/userService";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/avatar.png";

const Register = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await register(userName, password, confirmPassword);
    if (response?.isSuccess) {
      navigate("/login");
    } else {
    }
  };

  return (
    <Grid item sx={{ width: "275px" }}>
      <Paper elevation={15} style={{ borderRadius: "15px", padding: "12px" }}>
        <Grid flexDirection={"column"} display={"flex"} alignItems={"center"}>
          <PaddingTop></PaddingTop>
          <Avatar sx={{ width: "75px", height: "75px" }} src={avatar}></Avatar>
          <PaddingTop></PaddingTop>
          <Typography variant="h5">Sign up</Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid sx={{ paddingTop: "5px" }}>
            <TextField
              size="small"
              fullWidth
              id="standard-basic"
              inputProps={{
                autoComplete: "",
                form: {
                  autocomplete: "off",
                },
              }}
              label="Username"
              variant="standard"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Grid>
          <Grid sx={{ paddingTop: "1px" }}>
            <TextField
              fullWidth
              size="small"
              inputProps={{
                autoComplete: "",
                form: {
                  autocomplete: "off",
                },
              }}
              label="Password"
              type="password"
              variant="standard"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid sx={{ paddingTop: "2px" }}>
            <TextField
              fullWidth
              size="small"
              inputProps={{
                autoComplete: "new-password",
                form: {
                  autocomplete: "off",
                },
              }}
              label="Confirm password"
              type="password"
              variant="standard"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Grid>
          <Grid sx={{ paddingTop: "16px" }}>
            <PaddingTop></PaddingTop>
            <PaddingTop></PaddingTop>
            <Button type="submit" variant="contained" fullWidth color="success">
              Register
            </Button>
            <PaddingTop></PaddingTop>
          </Grid>
        </form>
        <Grid sx={{ paddingTop: "10px", textAlign: "center" }}>
          <Typography fontSize={13}>
            Already have an account?{" "}
            <Link
              component="button"
              underline="none"
              color="blue"
              sx={{ paddingBottom: "3px" }}
              onClick={() => {
                navigate("/login");
                return false;
              }}
            >
              Login
            </Link>
          </Typography>
        </Grid>
      </Paper>
      {/* <Snackbar
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
        </Snackbar> */}
    </Grid>
  );
};

export default Register;
