import React from "react";
import { useStyles } from "./styles";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

function SignUpLayout(props) {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.heading}>
        <img
          className={classes.logo}
          src={
            "https://aerodynamicadvisory.com/wp-content/uploads/2020/06/Linkedin-Logo.png"
          }
        />
        <Typography variant={"h3"}>
          Make the most of your professional life
        </Typography>
      </div>

      <div className={classes.wrapper}>
        <div>
          <div className={classes.cardLayout}>
            {props.children}{" "}
            <div className={classes.linkContainer}>
              <Typography variant={"h6"}>
                Already on LinkedIn?
                <Link component={RouterLink} to="/login" color={"primary"}>
                  Sign in
                </Link>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpLayout;
