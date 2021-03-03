import React, { useContext, useState } from "react";
import Modal from "../Modal";
import { AuthContext } from "../../context/auth/Auth";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import modal from "../Modal";
import ExperienceFields from "../FieldsGroup/ExperienceFields";
import EducationFields from "../FieldsGroup/EducationFields";
import AboutFields from "../FieldsGroup/AboutFields";
import backend from "../../clients/backemd.client";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { useStyles } from "../Card/styles";
import AccordionDetails from "@material-ui/core/AccordionDetails";

function AddProfileMenu(props) {
  const { user, getUser, setExperiences, setEducations } = useContext(
    AuthContext
  );
  const { about } = user;
  const [sections, setSections] = useState({
    about: false,
    experiences: false,
    educations: false,
  });

  const menu = {
    about: {
      component: modal(AboutFields),
      props: {
        title: "About",
        open: sections["about"],
        handleOpen: (bool) => setSections({ ...sections, ["about"]: bool }),

        url: "users/me",
        fields: { about },
        method: "PUT",
        refetch: getUser,
      },
    },
    experiences: {
      component: modal(ExperienceFields),
      props: {
        title: "Experience",
        open: sections["experiences"],
        handleOpen: (bool) =>
          setSections({ ...sections, ["experiences"]: bool }),
        url: "/experiences",
        fields: {
          title: "",
          company: "",
          location: "",
          startDate: new Date(),
          endDate: new Date(),
          role: "",
          description: "",
        },
        method: "POST",
        refetch: async () => {
          try {
            const { data } = await backend.get("/experiences/" + user.id);
            setExperiences(data);
          } catch (e) {
            console.log(e);
          }
        },
      },
    },
    educations: {
      component: modal(EducationFields),
      props: {
        title: "Education",
        url: "/educations",
        open: sections["educations"],
        handleOpen: (bool) =>
          setSections({ ...sections, ["educations"]: bool }),
        fields: {
          title: "",
          school: "",
          location: "",
          startDate: "",
          endDate: "",
          degree: "",
          description: "",
        },
        method: "POST",
        refetch: async () => {
          try {
            const { data } = await backend.get("/educations");
            setEducations(data);
          } catch (e) {
            console.log(e);
          }
        },
      },
    },
  };

  function renderer(config) {
    console.log("config", menu[config], config);
    if (config && typeof menu[config].component !== "undefined") {
      return React.createElement(menu[config].component, {
        ...menu[config].props,
      });
    }
  }
  const classes = useStyles();
  return (
    <Popper
      open={props.open}
      anchorEl={props.anchorEl}
      placement={"bottom-end"}
      transition
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper>
            {Object.keys(menu).map((option, i) => (
              <>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      variant={"body2"}
                      className={classes.title}
                      key={uniqid()}
                    >
                      {menu[option].props.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Button
                        key={i}
                        onClick={() =>
                          setSections({ ...sections, [option]: true })
                        }
                      >
                        {menu[option].props.title}
                      </Button>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </>
            ))}

            {renderer(
              Object.keys(sections).find((section) => sections[section])
            )}
          </Paper>
        </Fade>
      )}
    </Popper>
  );
}

export default AddProfileMenu;
