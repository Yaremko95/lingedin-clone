import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Typography from "@material-ui/core/Typography";
import backend from "../../clients/backemd.client";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";
function Modal(props) {
  const classes = useStyles();
  const { open, handleOpen, title, method, url, refetch } = props;
  const [fields, setFields] = useState(props.fields);
  const [file, setFile] = useState(null);
  const submit = async () => {
    try {
      const fd = new FormData();
      for (let field in fields) {
        fd.append(field, fields[field]);
      }
      if (file) fd.append("image", file);
      let result;
      if (method === "POST") {
        result = await backend.post(url, fd);
      } else {
        result = await backend.put(url, fd);
      }
      if (result.status === 200) {
        handleOpen(false);
        refetch();
      }
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };
  const getStateAndHelpers = () => ({
    fields: fields,
    file: file,
    onFieldsChange: setFields,
    onFileChange: setFile,
  });

  return (
    <Dialog
      open={open}
      onClose={() => handleOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={classes.dialogCard}
    >
      {" "}
      <DialogTitle disableTypography>{title}</DialogTitle>
      <DialogContent>{props.children(getStateAndHelpers())}</DialogContent>
      <DialogActions>
        <Button variant={"contained"} color={"primary"} onClick={submit}>
          {method === "POST" ? "Add" : "Edit"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Modal;
