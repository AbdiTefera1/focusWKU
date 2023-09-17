import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import Video from "./video/video";
import v1 from "../../../assets/V1.mp4";
import v2 from "../../../assets/V2.mp4";
import { Link } from "react-router-dom";
const Videos = () => {
  return (
    <div style={{ margin: '5rem', boxShadow: "0 0 20px 10px #f3f3f3", borderRadius: '20px', padding: '3rem' }}>
      <div
        style={{ textAlign: "center", color: "#1b0760", marginBottom: "3rem" }}
      >
        <Typography variant="h3" sx={{ fontSize: "3rem", fontWeight: 600 }}>
          This is Sunday service
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "2rem" }}>
          On Sunday service GOD speak to us by preacher Tola, Hosiena Coire and
          Worship group <Link to="/images">See more...</Link>
        </Typography>
      </div>
      <div>
        <Card sx={{ boxShadow: "0 0 20px 10px #f3f3f3" }}>
          <Grid container alignItems="stretch" spacing={1}>
            <Grid item xs={12} sm={6} lg={3}>
              <Video url={v1} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Video url={v2} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Video url={v1} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Video url={v2} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Video url={v1} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Video url={v2} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Video url={v1} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Video url={v2} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Video url={v1} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Video url={v2} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Video url={v1} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Video url={v2} />
            </Grid>
          </Grid>
        </Card>
      </div>
    </div>
  );
};

export default Videos;
