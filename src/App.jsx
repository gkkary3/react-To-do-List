import { useState } from "react";
import NewProject from "./components/NewProject";
import NotProject from "./components/NotProject";
import DetaildProject from "./components/DetaildProject";
import SideBar from "./components/sideBar";

function App() {
  const [project, setProject] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const [projectClick, setProjectClick] = useState(false);
  const [projectSelectedData, setprojectSelectedData] = useState("");

  function newProejctClick(set, seleted) {
    setProject(set);
    setProjectClick(seleted);
  }

  function delProejct(id) {
    setProjectData((prevData) =>
      prevData.filter((project) => project.id !== id)
    );
    setProjectClick(false);
    newProejctClick(false, false);
  }

  return (
    <main className="flex h-screen gap-8 my-8">
      <SideBar
        onClick={newProejctClick}
        projectData={projectData}
        setProjectClick={setProjectClick}
        setprojectSelectedData={setprojectSelectedData}
      />
      {projectClick ? (
        // projectClick이 true일 때 DetaildProject 컴포넌트 표시
        <DetaildProject
          projectData={projectSelectedData}
          onClick={newProejctClick}
          delProejct={delProejct}
          setProjectData={setProjectData}
        />
      ) : // projectClick이 false일 때 기존 NewProject 또는 NotProject 컴포넌트 표시
      !project ? (
        <NotProject onClick={newProejctClick} />
      ) : (
        <NewProject
          onClick={newProejctClick}
          projectData={projectData}
          setProjectData={setProjectData}
        />
      )}
    </main>
  );
}

export default App;
