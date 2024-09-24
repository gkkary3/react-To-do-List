export default function DetaildProject({ projectData, delProejct }) {
  return (
    <div className="w-[35rem] mt-16">
      <div className="flex justify-between">
        <h1>{projectData.title}</h1>
        <button onClick={() => delProejct(projectData.id)}>Delete</button>
      </div>
      <p>{projectData.dueDate}</p>
      <pre>{projectData.description}</pre>
    </div>
  );
}
