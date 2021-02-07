import React from "react";
import { useStyles } from "./styles";
import NavSearch from "../NavSearch";

import NavLink from "../NavLink";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import WorkIcon from "@material-ui/icons/Work";
import TextsmsIcon from "@material-ui/icons/Textsms";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import NavMeMenu from "../NavMeMenu";

function NavBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.contentWrapper}>
        <div className={classes.content}>
          <img
            className={classes.logo}
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
          />
          <NavSearch />
        </div>
        <div className={classes.content}>
          <NavLink title={"Home"} icon={HomeIcon} />
          <NavLink title={"My Network"} icon={PeopleIcon} badgeContent={30} />
          <NavLink title={"Jobs"} icon={WorkIcon} />
          <NavLink title={"Messaging"} icon={TextsmsIcon} badgeContent={2} />
          <NavLink
            title={"Notifications"}
            icon={NotificationsIcon}
            badgeContent={6}
          />
          <NavLink title={"Me"} options avatar menu={NavMeMenu} />
          <NavLink title={"Work"} icon={AppsIcon} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
