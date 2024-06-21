import React, { useEffect, useRef, useState } from "react";
import {
  DownloadIcon,
  EllipsisVertical,
  Folder,
  Share2,
  ShareIcon,
  Trash,
  Triangle,
} from "lucide-react";
import Folders from "./Folders";
import axios from "axios";
export default function OptionsDropDown() {
  const [Visible, SetVisible] = useState(false);
  const [FolderList, setFolderList] = useState([]);
  const [Postion, setPostion] = useState(false);
  const menuref = useRef(null);
  const buttonref = useRef(null);
  const FolderShowref = useRef(null);

  const onShow = (e) => {
    SetVisible(!Visible);
    console.log(!Visible);
  };

  const onhide = (e) => {
    if (
      !buttonref.current.contains(e.target) &&
      !menuref.current.contains(e.target)
    ) {
      SetVisible(false);
    }
  };

  const getLocation = () => {
    if (menuref.current) {
      const rect = menuref.current.getBoundingClientRect();
      const overflow = rect.right > window.innerWidth;
      if (overflow) {
        setPostion(true);
      }
    }
  };

  useEffect(() => {
    if (Visible) {
      document.addEventListener("mousedown", onhide);
      getLocation();
    } else {
      document.removeEventListener("mousedown", onhide);
    }

    return () => {
      document.removeEventListener("mousedown", onhide);
    };
  }, [Visible]);

  useEffect(() => {
    axios
      .get("user/folders/")
      .then((response) => {
        setFolderList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="relative z-40 ">
      <EllipsisVertical
        ref={buttonref}
        className="size-4 hover:bg-gray-200 hover:rounded-full hover:cursor-pointer aria-hidden: "
        onClick={() => onShow()}
      />
      {Visible && (
        <div
          className={`absolute bg-white rounded-md ${
            Postion ? "right-full" : ""
          }  shadow-md border-black border-opacity-10 `}
          ref={menuref}
        >
          <ul className="py-2 px-2  flex flex-col ">
            <li>
              <button className="flex px-2 py-1  rounded-sm items-center hover:bg-gray-100 gap-4 w-[160px] font-noto text-[12px]">
                <Share2 className="size-3" />
                share
              </button>
            </li>

            <li>
              <button className="flex px-2 py-1 items-center rounded-sm hover:bg-gray-100 gap-4 w-[160px] font-noto text-[12px]">
                <DownloadIcon className="size-3" />
                Download pdf
              </button>
            </li>

            <li className="relative group">
              <button className="flex  px-2 py-1 justify-between rounded-sm hover:bg-gray-100 items-center gap-4 w-[160px] font-noto text-[12px]">
                <div className=" flex gap-4 items-center ">
                  <Folder className="size-3" />
                  Move to Folder
                  <ui
                    className={`absolute hidden flex flex-col group-hover:block px-2 ${
                      Postion ? "right-full" : "left-full"
                    } border-black border-opacity-10 w-28 gap-4 shadow-sm rounded-sm py-2 bg-white `}
                  >
                    {FolderList.map((folders) => (
                      <Folders name={folders.title} />
                    ))}
                  </ui>
                </div>

                <Triangle fill="black" className="size-1 rotate-90" />
              </button>
            </li>

            <li>
              <button className="flex px-2 py-1 items-center rounded-sm hover:bg-gray-100 gap-4 w-[160px] font-noto text-[12px]">
                <Trash className="size-3" />
                Move To trash
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
