import React from "react";
import Card from "./Components/Card";
const App = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-col lg:flex-row gap-10">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="w-full h-full flex flex-col lg:flex-row gap-10 my-10">
        <div className="w-2/3 h-full">
          <div className="w-full h-full bg-white rounded-xl shadow-sm"></div>
        </div>
        <div className="w-1/3 h-full flex flex-col gap-5">
          <div className="w-full h-1/2 bg-white rounded-xl shadow-sm"></div>
          <div className="w-full h-1/2 bg-white rounded-xl shadow-sm"></div>
        </div>
      </div>
    </>
  );
};

export default App;
