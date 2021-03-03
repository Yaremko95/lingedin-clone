import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import { useStyles } from "./styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import uniqid from "uniqid";
import { AuthContext } from "../../context/auth/Auth";
function NavMeOptions(props) {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
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
          <Avatar className={classes.avatar} src={user.imgUrl} />
          <div className={classes.header}>
            <Typography variant={"h6"}>Tetiana Yaremko</Typography>
            <Typography variant={"body2"}>web developer</Typography>
          </div>
        </div>
        <Button
          variant="outlined"
          color="primary"
          style={{ width: "100%" }}
          onClick={() => props.history.push("profile/me")}
        >
          View Profile
        </Button>
      </div>
      <Divider />
      <div className={classes.container}>
        <Typography variant={"h6"}>Account</Typography>
        {accountLinks.map((link) => (
          <Link to={link.path} className={classes.link} key={uniqid()}>
            <Typography
              variant={"body2"}
              className={classes.title}
              key={uniqid()}
            >
              {link.title}
            </Typography>
          </Link>
        ))}
      </div>
      <Divider />
      <div className={classes.container}>
        <Typography variant={"h6"}>Manage</Typography>
        {manageLinks.map((link) => (
          <Link to={link.path} className={classes.link} key={uniqid()}>
            <Typography
              variant={"body2"}
              className={classes.title}
              key={uniqid()}
            >
              {link.title}
            </Typography>
          </Link>
        ))}
      </div>
      <Divider />
      <div className={classes.container}>
        <Link className={classes.link} to={"/"}>
          <Typography variant={"body2"} className={classes.title}>
            Sign Out
          </Typography>
        </Link>
      </div>
    </div>
  );
}

export default withRouter(NavMeOptions);
