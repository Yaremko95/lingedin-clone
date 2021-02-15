import React, { useContext, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Modal from "../Modal";
import ReactQuill from "react-quill";
import { AuthContext } from "../../context/auth/Auth";
import "react-quill/dist/quill.bubble.css";
function AboutCard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { user, getUser } = useContext(AuthContext);
  const { about } = user;
  return (
    <div className={classes.headingWrapper}>
      <Typography variant={"h3"}>About</Typography>
      <EditOutlinedIcon onClick={() => setOpen(true)} />
      <Modal
        open={open}
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
  );
}

export default AboutCard;
