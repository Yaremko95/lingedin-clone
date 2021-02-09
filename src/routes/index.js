import MainLayout from "../layouts/Main/MainLayout";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import LoginLayout from "../layouts/Login";
import SignUpLayout from "../layouts/SignUp";

export default [
  {
    title: "Home",
    description: "",
    path: "/",
    layout: MainLayout,
    component: Home,
    exact: true,
    isProtected: true,
  },
  {
    title: "Profile",
    description: "",
    path: "/profile/:userId",
    layout: MainLayout,
    component: Profile,
    exact: true,
    isProtected: true,
  },
  {
    title: "Login",
    description: "",
    path: "/login",
    layout: LoginLayout,
    component: Login,
    exact: true,
    isProtected: false,
  },
  {
    title: "SignUp",
    description: "",
    path: "/signup",
    layout: SignUpLayout,
    component: SignUp,
    exact: true,
    isProtected: false,
  },
];
