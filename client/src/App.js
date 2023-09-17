import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import ImageGroup from "./pages/Images/ImageGroup";
// import Images from "./pages/Images/component/Images";
// import Videos from "./pages/Videos/component/videos";
import VideoGroup from "./pages/Videos/videoGroup";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Form from "./pages/Posts/Form";
import Footer from "./pages/Footer/Footer";
import AuthForm from "./pages/Auth/AuthForm";
import { PostProvider } from "./context/Posts/addPost";
import { AuthProvider } from "./context/Auth/auth";

// import axios from "axios";
const App = () => {
  // axios.defaults.headers.common["x-login-token"] = jwt;
  return (
    <Box>
      <BrowserRouter>
        <NavBar />
        {/* <HomePages/> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/images" element={<ImageGroup />} />
          {/* <Route path="/images" Component={Images} /> */}
          <Route path="/videos" element={<VideoGroup />} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route
            path="/posts"
            element={
              <PostProvider>
                <Form />
              </PostProvider>
            }
          />
          <Route
            path="/auth"
            element={
              <AuthProvider>
                <AuthForm />
              </AuthProvider>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  );
};

export default App;
