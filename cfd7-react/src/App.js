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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './assets/custom.css'

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Nav/>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/khoa-hoc/:slug" component={CourseDetail} />
        <Route path="/faq" component={FaQ} />
        <Route path="/coin" component={IntroduceCoin} />
        <Route path="/hop-tac" component={Cooperation} />
        <Route path="/khoa-hoc" component={Courses} />
        <Route path="/thong-tin-ca-nhan" component={Profile} />
        <Route path="/du-an" component={Projects} />
        <Route path="/dang-ki" component={Register} />
        <Route path="/thanh-toan" component={Pay} />
        <Route path="/team" component={Team} />
        <Route  component={Page404} />
      </Switch>
      <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
