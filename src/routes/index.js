import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

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
    layout: MainLayout,
    component: Login,
    exact: true,
    isProtected: false,
  },
  {
    title: "SignUp",
    description: "",
    path: "/signup",
    layout: MainLayout,
    component: SignUp,
    exact: true,
    isProtected: false,
  },
];
