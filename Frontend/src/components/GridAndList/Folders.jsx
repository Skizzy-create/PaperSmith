import { FolderIcon } from "lucide-react";
import React, { useState } from "react";

export default function Folders({ name, path }) {
  const [Path, setPath] = useState("");

  return (
    <div
      className="flex gap-3 text-[12px] items-center py-1 font-noto px-2 rounded-sm hover:bg-gray-100"
      onclick={""}
    >
      <FolderIcon className="size-3" /> {name}{" "}
    </div>
  );
}
