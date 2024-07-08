import { useState } from "react";
import DefaultNav from "./components/navigation.component";
import { Outlet } from "react-router-dom";

function App() {


  return (
    <>
      {/* <div className="circle absolute w-[752px] h-[752px] z-[-1]">
        <div className="relative top-[-50%] right-[36px] rounded-full bg-primary-yellow w-full h-full"></div>
      </div> */}
      <Outlet />
      <DefaultNav />
    </>
  );
}

export default App;
