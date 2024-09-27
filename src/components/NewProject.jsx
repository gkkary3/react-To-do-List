import { useRef } from "react";
import Input from "./Input.jsx";

export default function NewProject({ onClick, projectData, setProjectData, inputError, setInputError }) {
  const titleRef = useRef();
  const desRef = useRef();
  const dateRef = useRef();

  function handleSave() {
    if(titleRef.current.value.length === 0){
      setInputError(true);
      return;
    }

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
    setInputError(false);
  }

  return (
    <div className="flex justify-center items-center w-full h-auto min-h-[300px] md:h-screen md:mt-0">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <menu className="flex items-center justify-between mb-4 ">
          <button
            onClick={() => onClick(false, false)}
            className="text-blue-600 hover:text-blue-800"
          >
            취소
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            저장
          </button>
        </menu>
        <div>
          <Input name="title" label="제목" ref={titleRef}         
          className={`${
          inputError
            ? "border-red-500 bg-red-100 bg-opacity-50" // 에러 시 스타일
            : "border-blue-300 bg-slate-200"
        }`}/>
          <Input name="description" label="설명" textarea ref={desRef} />
          <Input name="dueDate" label="마감일" type="date" ref={dateRef} />
        </div>
      </div>
    </div>
  );
}
