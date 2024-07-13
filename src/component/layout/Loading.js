import React from "react";
import { Bars } from "react-loader-spinner";

const Loading = () => {
  return (
    <Bars
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loading;
