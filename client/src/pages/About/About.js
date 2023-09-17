import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box sx={{m: 5, background: '#f2f2f2', p: 5, borderRadius: '20px'}}>
      <Typography variant="h2" sx={{ fontSize: '5rem', textAlign: 'center', fontWeight: 600, marginBottom: 3, color: '#1b0760'}}>About FocusWKU</Typography>
      <Typography variant="body1" sx={{fontSize: '3rem', lineHeight: '1.5', color: '#918ca4'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim sit
        fugiat atque assumenda! Fuga officiis praesentium, voluptas cumque in
        sit voluptate, ea explicabo eveniet provident corrupti atque. Eaque,
        quos? Expedita et harum impedit, mollitia illum autem eum numquam
        voluptatem molestiae pariatur inventore cupiditate ipsum esse ex fuga
        dolorem temporibus nostrum architecto sed voluptatibus? Labore odio
        saepe eius facilis optio. Quam molestias, harum quo voluptatibus maxime
        rem perspiciatis et, eligendi minima eaque eveniet in asperiores ex odio
        deserunt. Error expedita ea quos laudantium perspiciatis facilis vel
        voluptate nostrum amet ab.
      </Typography>
    </Box>
  );
};

export default About;
