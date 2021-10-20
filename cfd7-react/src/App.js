import {Header,Nav,Footer}from "./components/index.js"
import Cooperation from "./pages/Cooperation/index.jsx";
import CourseDetail from "./pages/CourseDetail/index.jsx";
import FaQ from "./pages/FaQ/index.jsx";
import Home from "./pages/Home";
import IntroduceCoin from "./pages/IntroduceCoin/index.jsx";
import Page404 from "./pages/Page404/index.jsx";
import Courses from "./pages/Courses/index.jsx"
import Profile from "./pages/Profile/index.jsx";
import Projects from "./pages/Projects/index.jsx";
import Register from "./pages/Register/index.jsx";
import Pay from "./pages/Pay/index.jsx";
import Team from "./pages/Team/index.jsx";

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      {/* <Home/> */}
      {/* <Page404/> */}
      {/* <CourseDetail /> */}
      {/* <FaQ /> */}
      {/* <IntroduceCoin /> */}
      {/* <Cooperation /> */}
      {/* <Courses/> */}
      {/* <Profile /> */}
      {/* <Projects /> */}
      {/* <Register /> */}
      {/* <Pay /> */}
      <Team />
      <Footer/>
    </div>
  );
}

export default App;
