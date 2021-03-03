import React from "react";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { PhotoCamera } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ReactQuill from "react-quill";

function EducationFields(props) {
  const classes = useStyles();
  const { fields, file, onFieldsChange, onFileChange } = props;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {" "}
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="icon-button-file"
          type="file"
          onChange={(e) => onFileChange(e.target.files[0])}
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={fields["school"] || ""}
          label={"School"}
          variant="outlined"
          size={"small"}
          InputLabelProps={{
            shrink: true,
          }}
          margin="dense"
          focused
          // className={classes.mt24}
          onChange={(e) =>
            onFieldsChange({
              ...fields,
              ["school"]: e.currentTarget.value,
            })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={fields["degree"] || ""}
          label={"degree"}
          variant="outlined"
          size={"small"}
          InputLabelProps={{
            shrink: true,
          }}
          margin="dense"
          // className={classes.mt24}
          onChange={(e) =>
            onFieldsChange({
              ...fields,
              ["degree"]: e.currentTarget.value,
            })
          }
        />
      </Grid>

      <Grid item xs={6}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          {" "}
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Start Date"
            value={
              fields.startDate === null
                ? new Date()
                : new Date(fields.startDate)
            }
            onChange={(value) =>
              onFieldsChange({ ...fields, ["startDate"]: value })
            }
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={6}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          {" "}
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="End Date"
            value={
              fields.endDate === null ? new Date() : new Date(fields.startDate)
            }
            onChange={(value) =>
              onFieldsChange({ ...fields, ["endDate"]: value })
            }
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>

      <Grid item xs={12}>
        <ReactQuill
          theme={"bubble"}
          value={fields["description"] || ""}
          onChange={(value) =>
            onFieldsChange({ ...fields, ["description"]: value })
          }
        />
      </Grid>
    </Grid>
  );
}

export default EducationFields;
