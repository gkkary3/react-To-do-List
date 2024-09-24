import { useState, useRef } from "react";
import Input from "./Input.jsx";

export default function NewProject({ onClick, setProjectData }) {
  //1. local state를 사용한 방법
  // const [localData, setLocalData] = useState({
  //   title: "",
  //   description: "",
  //   dueDate: "",
  // });

  // function handleInputChange(e) {
  //   const { name, value } = e.target;
  //   setLocalData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // }

  // function handleSave() {
  //   setProjectData(localData);
  //   onClick(false);
  // }

  //2. useRef()를 이용한 방법
  const titleRef = useRef();
  const desRef = useRef();
  const dateRef = useRef();

  function handleSave() {
    setProjectData((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        title: titleRef.current.value,
        description: desRef.current.value,
        dueDate: dateRef.current.value,
      },
    ]);
    onClick(false, false);
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            onClick={() => onClick(false, false)}
            className="text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input
          name="title"
          label="Title"
          ref={titleRef}
          // value={localData.title}
          // onChange={handleInputChange}
        />
        <Input
          name="description"
          label="Description"
          textarea
          ref={desRef}
          // value={localData.description}
          // onChange={handleInputChange}
        />
        <Input
          name="dueDate"
          label="Due Date"
          type="date"
          ref={dateRef}
          // value={localData.dueDate}
          // onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
