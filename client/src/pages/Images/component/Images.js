import React from "react";
import Image from "./Image/image";
import Img1 from "../../../assets/A.jpg";
import Img2 from "../../../assets/B.jpg";
import Img3 from "../../../assets/C.jpg";
import Img4 from "../../../assets/D.jpg";
// import Img5 from "../../../assets/E.jpg"
import { Box, Card, Grid, Typography } from "@mui/material";
import { StyledLink } from '../../../components/NavBar';
import { Link } from "react-router-dom";

const Images = ({lk}) => {
  return (
    <div style={{ margin: '5rem', boxShadow: "0 0 20px 10px #f3f3f3", borderRadius: '20px', padding: '3rem' }}>
      <div style={{textAlign: 'center', color: '#1b0760', marginBottom: '3rem'}}>
        <Typography variant="h3" sx={{fontSize: '3rem', fontWeight: 600}}>This is Sunday service</Typography>
        <Typography variant="body1" sx={{fontSize: '2rem'}}>
          On Sunday service GOD speak to us by preacher Tola, Hosiena Coire and
          Worship group {lk ? <Link to="/images">See more...</Link> : ""}
        </Typography>
      </div>
      <div>
        <Card sx={{ boxShadow: "0 0 20px 10px #f3f3f3" }}>
          <Grid container alignItems="stretch" spacing={1}>
            <Grid item xs={12} sm={6} lg={3}>
              <Image url={Img1} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Image url={Img2} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Image url={Img3} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Image url={Img4} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Image url={Img1} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Image url={Img2} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Image url={Img3} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Image url={Img4} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Image url={Img1} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Image url={Img2} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Image url={Img3} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Image url={Img4} />
            </Grid>
          </Grid>
        </Card>
      </div>
    </div>
  );
};

export default Images;
