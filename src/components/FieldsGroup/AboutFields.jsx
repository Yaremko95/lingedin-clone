import React from "react";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";

import ReactQuill from "react-quill";

function AboutFields(props) {
  const classes = useStyles();
  const { fields, onFieldsChange } = props;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ReactQuill
          theme={"bubble"}
          value={fields["about"] || ""}
          onChange={(value) => onFieldsChange({ ...fields, ["about"]: value })}
        />
      </Grid>
    </Grid>
  );
}

export default AboutFields;
