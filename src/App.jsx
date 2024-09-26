import { useState, useRef } from "react";
import NewProject from "./components/NewProject";
import NotProject from "./components/NotProject";
import UserName from  "./components/UserName";
import DetaildProject from "./components/DetaildProject";
import SideBar from "./components/sideBar";

function App() {
  const [project, setProject] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const [projectClick, setProjectClick] = useState(false);
  const [projectSelectedData, setprojectSelectedData] = useState("");
  const [userNameSubmit, setUserNameSubmit] = useState(false);
  const [userName, setUserName] = useState('');
  const [inputError, setInputError] = useState(false); // 입력 오류 상태
  const userNameRef = useRef();

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

  function newUserName() {
    if(userNameRef.current.value.length === 0) {
      setInputError(true);
      return;
    }
    setUserName(userNameRef.current.value);
    setUserNameSubmit(true);
  }
 

  return (
    <main className="flex h-screen gap-8 my-8">

      {userNameSubmit ? 
      <>
        <SideBar
        onClick={newProejctClick}
        projectData={projectData}
        setProjectClick={setProjectClick}
        setprojectSelectedData={setprojectSelectedData}
        userName={userName}
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
      </>
      : 
      // <UserName ref={userNameRef} onClick={newUserName}/>}
      <UserName setUserName={setUserName} inputError= {inputError} ref={userNameRef} onClick={newUserName}/>}
    </main>
  );
}

export default App;
