import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./styles";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Avatar from "@material-ui/core/Avatar";

function ProfileFieldsGroup(props) {
  const classes = useStyles();
  const { fields, file, onFieldsChange, onFileChange } = props;
  console.log(fields["country"]);
  return (
    <Grid container spacing={2} className={classes.container}>
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
          {/*<IconButton*/}
          {/*  color="primary"*/}
          {/*  aria-label="upload picture"*/}
          {/*  // component="span"*/}
          {/*>*/}
          <Avatar src={fields.imgUrl} className={classes.avatar} />
          {/*</IconButton>*/}
        </label>
      </Grid>
      <Grid item xs={6}>
        <TextField
          value={fields["name"] || ""}
          label={"Name"}
          variant="outlined"
          size={"small"}
          InputLabelProps={{
            shrink: true,
          }}
          borderRadius={0}
          margin="dense"
          focused
          // className={classes.mt24}
          onChange={(e) =>
            onFieldsChange({
              ...fields,
              ["name"]: e.currentTarget.value,
            })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          value={fields["surname"] || ""}
          label={"Surname"}
          variant="outlined"
          size={"small"}
          InputLabelProps={{
            shrink: true,
          }}
          borderRadius={0}
          margin="dense"
          // className={classes.mt24}
          onChange={(e) =>
            onFieldsChange({
              ...fields,
              ["surname"]: e.currentTarget.value,
            })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={fields["role"]}
          label={"Headline"}
          variant="outlined"
          size={"small"}
          InputLabelProps={{
            shrink: true,
          }}
          borderRadius={0}
          margin="dense"
          // className={classes.mt24}
          onChange={(e) =>
            onFieldsChange({
              ...fields,
              ["role"]: e.currentTarget.value,
            })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          value={fields["country"]}
          label={"Country"}
          variant="outlined"
          size={"small"}
          InputLabelProps={{
            shrink: true,
          }}
          borderRadius={0}
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
      <Grid item xs={6}>
        <TextField
          value={fields["city"]}
          label={"City"}
          variant="outlined"
          size={"small"}
          InputLabelProps={{
            shrink: true,
          }}
          borderRadius={0}
          margin="dense"
          // className={classes.mt24}
          onChange={(e) =>
            onFieldsChange({
              ...fields,
              ["city"]: e.currentTarget.value,
            })
          }
        />
      </Grid>
    </Grid>
  );
}

export default ProfileFieldsGroup;
