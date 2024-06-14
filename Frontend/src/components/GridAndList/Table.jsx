import React, { useEffect, useState } from "react";
import TableContent from "./TableContent";
import axios from "axios";

export default function Table() {
  const [TableData, setTableData] = useState([]);

  useEffect(() => {
    const response = axios
      .get("user/papers")
      .then((response) => {
        setTableData(response.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="flex flex-col gap-3 w-full ">
      <div className="flex  font-bold px-6">
        <h1 className="text-md font-noto basis-1/4 text-gray-500">Title</h1>
        <h1 className="text-md font-noto  basis-1/4 text-gray-500">Folder</h1>
        <h1 className="text-md font-noto  basis-1/4 text-gray-500">
          Created on
        </h1>
        <h1 className="text-md font-noto  basis-1/4 text-gray-500">
          Last viewed
        </h1>
      </div>

      <div className=" h-[2px] bg-gray-400"></div>
      {TableData.map((table) => (
        <TableContent
          title={table.title}
          folder={table.folder}
          createdOn={table.createdOn}
          lastView={table.lastViewed}
        />
      ))}
    </div>
  );
}
