import styled from "@emotion/styled";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "#fff",
  fontSize: "20px",
  marginLeft: "20px",
}));

const styledImage = {
  marginRight: "10px",
  height: "50px",
  width: "50px",
  borderRadius: "50%",
};

const NavBar = ({ isLogin, isAdmin = true, isGC}) => {
  return (
    <AppBar
      position="sticky"
      sx={{
        p: 3,
        paddingLeft: "10px",
        paddingRight: "10px",
        backgroundColor: "#000",
        fontSize: '18px',
        width: '100%'
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: '100%'
          // backgroundColor: "#5e35b1",
        }}
      >
        <StyledLink to="/">
          {/* <Box sx={{display: 'flex', alignItems: 'center', fontSize: "24px"}}>
            <img alt="FocusWKU" style={styledImage} src={require("../assets/com.png")}/>{" "}
            FocusWKU
          </Box> */}
          <Box
        sx={{
          display: "flex",
          alignSelf: "center",
          fontSize: "24px",
          marginLeft: "20px",
          color: "#fff",
          mb: 2,
        }}
      >
        <img
          alt="FocusWKU"
          style={styledImage}
          src={require("../assets/focus.jpg")}
        />{" "}
        <Typography
          variant="h4"
          sx={{ fontSize: "3rem", fontWeight: "600", alignSelf: "center" }}
        >
          FocusWKU
        </Typography>
      </Box>
        </StyledLink>
        <StyledLink to="/">
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/images">Image</StyledLink>
            <StyledLink to="/videos">Video</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
            { isLogin ? <StyledLink to="/profile">Profile</StyledLink> : <StyledLink to="/auth">Login</StyledLink> }
            { isAdmin ? <StyledLink to="/posts">Posts</StyledLink> : "" }
            {isGC ? <StyledLink to='gc'>GC students</StyledLink> : ""}
          </Box> 
        </StyledLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
