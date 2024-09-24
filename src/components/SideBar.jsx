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

  let title = projectData.map((project) => (
    <li key={project.id}>
      <button
        onClick={() => handleProjectClick(project.id)}
        className="w-full px-2 py-1 my-1 text-left rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800"
      >
        {project.title}
      </button>
    </li>
  ));
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button
          onClick={() => onClick(true, false)}
          className="px-4 py-2 text-xs rounded-md md:text-base bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        >
          + Add Project
        </button>
      </div>
      <ul id="project-list" className="mt-8">
        {title}
      </ul>
    </aside>
  );
}
