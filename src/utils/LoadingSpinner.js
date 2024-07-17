import React from "react";

const LoadingSpinner = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2">
        <div className="h-24 w-24 rounded-full border-[7px] border-solid border-gray-200 border-t-gray-900 animate-spin"></div>
      </div>
    </>
  );
};

export default LoadingSpinner;
