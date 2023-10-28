import { Box, Button, Container, Grid, Grow, Typography } from "@mui/material";
import { StyledButton } from ".";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Box
      id="home"
      sx={{
        background: "#000",
        width: "100%",
        marginTop: "0.1rem",
        marginBottom: "0.1rem",
      }}
    >
      <Grow in>
        <Grid
          container
          alignItems="stretch"
          spacing={3}
          sx={{
            display: "flex",
            // justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
            p: 6,
            textAlign: "center",
          }}
        >
          <Grid item xs={12} sm={6} gap={3}>
            
              <Typography variant="h1" sx={{ fontSize: "5rem", color: "#fff" }}>
                Be focusWKU family
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "2rem", color: "#fff", mb: 5 }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Minima, officiis non magni facere repellat cumque odit aliquam
                molestias sequi ullam
              </Typography>
              {/* <Button sx={{ background: "#33ddff" }}>Maati ta'uuf!</Button> */}
              <StyledButton><Link to="/auth"> Get Start</Link></StyledButton>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={require("../assets/focus.jpg")}
              alt="FocusWKU"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Grow>
    </Box>
  );
};

export default HomePage;
