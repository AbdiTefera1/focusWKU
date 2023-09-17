import React, { useState, useContext } from "react";
import "./form.css";
import { Paper, TextField, Button, Typography } from "@mui/material";
import FileBase from "react-file-base64";
import PostContext from "../../context/Posts/addPost";
const Form = () => {
  const [form, setForm] = useState({
    title: "",
    date: "",
    preacher: "",
    coire: "",
    worship: "",
    selectedFiles: "",
    message: "",
  });

  const { createPosts } = useContext(PostContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPosts(form);
    // handleClear();
  };

  const handleClear = () => {
    setForm({
      ...form,
      title: "",
      date: "",
      preacher: "",
      coire: "",
      worship: "",
      selectedFiles: "",
      message: "",
    });
  };

  return (
    <div className="container">
      <Paper sx={{ padding: 4, width: "100%" }}>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontSize: "3.5rem",
              fontWeight: 600,
              color: "#1b0760",
              marginBottom: "30px",
            }}
          >
            Create a Post
          </Typography>
          <TextField
            sx={{ marginBottom: "20px" }}
            name="title"
            variant="outlined"
            label="Title"
            value={form.title}
            fullWidth
            onChange={handleChange}
          />
          <TextField
            sx={{ marginBottom: "20px", fontSize: "2rem" }}
            name="date"
            variant="outlined"
            label="Date"
            fullWidth
            value={form.date}
            onChange={handleChange}
          />
          <TextField
            sx={{ marginBottom: "20px", fontSize: "2rem" }}
            name="preacher"
            variant="outlined"
            label="Preacher"
            fullWidth
            value={form.preacher}
            onChange={handleChange}
          />
          <TextField
            sx={{ marginBottom: "20px", fontSize: "2rem" }}
            name="coire"
            variant="outlined"
            label="Coire Team"
            fullWidth
            value={form.coire}
            onChange={handleChange}
          />
          <TextField
            sx={{ marginBottom: "20px", fontSize: "2rem" }}
            name="worship"
            variant="outlined"
            label="Worship Team"
            value={form.worship}
            fullWidth
            onChange={handleChange}
          />
          <div style={{ marginBottom: "20px" }}>
            <textarea
              className="textarea"
              placeholder="Additional message..."
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div style={{ marginBottom: "20px", padding: 3 }}>
            <FileBase
              className="filebase"
              type="file"
              name="selectedFiles"
              onDone={({ base64 }) => {
                
                setForm({ ...form, selectedFiles: base64  });
              }}
            />
            {/* <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            /> */}
          </div>
          <Button
            sx={{ marginBottom: "20px", fontSize: "2rem", fontWeight: 700 }}
            variant="contained"
            fullWidth
            color="primary"
            size="large"
            type="submit"
          >
            Post
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Form;
