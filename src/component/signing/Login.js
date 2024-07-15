import {
  Avatar,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PaddingTop from "../PaddingTop";
import { login } from "../../api/userService";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/avatar.png";

const Login = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(userName, password);
    if (response.isSuccess) {
      sessionStorage.setItem("token", response.data.accessToken);
      navigate("/dashboard");
    }
  };

  return (
    <Grid item sx={{ width: "275px" }}>
      <Paper elevation={15} style={{ borderRadius: "15px", padding: "10px" }}>
        <Grid flexDirection={"column"} display={"flex"} alignItems={"center"}>
          <PaddingTop></PaddingTop>
          <Avatar sx={{ width: "75px", height: "75px" }} src={avatar}></Avatar>
          <PaddingTop></PaddingTop>
          <Typography variant="h5" color={"Red"}>
            Login
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid sx={{ paddingTop: "5px" }}>
            <TextField
              fullWidth
              size="small"
              margin="dense"
              id="standard-basic"
              label="Username"
              variant="standard"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Grid>
          <Grid sx={{ paddingTop: "1px" }}>
            <TextField
              fullWidth
              size="small"
              margin="dense"
              label="Password"
              type="password"
              inputProps={{
                autoComplete: "new-password",
                form: {
                  autocomplete: "off",
                },
              }}
              variant="standard"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid sx={{ paddingTop: "16px" }}>
            <PaddingTop></PaddingTop>
            <Button type="submit" variant="contained" fullWidth color="success">
              Login
            </Button>
            <PaddingTop></PaddingTop>
          </Grid>
        </form>
        <Grid sx={{ paddingTop: "10px", textAlign: "center" }}>
          <Typography fontSize={13}>
            Don't have an account?{" "}
            <Link
              component="button"
              underline="none"
              color="blue"
              sx={{ paddingBottom: "3px" }}
              onClick={() => {
                navigate("/register");
                return false;
              }}
            >
              Sign Up
            </Link>
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
