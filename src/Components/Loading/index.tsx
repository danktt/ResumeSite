import * as animationData from "../../assets/loading.json";
// import { useState } from "react";
import Lottie from "react-lottie";

export default function Loading() {
  // const [animateState, setAnimateState] = useState({
  //   isStopped: false,
  //   isPaused: false,
  // });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="h-screen bg-secondary flex justify-center items-center  ">
      <Lottie
        options={defaultOptions}
        height={100}
        width={100}
        // isStopped={animateState.isStopped}
        // isPaused={animateState.isPaused}
        isClickToPauseDisabled={true}
      />
    </div>
  );
}
