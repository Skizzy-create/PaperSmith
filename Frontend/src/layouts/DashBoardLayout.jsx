import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Backdrop from "../components/Folders/Backdrop";
import Modal from "../components/Folders/Modal";

export default function DashBoardLayout() {
  const [ModalShow , SetModalShow] = useState(false);
  const [GridAndListState, setGridAndListGate] = useState(0);
  return (
    <div className="flex bg-[#F8F8F8] h-[100vh] overflow-hidden ">
      <Sidebar ModalState={SetModalShow} />
      {ModalShow ?<div className="absolute flex  flex-col justify-center items-center w-full h-full">
      <Backdrop onClick={()=>SetModalShow(false)}/>
      <Modal/>

      </div> : <div className="absolute"></div> }
      
      
      <div className="flex flex-col w-full  ">
    

        <Navbar setGridListState={setGridAndListGate} />
        

        <Outlet context={GridAndListState} />
      </div>
    </div>
  );
}
