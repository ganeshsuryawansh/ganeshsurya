import About from "./Components/About";
import { Routes, Route, Link } from "react-router-dom";
import Frontinfo from "./Components/Frontinfo";
import Skills from "./Components/Skills";
import { HashLink } from "react-router-hash-link";
import HomeIcon from "@mui/icons-material/Home";
import DeveloperBoardSharpIcon from "@mui/icons-material/DeveloperBoardSharp";
import CodeIcon from "@mui/icons-material/Code";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import SendIcon from "@mui/icons-material/Send";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { useState } from "react";
import Project from "./Components/Project";
import Qualification from "./Components/Qualification";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [mode, setMode] = useState(false);
  const ismode = "bg-black text-white lg:px-52 sm:py-3 font-sans";
  const notismode = "bg-gray-100 text-black lg:px-52 sm:py-3 font-sans";

  return (
    <>
      <div className={mode ? ismode : notismode}>
        <Routes>
          <Route path="">
            <Route path="/About" />
            <Route path="/Skill" />
            <Route path="/Project" />
            <Route path="/Contact" />
          </Route>
        </Routes>

        <div
          className={
            mode
              ? "flex flex-col sm:flex-row sm:justify-between bg-black "
              : "flex flex-col sm:flex-row sm:justify-between bg-gray-100 "
          }
        >
          <div>
            <p className="font-medium text-1xl sm:px-0 text-center">
              Ganesh Suryawanshi
            </p>
          </div>
          <hr className="bg-gray-300" />
          <div className="">
            <ul className="flex flex-row justify-between">
              <li className="hidden sm:flex mx-2 ">
                <HashLink className="text-decoration-none" smooth to={"#"}>
                  Home
                </HashLink>
              </li>
              <li className=" sm:hidden mx-2">
                <HashLink className="text-decoration-none" smooth to={"#"}>
                  <HomeIcon />
                </HashLink>
              </li>

              <li className="hidden sm:flex mx-2">
                <HashLink
                  className="text-decoration-none"
                  smooth
                  to={"#Project"}
                >
                  Project
                </HashLink>
              </li>
              <li className="sm:hidden mx-2">
                <HashLink
                  className="text-decoration-none"
                  smooth
                  to={"#Project"}
                >
                  {" "}
                  <DeveloperBoardSharpIcon />{" "}
                </HashLink>
              </li>

              <li className="hidden sm:flex mx-2">
                <HashLink className="text-decoration-none" smooth to={"#Skill"}>
                  Skills
                </HashLink>
              </li>
              <li className="sm:hidden mx-2 ">
                <HashLink className="text-decoration-none" smooth to={"#Skill"}>
                  {" "}
                  <CodeIcon />{" "}
                </HashLink>
              </li>

              <li className="hidden sm:flex mx-2">
                <HashLink className="text-decoration-none" smooth to={"#About"}>
                  About
                </HashLink>
              </li>
              <li className="sm:hidden mx-2">
                <HashLink className="text-decoration-none" smooth to={"#About"}>
                  {" "}
                  <RememberMeIcon />{" "}
                </HashLink>
              </li>

              <li className="hidden mx-2 sm:flex">
                <HashLink
                  className="text-decoration-none"
                  smooth
                  to={"#Contact"}
                >
                  Contact
                </HashLink>
              </li>
              <li className="mx-2 sm:hidden">
                <HashLink
                  className="text-decoration-none"
                  smooth
                  to={"#Contact"}
                >
                  <SendIcon />
                </HashLink>
              </li>

              <li className={mode ? "mx-2 flex pr-10" : "hidden"}>
                {" "}
                <button
                  onClick={() => {
                    setMode(false);
                  }}
                >
                  <LightModeIcon />
                </button>
              </li>
              <li className={mode ? "hidden" : "mx-2 flex pr-10"}>
                {" "}
                <button
                  onClick={() => {
                    setMode(true);
                  }}
                >
                  <NightlightIcon />
                </button>
              </li>
            </ul>
          </div>
        </div>

        <Frontinfo />
        <About />
        <Skills />
        <Project />
        <Qualification />
        <Contact />
      </div>
      <Footer/>
    </>
  );
}

export default App;
