import React from "react";
import { useStyles } from "./styles";
import Avatar from "@material-ui/core/Avatar";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Grid from "@material-ui/core/Grid";
function ProfileCard(props) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.contentContainer}>
        <Avatar
          className={classes.avatar}
          src={
            "https://media-exp1.licdn.com/dms/image/C4D03AQFt6qjjyo0vAg/profile-displayphoto-shrink_200_200/0/1590862176974?e=1618444800&v=beta&t=6aDM7TdXWzPS9P2_6jh5bdcWu9xclbxtc4eVuCfvo8c"
          }
        />
        <EditOutlinedIcon />
      </div>
      <Grid container className={classes.mainContent}>
        <Grid item xs={7}>
          <Typography variant={"h3"}>Tetiana Yaremko</Typography>
          <Typography variant={"h4"}>Junior Web Developer</Typography>
          <div className={classes.contactInfo}>
            <Typography variant={"h5"}>Opole, Opolske, Poland</Typography>
            <Link component={RouterLink} to="/" variant={"primary"}>
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
