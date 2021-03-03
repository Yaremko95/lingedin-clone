import React, { useContext, useState } from "react";
import "date-fns";
import { useStyles } from "./styles";
import Avatar from "@material-ui/core/Avatar";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Grid from "@material-ui/core/Grid";
import modal from "../Modal";
import { AuthContext, useAuth } from "../../context/auth/Auth";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import AddProfileMenu from "../AddProfileMenu";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import ProfileFieldsGroup from "../FieldsGroup/ProfileFields";
function ProfileCard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [menuAnchorEl, setAnchorEl] = React.useState(null);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const handleModalOpen = (open, i) => {
    setIndex(i);
    setOpen(open);
  };
  const handleMenuPopper = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu((prev) => !prev);
  };
  const { user: authorizedUser, getUser } = useAuth();
  const { user } = props;
  const { name, surname, country, city, role, about, imgUrl } = authorizedUser;

  const ProfileModal = modal(ProfileFieldsGroup);
  return (
    <div className={classes.wrapper}>
      <ProfileModal
        open={open}
        handleOpen={setOpen}
        title={"Intro"}
        url={"users/me"}
        fields={{ name, surname, country, city, role, about, imgUrl }}
        method={"PUT"}
        refetch={getUser}
      />
      {/*<Modal*/}
      {/*  open={open}*/}
      {/*  handleOpen={setOpen}*/}
      {/*  {...menu[index]}*/}
      {/*  refetch={getUser}*/}
      {/*>*/}
      {/*  {({ fields, onFieldsChange, file, onFileChange }) => (*/}
      {/*    <>*/}
      {/*      {Object.keys(fields).map((field, i) =>*/}
      {/*        field === "description" ? (*/}
      {/*          <ReactQuill*/}
      {/*            key={i}*/}
      {/*            theme={"bubble"}*/}
      {/*            value={fields[field] || ""}*/}
      {/*            onChange={(value) =>*/}
      {/*              onFieldsChange({ ...fields, [field]: value })*/}
      {/*            }*/}
      {/*          />*/}
      {/*        ) : field === "startDate" || field === "endDate" ? (*/}
      {/*<MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
      {/*  {" "}*/}
      {/*  <KeyboardDatePicker*/}
      {/*    disableToolbar*/}
      {/*    variant="inline"*/}
      {/*    format="MM/dd/yyyy"*/}
      {/*    margin="normal"*/}
      {/*    id="date-picker-inline"*/}
      {/*    label="Date picker inline"*/}
      {/*    value={new Date()}*/}
      {/*    onChange={(value) => onFieldsChange({ ...fields, [field]: value })}*/}
      {/*    KeyboardButtonProps={{*/}
      {/*      "aria-label": "change date",*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</MuiPickersUtilsProvider>*/}
      {/*        ) : (*/}
      {/*          <TextField*/}
      {/*            value={fields[field] || ""}*/}
      {/*            key={i}*/}
      {/*            label={field}*/}
      {/*            variant="outlined"*/}
      {/*            size={"small"}*/}
      {/*            InputLabelProps={{*/}
      {/*              shrink: true,*/}
      {/*            }}*/}
      {/*            borderRadius={0}*/}
      {/*            margin="dense"*/}
      {/*            focused={i === 0}*/}
      {/*            // className={classes.mt24}*/}
      {/*            onChange={(e) =>*/}
      {/*              onFieldsChange({*/}
      {/*                ...fields,*/}
      {/*                [field]: e.currentTarget.value,*/}
      {/*              })*/}
      {/*            }*/}
      {/*          />*/}
      {/*        )*/}
      {/*      )}*/}
      {/*<input*/}
      {/*  accept="image/*"*/}
      {/*  className={classes.input}*/}
      {/*  id="icon-button-file"*/}
      {/*  type="file"*/}
      {/*  onChange={(e) => onFileChange(e.target.files[0])}*/}
      {/*/>*/}
      {/*<label htmlFor="icon-button-file">*/}
      {/*  <IconButton*/}
      {/*    color="primary"*/}
      {/*    aria-label="upload picture"*/}
      {/*    component="span"*/}
      {/*  >*/}
      {/*    <PhotoCamera />*/}
      {/*  </IconButton>*/}
      {/*</label>*/}
      {/*    </>*/}
      {/*  )}*/}
      {/*</Modal>*/}
      <div className={classes.contentContainer}>
        <Avatar className={classes.avatar} src={user.imgUrl} />
        {user.authorized && (
          <EditOutlinedIcon onClick={() => handleModalOpen(true, 0)} />
        )}
      </div>
      <Grid container className={classes.mainContent}>
        <Grid item xs={7}>
          <Typography variant={"h3"}>{user.fullName}</Typography>
          <Typography variant={"h4"}>{user.role}</Typography>
          <div className={classes.contactInfo}>
            <Typography variant={"h5"}>Opole, Opolske, Poland</Typography>
            <Link component={RouterLink} to="/" color={"primary"}>
              304 connections
            </Link>
            <Link component={RouterLink} to="/">
              Contact Info
            </Link>
          </div>
          {user.authorized && (
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
                onClick={handleMenuPopper}
              >
                Add profile section
              </Button>
              <AddProfileMenu
                open={openMenu}
                anchorEl={menuAnchorEl}
                // menu={menu}
                // handleModalOpen={handleModalOpen}
              />
              <Button variant="outlined" endIcon={<ArrowDropDownIcon />}>
                More...
              </Button>
            </div>
          )}
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
