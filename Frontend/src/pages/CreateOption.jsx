import {
  ArrowBigLeft,
  ChevronDown,
  Minus,
  Plus,
  UploadCloud,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Sections from "../components/Sections";
import { useNavigate } from "react-router-dom";

export default function CreateOption() {
  const [rows, Setrows] = useState([]);
  const [FormData, setFormData] = useState({});
  const [value, setValue] = useState("Hybrid");
  const [visible, SetVisible] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  const navigation = useNavigate();

  const onShow = (e) => {
    SetVisible(true);
  };

  const onHide = (e) => {
    if (
      !menuRef.current.contains(e.target) &&
      !btnRef.current.contains(e.target)
    ) {
      SetVisible(false);
    }
  };

  const onAdd = (e) => {
    if (validation()) {
      Setrows([...rows, { id: rows.length + 1 }]);
    } else {
      alert("Enter prev section field to proceed");
    }
  };

  const onMinus = (e) => {
    Setrows(rows.slice(0, -1));
    const newFormData = { ...FormData };
    delete newFormData[rows.length - 1];
    setFormData(newFormData);
  };

  const OnHandleChange = (index, data) => {
    const NewFormData = { ...FormData, [index]: data };
    setFormData(NewFormData);
    console.log(NewFormData);
  };

  const validation = () => {
    for (let key in FormData) {
      const { Questions, NumberOfQuestion } = FormData[key];
      if (!Questions || !NumberOfQuestion) {
        return false;
      }
    }

    return true;
  };

  useEffect(() => {
    if (visible) {
      document.addEventListener("mousedown", onHide);
    } else {
      document.removeEventListener("mousedown", onHide);
    }

    return () => {
      document.removeEventListener("mousedown", onHide);
    };
  }, [visible]);

  return (
    <div className="w-[100wh] bg-[#F8F8F8] h-[100vh] flex flex-col gap-12 p-12">
      <div
        className="flex w-24 rounded-md justify-center hover:cursor-pointer  py-1 text-white font-noto gap-2 items-center bg-[#5278FF]"
        onClick={() => navigation(-1)}
      >
        <ArrowBigLeft size={16} />
        back
      </div>
      <div className="flex flex-col mx-64  gap-6 ">
        <div>
          <h1 className="font-rozha text-4xl text-center">Create</h1>

          <h1 className="font-rozha text-2xl text-center text-gray-500">
            Customize your paper to your needs
          </h1>
        </div>

        <div className="flex items-center justify-between gap-36 relative">
          <div
            className="bg-black px-3 py-1 w-36 flex justify-between  text-white  items-center font-noto rounded-md hover:cursor-pointer"
            onClick={onShow}
            ref={btnRef}
          >
            {value}
            <ChevronDown className="size-5" />

            {visible && (
              <ul
                className="bg-white absolute  shadow-sm px-1 py-1 w-36 top-[99%] flex flex-col text-black font-noto"
                ref={menuRef}
              >
                <li>
                  <button
                    className="p-1 w-full rounded-sm hover:bg-gray-200"
                    onClick={() => {
                      setValue("Mcq Only");
                    }}
                  >
                    Mcq Only
                  </button>
                </li>

                <li>
                  <button
                    className="p-1 w-full rounded-sm hover:bg-gray-200"
                    onClick={() => {
                      setValue("Theory Only");
                    }}
                  >
                    Theory Only
                  </button>
                </li>

                <li>
                  <button
                    className="p-1 w-full rounded-sm hover:bg-gray-200"
                    onClick={() => {
                      setValue("Hybrid");
                    }}
                  >
                    Hybrid
                  </button>
                </li>
              </ul>
            )}
          </div>
          <div className="flex px-3 py-1 items-center gap-3 hover:cursor-pointer bg-black text-white rounded-md font-noto">
            Upload book
            <UploadCloud className="size-4" />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-auto h-60 overflow-y-auto">
          {rows.map((row, index) => (
            <Sections
              key={row.id}
              index={index}
              handleChange={OnHandleChange}
            />
          ))}

          <div className="flex gap-6">
            <div
              className="rounded-full p-2 w-10 hover:cursor-pointer bg-gray-300 "
              onClick={onAdd}
            >
              <Plus />
            </div>

            <div
              className="rounded-full p-2 w-10 hover:cursor-pointer bg-gray-300 "
              onClick={onMinus}
            >
              <Minus />
            </div>
          </div>
        </div>
      </div>

      <button
        className="px-8 rounded-md font-noto bg-[#5278FF] m-auto py-2 text-white"
        onClick={""}
      >
        Create
      </button>
    </div>
  );
}
