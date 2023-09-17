import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";

const Input = ({
  half,
  name,
  type,
  handleChange,
  autoFocus,
  label,
  handleShowPassword,
  value
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        fontSize={16}
        name={name}
        onChange={handleChange}
        label={label}
        type={type}
        value={value}
        variant="outlined"
        autoFocus={autoFocus}
        required
        fullWidth
        InputProps={ name === 'password' ? {
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                        {type === 'password' ? <Visibility/> : <VisibilityOff/>}
                    </IconButton>
                </InputAdornment>
            )
        } : null}
      />
    </Grid>
  );
};

export default Input;
