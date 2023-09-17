import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// import { StyledLink } from '../../components/NavBar'

export const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "#fff",
  fontSize: "20px",
  marginLeft: "20px",
  textAlign: "center",
}));

const styledImage = {
  marginRight: "10px",
  height: "50px",
  width: "50px",
  borderRadius: "50%",
  alignSelf: "center",
};

const Footer = () => {
  return (
    <Box
      sx={{
        background: "#232323",
        p: 5,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
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
          src={require("../../assets/com.png")}
        />{" "}
        <Typography
          variant="h4"
          sx={{ fontSize: "3rem", fontWeight: "600", alignSelf: "center" }}
        >
          FocusWKU
        </Typography>
      </Box>
      <div>
        <Typography variant="body1" sx={{ fontSize: "2rem", color: "#918ca4" }}>
          Copyright 2023
        </Typography>
        <Typography sx={{ fontSize: "2rem", color: "#918ca4" }}>
          Followship Oromo Chirstian University Student, Wolkite University
        </Typography>
      </div>
    </Box>
  );
};

export default Footer;
