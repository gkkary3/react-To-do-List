import React from "react";

export default function SideBar({
  onClick,
  projectData,
  setProjectClick,
  setprojectSelectedData,
  userName,
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
      {/* userName's 프로젝트 관리 */}
      <div className="flex justify-center w-full mb-4">
        <div className="w-full p-4 text-center border-2 border-gray-300 rounded-md">
          <p className="font-semibold text-blue-500">
            {userName ? userName : ""}
            <span className="text-gray-800">의 프로젝트 관리</span>
          </p>
        </div>
      </div>

      {/* 프로젝트 목록 & 새 프로젝트 버튼 */}
      <div className="flex flex-col-reverse mb-4 md:flex-row md:justify-between md:items-center">
        {/* 프로젝트 목록 */}
        <h2 className="mb-4 text-lg font-bold text-center uppercase md:mb-0 md:text-left">
          프로젝트 목록
        </h2>

        {/* 새 프로젝트 버튼 */}
        <button
          onClick={() => onClick(true, false)}
          className="w-full px-6 py-2 mb-3 text-sm text-white transition duration-200 bg-blue-600 rounded-md md:mb-0 md:w-auto hover:bg-blue-700"
        >
          + 새 프로젝트
        </button>
      </div>

      {/* 프로젝트 목록 리스트 */}
      <ul id="project-list" className="mt-4 max-h-64 overflow-y-auto">
        {title}
      </ul>
    </aside>
  );
}
