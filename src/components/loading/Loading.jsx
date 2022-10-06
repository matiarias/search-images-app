import React from "react";
import Lottie from "lottie-react";
import loadingLottie from "../../assets/lottie files/97930-loading.json";

const Loading = () => {
  return (
    <div className="w-[200px]">
      <Lottie animationData={loadingLottie} loop={true} />
    </div>
  );
};

export default Loading;
