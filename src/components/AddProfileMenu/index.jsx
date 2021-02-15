import React, { useContext } from "react";
import Modal from "../Modal";
import { AuthContext } from "../../context/auth/Auth";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function AddProfileMenu(props) {
  const { user, getUser } = useContext(AuthContext);

  const { name, surname, country, city, role, about } = user;

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
            {props.menu.map((option, i) => (
              <Button key={i} onClick={() => props.handleModalOpen(true, i)}>
                {option.title}
              </Button>
            ))}
          </Paper>
        </Fade>
      )}
    </Popper>
  );
}

export default AddProfileMenu;
