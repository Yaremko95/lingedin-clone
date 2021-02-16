import React, { useContext, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Modal from "../Modal";
import ReactQuill from "react-quill";
import { AuthContext } from "../../context/auth/Auth";
import "react-quill/dist/quill.bubble.css";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
function AboutCard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const { getUser } = useContext(AuthContext);
  const { about } = props.user;
  return (
    <>
      <div className={classes.headingWrapper}>
        <Typography variant={"h3"}>About</Typography>
        <EditOutlinedIcon onClick={() => setOpen(true)} />

        <Modal
          open={open}
          s
          handleOpen={setOpen}
          fields={{ about }}
          method={"PUT"}
          url={"/users/me"}
          title={"Edit About"}
          refetch={getUser}
        >
          {({ fields, onFieldsChange }) => (
            <div className={classes.quillContainer}>
              {Object.keys(fields).map((field, i) => (
                <ReactQuill
                  key={i}
                  theme={"bubble"}
                  value={fields[field] || ""}
                  onChange={(value) =>
                    onFieldsChange({ ...fields, [field]: value })
                  }
                />
              ))}
            </div>
          )}
        </Modal>
      </div>
      <div className={classes.aboutContainer}>
        <Collapse in={seeMore} collapsedHeight={60}>
          <div
            dangerouslySetInnerHTML={{ __html: about }}
            className={classes.aboutText}
          />
        </Collapse>
        <span
          className={classes.seeMoreBtn}
          onClick={() => setSeeMore(!seeMore)}
        >
          {seeMore ? "See less" : "...See more"}
        </span>
      </div>
    </>
  );
}

export default AboutCard;
