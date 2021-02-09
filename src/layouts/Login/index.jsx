import React from "react";
import { useStyles } from "./styles";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
function LoginLayout(props) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div>
        <img
          className={classes.logo}
          src={
            "https://aerodynamicadvisory.com/wp-content/uploads/2020/06/Linkedin-Logo.png"
          }
        />
        <div className={classes.cardLayout}>
          <Typography variant={"h3"}>Sign In</Typography>
          <Typography variant={"h6"}>
            Stay updated on your professional world
          </Typography>
          {props.children}
        </div>
        <div className={classes.linkContainer}>
          <Typography variant={"h6"}>
            New to LinkedIn?{" "}
            <Link component={RouterLink} to="/signup" color={"primary"}>
              Join Now
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default LoginLayout;
