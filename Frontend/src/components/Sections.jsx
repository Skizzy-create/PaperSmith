import React, { useState, useRef, useEffect } from "react";
import EditableText from "./EditableText";
import Checkbox from "./Checkbox";
import InputBox from "./InputBox";
import { ChevronDown } from "lucide-react";

export default function Sections({ index, handleChange }) {
  const [value, setValue] = useState("Medium");
  const [sectionTitle, setSectionTitle] = useState("Section-A");
  const [IsChecked, setIsChecked] = useState(false);
  const [Questions, setQuestions] = useState();
  const [NumberOfQuestion, setNumberofQuestion] = useState();
  const [visible, SetVisible] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

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

  const onQuestionChange = (e) => {
    setQuestions(e);
  };

  const onMarksChange = (e) => {
    setNumberofQuestion(e);
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

  useEffect(() => {
    handleChange(index, {
      dificulty: value,
      sectionTitle,
      Questions,
      NumberOfQuestion,
      IsChecked,
    });
  }, [value, sectionTitle, Questions, NumberOfQuestion, IsChecked]);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-4 m-auto">
        {
          <div>
            <EditableText
              setSectionTitle={(e) => {
                setSectionTitle(e);
              }}
            />
          </div>
        }
        <div className="w-[1.5px] h-10 bg-gray-400"></div>
        <div className="flex gap-4">
          <Checkbox
            CheckboxStatus={(e) => {
              IsChecked, e;
            }}
          />
          <InputBox
            placeholder={"no. of Question"}
            onChange={(e) => onQuestionChange(e.target.value)}
          />
          <InputBox
            placeholder={"Total marks"}
            onChange={(e) => {
              onMarksChange(e.target.value);
            }}
          />

          <div
            className="bg-[#EFEFEF] px-3  w-36 flex justify-between relative  text-gray-500  items-center font-noto rounded-md hover:cursor-pointer"
            onClick={onShow}
            ref={btnRef}
          >
            {value}
            <ChevronDown className="size-5" />

            {visible && (
              <ul
                className="bg-white absolute left-0  shadow-sm px-1 py-1 w-36 top-[99%] flex flex-col text-black font-noto"
                ref={menuRef}
              >
                <li>
                  <button
                    className="p-1 w-full rounded-sm hover:bg-gray-200"
                    onClick={() => {
                      setValue("Easy");
                    }}
                  >
                    Easy
                  </button>
                </li>

                <li>
                  <button
                    className="p-1 w-full rounded-sm hover:bg-gray-200"
                    onClick={() => {
                      setValue("Medium");
                    }}
                  >
                    Medium
                  </button>
                </li>

                <li>
                  <button
                    className="p-1 w-full rounded-sm hover:bg-gray-200"
                    onClick={() => {
                      setValue("Hard");
                    }}
                  >
                    Hard
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="w-96 m-auto h-[1.5px] bg-black opacity-20"></div>
    </div>
  );
}
