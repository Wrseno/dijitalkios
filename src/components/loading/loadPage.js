import React from "react";

const Loading = () => {
  return (
    <div class='flex justify-center items-center h-screen'>
      <div class='relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-teal-400 via-cyan-500 to-sky-500 '>
        <div class='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-slate-100 rounded-full border-2 border-white'></div>
      </div>
    </div>
  );
};

export default Loading;
