import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./styles";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Collapse from "@material-ui/core/Collapse";
import format from "date-fns/format";
import Divider from "@material-ui/core/Divider";
function Background(props) {
  const { experience } = props;
  const classes = useStyles();
  console.log("!!!!");
  return (
    <div className={classes.wrapper}>
      <div style={{ display: "flex" }}>
        <img
          className={classes.img}
          src={
            "https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1620864000&v=beta&t=lfZ6Bs_Aw4MwPY7nrtwDe_wu_jeepi7j9tjSUllZRqc"
          }
        />
        <div>
          <Typography variant={"h4"} className={classes.title}>
            {experience.title}
          </Typography>
          <p className={classes.company}>{experience.company}</p>
          <p className={classes.date}>{`${format(
            new Date(experience.startDate),
            "PP"
          )} - ${
            experience.endDate
              ? format(new Date(experience.endDate), "PP")
              : "Present"
          }`}</p>
          <div
            dangerouslySetInnerHTML={{ __html: experience.description }}
            className={classes.description}
            style={{ color: "rgba(0,0, 0, 0.7)" }}
          />
        </div>
      </div>
      <EditOutlinedIcon
        onClick={() =>
          props.handleModalOpen(
            {
              method: "PUT",
              url: "/experiences/" + experience.id,
              title: "Edit Experience",
            },
            experience
          )
        }
      />
    </div>
  );
}

export default Background;
