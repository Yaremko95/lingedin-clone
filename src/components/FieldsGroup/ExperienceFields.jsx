import React from "react";
import "date-fns";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { PhotoCamera } from "@material-ui/icons";
import ReactQuill from "react-quill";
import { format, compareAsc } from "date-fns";
import "react-quill/dist/quill.bubble.css";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
function ExperienceFields(props) {
  const classes = useStyles();
  const { fields, file, onFieldsChange, onFileChange } = props;
  console.log(fields);
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
          value={fields["title"] || ""}
          label={"Title"}
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
              ["title"]: e.currentTarget.value,
            })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={fields["company"] || ""}
          label={"Company"}
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
              ["company"]: e.currentTarget.value,
            })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={fields["location"]}
          label={"Location"}
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
              ["location"]: e.currentTarget.value,
            })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="datetime-local"
          label="Start date"
          type="date"
          value={format(new Date(fields.startDate), "yyyy-MM-dd")}
          onChange={(e) =>
            onFieldsChange({
              ...fields,
              ["startDate"]: e.currentTarget.value,
            })
          }
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        {/*<MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
        {/*  {" "}*/}
        {/*  <Grid container>*/}
        {/*<KeyboardDatePicker*/}
        {/*  disableToolbar*/}
        {/*  variant="inline"*/}
        {/*  format="MM/dd/yyyy"*/}
        {/*  margin="normal"*/}
        {/*  id="date-picker-inline"*/}
        {/*  label="Start Date"*/}
        {/*  value={new Date(fields.startDate)}*/}
        {/*  onChange={(value) =>*/}
        {/*    onFieldsChange({ ...fields, ["startDate"]: value })*/}
        {/*  }*/}
        {/*  KeyboardButtonProps={{*/}
        {/*    "aria-label": "change date",*/}
        {/*  }}*/}
        {/*/>*/}
        {/*</Grid>*/}
        {/*</MuiPickersUtilsProvider>*/}
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="datetime-local"
          label="End date"
          type="date"
          value={new Date(fields.endDate)}
          onChange={(value) =>
            onFieldsChange({ ...fields, ["endDate"]: value })
          }
          InputLabelProps={{
            shrink: true,
          }}
        />
        {/*<MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
        {/*  <Grid container>*/}
        {/*<KeyboardDatePicker*/}
        {/*  disableToolbar*/}
        {/*  variant="inline"*/}
        {/*  format="MM/dd/yyyy"*/}
        {/*  margin="normal"*/}
        {/*  id="date-picker-inline"*/}
        {/*  label="End Date"*/}
        {/*  value={*/}
        {/*    fields.endDate === null ? new Date() : new Date(fields.startDate)*/}
        {/*  }*/}
        {/*  onChange={(value) =>*/}
        {/*    onFieldsChange({ ...fields, ["endDate"]: value })*/}
        {/*  }*/}
        {/*  KeyboardButtonProps={{*/}
        {/*    "aria-label": "change date",*/}
        {/*  }}*/}
        {/*/>*/}
      </Grid>
      {/*  </MuiPickersUtilsProvider>*/}
      {/*</Grid>*/}
      <Grid item xs={12}>
        <TextField
          value={fields["country"]}
          label={"Country"}
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
              ["country"]: e.currentTarget.value,
            })
          }
        />
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

export default ExperienceFields;
