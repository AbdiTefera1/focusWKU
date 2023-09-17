import { Box, Button, Container, Grid, Grow, Typography } from "@mui/material";
import { StyledButton } from ".";

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
                Maati FocusWKU ta'a
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
              <StyledButton> Maati FocusWKU ta'uuf!</StyledButton>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={require("../assets/com.png")}
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