import React from "react";
import { useStyles } from "./styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
function Member(props) {
  const classes = useStyles();

  const { user } = props;
  return (
    <div className={classes.container}>
      <Link component={RouterLink} to={"/profile/" + user.id}>
        <Avatar className={classes.avatar} src={user.imgUrl} />
      </Link>

      <div className={classes.detailsContainer}>
        <Link component={RouterLink} to={"/profile/" + user.id}>
          <Typography className={classes.fullName}>{user.fullName}</Typography>
        </Link>
        <div className={classes.module}>
          <Typography className={classes.role}>{user.role}</Typography>
        </div>
      </div>
    </div>
  );
}

export default Member;
