export default function SideBar({
  onClick,
  projectData,
  setProjectClick,
  setprojectSelectedData,
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
      <ul id="project-list" className="mt-4">
        {title}
      </ul>
    </aside>
  );
}
