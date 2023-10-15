import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { setCameraImage } from "./features/cameraSlice";
import { useDispatch } from "react-redux";

const videoConstraints = {
  width: 300,
  height: 400,
  facingMode: "user",
};

function WebcamCapture() {
  const webcamRef = useRef(null);
  const [Image, setImage] = useState(null);
  const dispatch = useDispatch();
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // console.log(imageSrc);
    setImage(imageSrc);
    dispatch(setCameraImage(imageSrc));
  }, [dispatch]);

  return (
    <div className="webcamCapture">
      <h1>WebcamCapture</h1>
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      {/* <button onClick={capture}>Capture photo</button> */}
      <RadioButtonUncheckedIcon
        className="webcamCapture_button"
        onClick={capture}
        fontSize="large"
      />
      {/* {Image && <img src={Image} alt='snap' />} */}
      <img src={Image} alt="snap" />
    </div>
  );
}

export default WebcamCapture;
