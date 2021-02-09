import React, { useContext } from "react";
import Modal from "../Modal";
import { AuthContext } from "../../context/Auth";

function AddProfileMenu(props) {
  const { user, isAuthorized, getUser } = useContext(AuthContext);

  const { name, surname, country, city, role, about } = user;
  const menu = [
    {
      title: "Intro",
      url: "users/me",
      fields: { name, surname, country, city, role },
      method: "PUT",
      refetch: getUser,
    },
    {
      title: "About",
      url: "users/me",
      fields: { about },
      method: "POST",
      refetch: getUser,
    },
    {
      title: "Experience",
      url: "/experiences",
      fields: {
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        role: "",
        description: "",
      },
      method: "POST",
      refetch: async function () {},
    },
    {
      title: "Education",
      url: "/educations",
      fields: {
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        role: "",
        description: "",
      },
      method: "POST",
      refetch: getUser,
    },
  ];
  return <div></div>;
}

export default AddProfileMenu;
