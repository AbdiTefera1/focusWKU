import { Box } from "@mui/material";
import HomePages from "./HomePages";
import Images from "../Images/component/Images";
import Videos from "../Videos/component/videos";
import About from "../About/About";
import Contact from "../Contact/Contact";
// import Footer from "../Footer/Footer";
// import Images from "../Images/Images";

export const Home = () => {
  return (
    <Box>
      <HomePages />
      <Images lk={true} />
      <Videos />
      <About/>
      <Contact/>
    </Box>
  );
};

export default Home;
