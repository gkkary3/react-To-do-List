import Input from "./Input.jsx";
import { useState, useRef, useEffect } from "react";

export default function DetaildProject({
  projectData,
  delProejct,
  setProjectData,
}) {
  const taskRef = useRef();

  // Task state management
  const [tasks, setTasks] = useState([]);

  // Reset tasks state whenever projectData changes
  useEffect(() => {
    if (projectData.tasks) {
      setTasks(projectData.tasks);
    }
  }, [projectData]);

  function handleTask() {
    const newTask = taskRef.current.value;
    if (newTask.trim() === "") return; // Avoid adding empty tasks
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setProjectData((prevData) =>
      prevData.map((proj) =>
        proj.id === projectData.id
          ? { ...proj, tasks: [...proj.tasks, newTask] }
          : proj
      )
    );
    // Clear input field
    taskRef.current.value = "";
  }

  function delTask(index) {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);

    // Update projectData's tasks
    setProjectData((prevData) =>
      prevData.map((proj) =>
        proj.id === projectData.id ? { ...proj, tasks: updatedTasks } : proj
      )
    );
  }

  let tasksHTML = tasks.map((task, index) => (
    <div key={index} className="flex items-center justify-between mb-2">
      <li className="text-gray-700">{task}</li>
      <button
        onClick={() => delTask(index)}
        className="text-red-600 hover:text-red-800"
      >
        X
      </button>
    </div>
  ));

  return (
    <div className="flex justify-center w-full mt-16">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-gray-800">
            {projectData.title}
          </h1>
          <button
            onClick={() => delProejct(projectData.id)}
            className="text-red-600 hover:text-red-800"
          >
            삭제
          </button>
        </div>
        <p className="text-gray-600">{projectData.dueDate}</p>
        <pre className="mt-2 text-gray-600">{projectData.description}</pre>
        <br />
        <div>
          <h1 className="mt-4 mb-2 text-lg font-semibold text-gray-800">
            업무
          </h1>
          <div className="flex items-center mb-4">
            <Input ref={taskRef} placeholder="새로운 업무를 입력..." />
            <button
              onClick={handleTask}
              className="px-2 py-2 ml-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              추가
            </button>
          </div>
          <ul className="mt-2">{tasksHTML}</ul>
        </div>
      </div>
    </div>
  );
}
