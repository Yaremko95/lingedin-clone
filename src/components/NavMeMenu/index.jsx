import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { useStyles } from "./styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

function NavMeOptions(props) {
  const classes = useStyles();
  const accountLinks = [
    { title: "Settings & Privacy", path: "/" },
    { title: "Help", path: "/" },
    { title: "Language", path: "/" },
  ];
  const manageLinks = [
    { title: "Posts & Activity", path: "/" },
    { title: "Job Posting Account", path: "/" },
  ];
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.profileContent}>
          <Avatar
            className={classes.avatar}
            src={
              "https://media-exp1.licdn.com/dms/image/C4D03AQFt6qjjyo0vAg/profile-displayphoto-shrink_200_200/0/1590862176974?e=1618444800&v=beta&t=6aDM7TdXWzPS9P2_6jh5bdcWu9xclbxtc4eVuCfvo8c"
            }
          />
          <div className={classes.header}>
            <Typography variant={"h6"}>Tetiana Yaremko</Typography>
            <Typography variant={"body2"}>web developer</Typography>
          </div>
        </div>
        <Button variant="outlined" color="primary" style={{ width: "100%" }}>
          View Profile
        </Button>
      </div>
      <Divider />
      <div className={classes.container}>
        <Typography variant={"h6"}>Account</Typography>
        {accountLinks.map((link) => (
          <Link to={link.path} className={classes.link}>
            <Typography variant={"body2"} className={classes.title}>
              {link.title}
            </Typography>
          </Link>
        ))}
      </div>
      <Divider />
      <div className={classes.container}>
        <Typography variant={"h6"}>Manage</Typography>
        {manageLinks.map((link) => (
          <Link to={link.path} className={classes.link}>
            <Typography variant={"body2"} className={classes.title}>
              {link.title}
            </Typography>
          </Link>
        ))}
      </div>
      <Divider />
      <div className={classes.container}>
        <Link className={classes.link}>
          <Typography variant={"body2"} className={classes.title}>
            Sign Out
          </Typography>
        </Link>
      </div>
    </div>
  );
}

export default NavMeOptions;
