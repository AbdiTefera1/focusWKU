import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// import V1 from '../../../assets/V1.mp4'

const Video = ({ url }) => {
  return (
    <Box>
        <video style={{ width: "100%" }} loop controls src={url} />
    </Box>
  );
};

export default Video;
