import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Box sx={{m: 5, background: '#ccc', p: 5, borderRadius: '20px'}}>
      <Typography variant="h2" sx={{ color: '#1b0760', fontSize: '5rem', textAlign: 'center', fontWeight: 600, marginBottom: 3}}>
        Contact Us
      </Typography>
        <Grid container display="flex" alignItems="stretch" textAlign='center' spacing={2}>
            <Grid item xs={12} sm={4}>
      <div>
        <Typography variant="body1" sx={{ color: '#1b0760', fontSize: '3rem', lineHeight: '1.5', fontWeight: '600'}}>Email</Typography>
        <Link style={{fontSize: '2rem', lineHeight: '1.5', color: '#918ca4'}}>focusWku@gmail.com</Link>
      </div>                
            </Grid>
            <Grid item xs={12} sm={4}>       
      <div>
        <Typography variant="body1" sx={{ color: '#1b0760', fontSize: '3rem', lineHeight: '1.5', fontWeight: '600'}}>Phone Number</Typography>
        <Link style={{fontSize: '2rem', lineHeight: '1.5', color: '#918ca4'}}>0934542423</Link>
      </div>
            </Grid>
            <Grid item xs={12} sm={4}>   
      <div>
        <Typography variant="body1" sx={{ color: '#1b0760', fontSize: '3rem', lineHeight: '1.5', fontWeight: '600'}}>Telegram</Typography>
        <Link style={{fontSize: '2rem', lineHeight: '1.5', color: '#918ca4'}}>@FocusWKU</Link>
      </div>
            </Grid>
        </Grid>
      
    </Box>
  );
};

export default Contact;
