import { Header, Nav, Footer } from "./components/index.js"
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
import { createContext, useState } from "react";
import LoginModal from "./components/LoginModal/index.jsx";
import PrivateRoute from "./components/PrivateRoute/index.jsx";
import authServices from "./services/authServices.js";
import { useSelector } from "react-redux";
import store from "./store/index.js";

export const Context = createContext();



function App() {
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem('login')));
  // const [openLogin, setOpenLogin] = useState(false);
  const [loginError, setLoginError] = useState()

  // const togglePopup = (flag) => {
  //   if (!flag) {
  //     setOpenLogin(!openLogin)
  //   } else {
  //     setOpenLogin(flag)
  //   }

  // }
  const {user,openLogin} = useSelector(store=>store.auth)
  console.log(`openLogin`, openLogin)
  // const login = async (user) => {
  //   try {
  //     let res = await authServices.login(user)
  //     if (res.data) {
  //       // setUser(res.data);
  //       localStorage.setItem('login', JSON.stringify({
  //         ...res.data,
  //         name: res.data.first_name + " " + res.data.last_name
  //       }));
  //       setUser(localStorage.getItem('login'))
  //       localStorage.setItem('token', JSON.stringify(res.data.token));
  //       togglePopup(false);
  //     } else {

  //       setLoginError(res.error)
  //     }

  //   }
  //   catch (err) {
  //     console.log(`login`, err)
  //   }
  //   // .then(res=>res.json())
  //   // .then(res=>{
  //   //   console.log(res)
  //   // })
  // }

  // const login = (user) => {



  //   const userLogin =({
  //     ...user,
  //     name: "Nguyễn Văn A"
  //   })
  //   localStorage.setItem('login',JSON.stringify(userLogin));
  //   setUser(userLogin)
  // }

  // const logout = () => {
  //   setUser(null)
  //   localStorage.removeItem('login')

  // }

  // console.log("user", user)

  return (
    <div className="App">
      <Router>
        <Context.Provider value={{    loginError }}>
          <Header />
          <Nav />
          {
            !user && <LoginModal />
          }
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/khoa-hoc/:slug" component={CourseDetail} />
            <Route path="/faq" component={FaQ} />
            <Route path="/coin" component={IntroduceCoin} />
            <Route path="/hop-tac" component={Cooperation} />
            <Route path="/khoa-hoc" component={Courses} />
            <PrivateRoute path="/thong-tin-ca-nhan" component={Profile} />
            <Route path="/du-an" component={Projects} />
            <Route path="/dang-ki/:slug" component={Register} />
            <Route path="/thanh-toan" component={Pay} />
            <Route path="/team" component={Team} />
            <Route component={Page404} />
          </Switch>
          <Footer />
        </Context.Provider>
      </Router>

    </div>
  );
}

export default App;
