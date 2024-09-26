import React, { forwardRef } from "react";

export default function SideBar({
  onClick,
  projectData,
  setProjectClick,
  setprojectSelectedData,
  userName
}) {
  function handleProjectClick(id) {
    const selectedProject = projectData.find((data) => data.id === id);
    setProjectClick(true);
    setprojectSelectedData(selectedProject);
  }

  const title = projectData.map((project) => (
    <li key={project.id}>
      <button
        onClick={() => handleProjectClick(project.id)}
        className="w-full px-2 py-2 my-1 text-left text-gray-800 transition duration-200 rounded-md hover:text-white hover:bg-blue-500"
      >
        {project.title}
      </button>
    </li>
  ));

  return (
    <aside className="w-full p-6 text-gray-800 bg-white shadow-lg rounded-xl md:w-1/3">
      <div className="flex">
        {/* 왼쪽 - 프로젝트 목록 및 새 프로젝트 버튼 */}
        <div className="flex flex-col mr-5">
          <h2 className="mb-6 text-lg font-bold text-center uppercase md:text-xl md:text-left">
            프로젝트 목록
          </h2>
          <div className="flex justify-center mb-4 md:justify-start">
            <button
              onClick={() => onClick(true, false)}
              className="px-6 py-2 text-sm text-white transition duration-200 bg-blue-600 rounded-md hover:bg-blue-700"
            >
              + 새 프로젝트
            </button>
          </div>
        </div>

        {/* 오른쪽 - border 박스와 프로젝트 관리 문구 */}
        <div className="flex justify-center">
          <div className="p-4 border-2 border-gray-300 rounded-md flex items-center h-full">
            <p className="text-center  text-blue-500 font-semibold">
              {userName ? userName : ""}
              <span className="text-gray-800">의 프로젝트 관리</span>
            </p>
          </div>
        </div>
      </div>

      {/* 프로젝트 목록 */}
      <ul id="project-list" className="mt-4">
        {title}
      </ul>
    </aside>
  );
}

