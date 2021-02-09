import React, { useContext, useState } from "react";
import { useStyles } from "./styles";
import Avatar from "@material-ui/core/Avatar";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Grid from "@material-ui/core/Grid";
import Modal from "../Modal";
import { AuthContext } from "../../context/Auth";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
function ProfileCard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { user, isAuthorized, getUser } = useContext(AuthContext);

  const { name, surname, country, city, role } = user;
  return (
    <div className={classes.wrapper}>
      <Modal
        open={open}
        handleOpen={setOpen}
        fields={{ name, surname, country, city, role }}
        method={"PUT"}
        url={"/users/me"}
        title={"Edit Intro"}
        refetch={getUser}
      >
        {({ fields, onFieldsChange, file, onFileChange }) => (
          <>
            {Object.keys(fields).map((field, i) => (
              <TextField
                value={fields[field] || ""}
                key={i}
                label={field}
                variant="outlined"
                focused={i === 0}
                // className={classes.mt24}
                onChange={(e) =>
                  onFieldsChange({ ...fields, [field]: e.currentTarget.value })
                }
              />
            ))}
            <input
              accept="image/*"
              className={classes.input}
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
          </>
        )}
      </Modal>
      <div className={classes.contentContainer}>
        <Avatar className={classes.avatar} src={user.imgUrl} />
        <EditOutlinedIcon onClick={() => setOpen(true)} />
      </div>
      <Grid container className={classes.mainContent}>
        <Grid item xs={7}>
          <Typography variant={"h3"}>Tetiana Yaremko</Typography>
          <Typography variant={"h4"}>Junior Web Developer</Typography>
          <div className={classes.contactInfo}>
            <Typography variant={"h5"}>Opole, Opolske, Poland</Typography>
            <Link component={RouterLink} to="/" color={"primary"}>
              304 connections
            </Link>
            <Link component={RouterLink} to="/">
              Contact Info
            </Link>
          </div>
          <div className={classes.buttonsContainer}>
            <Button
              variant="contained"
              color={"primary"}
              endIcon={<ArrowDropDownIcon />}
            >
              Open to
            </Button>
            <Button
              variant="outlined"
              color={"primary"}
              endIcon={<ArrowDropDownIcon />}
            >
              Add profile section
            </Button>
            <Button variant="outlined" endIcon={<ArrowDropDownIcon />}>
              More...
            </Button>
          </div>
        </Grid>
        <Grid item xs={5}>
          <div className={classes.eduInfo}>
            <img
              className={classes.eduLogo}
              src={
                "https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1620864000&v=beta&t=lfZ6Bs_Aw4MwPY7nrtwDe_wu_jeepi7j9tjSUllZRqc"
              }
            />
            <Link color={"textPrimary"}>Strive School</Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfileCard;
