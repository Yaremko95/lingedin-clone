import React from "react";
import { useStyles } from "./styles";
import Badge from "@material-ui/core/Badge";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
function NavLink(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const {
    icon: Icon,
    title,
    menu: Menu,
    options,
    avatar,
    badgeContent,
  } = props;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
  };
  return (
    <div className={classes.container} onClick={options && handleClick}>
      {!avatar ? (
        <Badge badgeContent={badgeContent} color={"secondary"}>
          <Icon className={classes.icon} />
        </Badge>
      ) : (
        <Avatar
          className={classes.avatar}
          src={
            "https://media-exp1.licdn.com/dms/image/C4D03AQFt6qjjyo0vAg/profile-displayphoto-shrink_200_200/0/1590862176974?e=1618444800&v=beta&t=6aDM7TdXWzPS9P2_6jh5bdcWu9xclbxtc4eVuCfvo8c"
          }
        />
      )}
      <div className={classes.titleWrapper}>
        <Typography className={classes.title}>{title}</Typography>{" "}
        {props.options && <ArrowDropDownIcon />}
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement={"bottom-end"}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <Menu />
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    </div>
  );
}

export default NavLink;
