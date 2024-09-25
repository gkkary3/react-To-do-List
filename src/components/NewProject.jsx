import { useState, useRef } from "react";
import Input from "./Input.jsx";

export default function NewProject({ onClick, projectData, setProjectData }) {
  const titleRef = useRef();
  const desRef = useRef();
  const dateRef = useRef();

  function handleSave() {
    const maxId =
      projectData.length > 0
        ? Math.max(...projectData.map((proj) => proj.id))
        : 0;
    setProjectData((prevData) => [
      ...prevData,
      {
        id: maxId + 1,
        title: titleRef.current.value,
        description: desRef.current.value,
        dueDate: dateRef.current.value,
        tasks: [],
      },
    ]);
    onClick(false, false);
  }

  return (
    <div className="w-[35rem] mt-16 bg-white shadow-lg rounded-md p-6">
      <menu className="flex items-center justify-end gap-4 mb-4">
        <li>
          <button
            onClick={() => onClick(false, false)}
            className="text-blue-600 hover:text-blue-800"
          >
            취소
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            저장
          </button>
        </li>
      </menu>
      <div>
        <Input name="title" label="제목" ref={titleRef} />
        <Input name="description" label="설명" textarea ref={desRef} />
        <Input name="dueDate" label="마감일" type="date" ref={dateRef} />
      </div>
    </div>
  );
}
