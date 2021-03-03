import React, { useContext, useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import Modal from "../Modal";
import ReactQuill from "react-quill";
import { useStyles } from "./styles";
import { AuthContext, useAuth } from "../../context/auth/Auth";
import Background from "../Background";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import backend from "../../clients/backemd.client";
import { withRouter } from "react-router-dom";
import modal from "../Modal";
import ExperienceFields from "../FieldsGroup/ExperienceFields";
function ExperienceCard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [modalProps, setModalProps] = useState({
    method: "POST",
    url: "/experiences/",
    title: "Add Experience",
  });
  const [fields, setFields] = useState({
    title: "",
    company: "",
    location: "",
    startDate: new Date(),
    endDate: new Date(),
    role: "",
    description: "",
  });
  const { user } = props;

  const getExperiences = async () => {
    try {
      const { data } = await backend.get(
        userId === "me"
          ? "/experiences/" + authorizedUser.id
          : "/experiences/" + userId
      );
      setExperiences(data || []);
    } catch (e) {
      console.log(e);
    }
  };
  const { userId } = props.match.params;
  const { user: authorizedUser, experiences: authExperiences } = useAuth();
  useEffect(() => {
    getExperiences();
  }, [user, authExperiences]);
  // useEffect(() => {
  //   getExperiences();
  // }, []);
  const handleModalOpen = (modalProps, fields) => {
    setModalProps(modalProps);
    setFields(fields);
    setOpen(true);
  };
  const ExperienceModal = modal(ExperienceFields);
  return (
    <>
      <div className={classes.headingWrapper}>
        <Typography variant={"h3"}>Experiences</Typography>
        {props.user.authorized && <AddIcon onClick={() => setOpen(true)} />}

        <ExperienceModal
          open={open}
          handleOpen={setOpen}
          fields={fields}
          {...modalProps}
          refetch={getExperiences}
        />
      </div>
      {experiences.map((experience, index) => (
        <Background
          experience={experience}
          key={index}
          handleModalOpen={handleModalOpen}
        />
      ))}
    </>
  );
}

export default withRouter(ExperienceCard);
