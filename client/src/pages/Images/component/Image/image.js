import { Box } from "@mui/material";
import { useState } from "react";
const Image = ({ url }) => {
  const [imgClass, setImgClass] = useState('')

  return (
    <div className={imgClass} sx={{ width: "100%", height: "100hv" }}>
      <div className='close' onClick={() => setImgClass('')}>&times;</div>
      <img
        onClick={() => setImgClass('imageBox')}
        className={`hover-shadow`}
        src={url}
        alt="this is user"
        // style={{ width: "100%" }}
      />
    </div>
  );
};

export default Image;
