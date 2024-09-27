import { useState, useRef, useEffect } from "react";
import NewProject from "./components/NewProject";
import NotProject from "./components/NotProject";
import UserName from "./components/UserName";
import DetaildProject from "./components/DetaildProject";
import SideBar from "./components/SideBar";

function App() {
  const [project, setProject] = useState(false);
  const [projectData, setProjectData] = useState(() => {
    const savedData = window.localStorage.getItem("projectData");
    return savedData ? JSON.parse(savedData) : [];
  });

  const [projectClick, setProjectClick] = useState(false);
  const [projectSelectedData, setprojectSelectedData] = useState("");
  const [userNameSubmit, setUserNameSubmit] = useState(false);
  const [userName, setUserName] = useState("");
  const [inputError, setInputError] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const userNameRef = useRef();

  useEffect(() => {
    window.localStorage.setItem("projectData", JSON.stringify(projectData));
  }, [projectData]);

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
    if (userNameRef.current.value.length === 0) {
      setInputError(true);
      return;
    }
    window.localStorage.setItem("userName", userNameRef.current.value);
    setUserName(userNameRef.current.value);
    setUserNameSubmit(true);
    setShowWelcomeMessage(true);

    setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 2000);
  }

  return (
    <main className="flex flex-col h-screen gap-8 my-8 md:flex-row">
      {userNameSubmit ? (
        showWelcomeMessage ? (
          <div
            className={`flex items-center justify-center w-full h-full transition-all duration-1000 ease-in-out transform
            ${
              showWelcomeMessage
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90"
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600">
              {userName}님, 환영합니다!
            </h2>
          </div>
        ) : (
          <>
            <SideBar
              onClick={newProejctClick}
              projectData={projectData}
              setProjectClick={setProjectClick}
              setprojectSelectedData={setprojectSelectedData}
              userName={userName}
            />
            <div className="flex-1">
              {" "}
              {/* This div ensures NewProject or NotProject takes remaining space */}
              {projectClick ? (
                <DetaildProject
                  projectData={projectSelectedData}
                  onClick={newProejctClick}
                  delProejct={delProejct}
                  setProjectData={setProjectData}
                />
              ) : !project ? (
                <NotProject onClick={newProejctClick} />
              ) : (
                <NewProject
                  onClick={newProejctClick}
                  projectData={projectData}
                  setProjectData={setProjectData}
                />
              )}
            </div>
          </>
        )
      ) : (
        <UserName
          setUserName={setUserName}
          inputError={inputError}
          ref={userNameRef}
          onClick={newUserName}
        />
      )}
    </main>
  );
}

export default App;
