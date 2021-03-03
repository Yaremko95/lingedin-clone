import React, { useContext, useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Modal from "../Modal";
import ReactQuill from "react-quill";
import { AuthContext } from "../../context/auth/Auth";
import "react-quill/dist/quill.bubble.css";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import AboutFields from "../FieldsGroup/AboutFields";
import modal from "../Modal";
function AboutCard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const { getUser } = props;
  const { about } = props.user;
  useEffect(() => {
    setSeeMore(false);
  }, [about]);
  const AboutModal = modal(AboutFields);
  return (
    <>
      <div className={classes.headingWrapper}>
        <Typography variant={"h3"}>About</Typography>
        {props.user.authorized && (
          <EditOutlinedIcon onClick={() => setOpen(true)} />
        )}

        <AboutModal
          open={open}
          s
          handleOpen={setOpen}
          fields={{ about }}
          method={"PUT"}
          url={"/users/me"}
          title={"Edit About"}
          refetch={getUser}
        />
      </div>
      <div className={classes.aboutContainer}>
        <Collapse in={seeMore} collapsedHeight={60}>
          <div
            dangerouslySetInnerHTML={{ __html: about }}
            className={classes.aboutText}
          />
        </Collapse>
        <span
          className={`${classes.seeMoreBtn} ${
            !seeMore ? "positionRight" : "positionLeft"
          }`}
          onClick={() => setSeeMore(!seeMore)}
        >
          {seeMore ? "See less" : "...See more"}
        </span>
      </div>
    </>
  );
}

export default AboutCard;
