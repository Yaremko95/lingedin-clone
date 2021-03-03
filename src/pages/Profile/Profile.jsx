import React, { useContext, useEffect, useState } from "react";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "../../components/Card";
import ProfileCard from "../../components/ProfileCard";
import AboutCard from "../../components/AboutCard";
import { AuthContext, useAuth } from "../../context/auth/Auth";
import { withRouter } from "react-router-dom";
import backend from "../../clients/backemd.client";
import Typography from "@material-ui/core/Typography";
import Member from "../../components/Member";
import ExperienceCard from "../../components/ExperiencesCard";
function Profile(props) {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const { user: authorizedUser } = useAuth();
  const { userId } = props.match.params;
  const getUser = React.useCallback(async () => {
    try {
      const { data } = await backend.get("/users/" + userId);
      const { experiences, education, ...rest } = data;
      setUser({
        ...rest,
        authorized: userId === "me" || authorizedUser.id === parseInt(userId),
      });
    } catch (e) {
      console.log(e);
    }
  }, []);
  useEffect(() => {
    if (userId === "me" || authorizedUser.id === parseInt(userId)) {
      setUser({ ...authorizedUser, authorized: true });
    } else {
      (async () => {
        try {
          const { data } = await backend.get("/users/" + userId);

          setUser({ ...data, authorized: false });
        } catch (e) {
          console.log(e);
        }
      })();
    }
    // getUser();
  }, [userId, authorizedUser]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await backend.get("/users");
        setUsers(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Card>
            <ProfileCard user={user} getUser={getUser} />
          </Card>
          {user.about && (
            <Card padding>
              <AboutCard user={user} getUser={getUser} />
            </Card>
          )}
          <Card padding>
            <ExperienceCard user={user} />
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper>Hello</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>Hello</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.cardContainer}>
                <Typography variant={"h4"} className={classes.title}>
                  People also viewed
                </Typography>
                {users.map((user) => (
                  <Member user={user} key={user.id} />
                ))}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(Profile);
