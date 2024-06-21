import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/GridAndList/Card";
import Table from "../components/GridAndList/Table";
import CardsTable from "../components/GridAndList/CardsTable";
import { useOutletContext } from "react-router-dom";

export default function HomePage() {
  const GridAndTable = useOutletContext();
  


  return (
    <div className="px-10 flex py-10">
      {   GridAndTable==0 ?  <CardsTable /> : <Table /> }
   
    </div>
  );
}
