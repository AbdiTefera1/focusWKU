import React, { useContext, useState } from "react";
import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import Input from "./Input";
import AuthContext from "../../context/Auth/auth";
// const initialState = ;
const AuthForm = () => {
  const [issignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    firstName: "gjk",
    lastName: "jll",
    email: "jlkjl",
    password: "",
    confirmPassword: "",
  });

  const {signup, login} = useContext(AuthContext);

  const handleSubmit = (e) => {
    console.log(form)
    e.preventDefault();
    console.log(form)
    // if(issignup){
    //   signup(form)
    // }else{
    //   login(form);
    // }
  };

  const handleChange = (e) => {
    // setForm({ ...form, [e.target.name]: e.target.value });
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignup(!issignup);
    setShowPassword(false);
  };
  return (
    <Container component="main" maxWidth="sm" sx={{ my: 4, p: 2 }}>
      <Paper
        elevation={3}
        sx={{
          marginTop: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Avatar sx={{ margin: 2, backgroundColor: "secondary" }}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5" fontSize={24} fontWeight={700}>
          {issignup ? "Sign Up" : "Sign In"}
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{ width: "100%", marginTop: "10px" }}
        >
          <Grid container spacing={2}>
            {issignup && (
              <>
                <Input
                  name="firstName"
                  type="text"
                  label="First Name"
                  value={form.firstName}
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  type="text"
                  label="Last Name"
                  value={form.lastName} 
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              type="email"
              value={form.email}
              handleChange={handleChange}
            />
            <Input
              name="password"
              label="Password"
              value={form.password}
              type={showPassword ? "text" : "password"}
              handleChange={handleChange}
              handleShowPassword={() => setShowPassword(!showPassword)}
            />
            {issignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                value={form.confirmPassword}
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            sx={{ my: 2, fontSize: "1.5rem", fontWeight: 600 }}
          >
            {issignup ? "SignUp" : "Login"}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button sx={{ fontSize: "1.5rem" }} onClick={switchMode}>
                {issignup
                  ? "Already have an account? Login"
                  : "Don't have an account? Signup"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AuthForm;
