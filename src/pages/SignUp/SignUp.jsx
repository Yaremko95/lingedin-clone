import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FcGoogle } from "react-icons/fc";
import uniqid from "uniqid";
import backend from "../../clients/backemd.client";
const BreakLine = () => {
  const classes = useStyles();
  return (
    <div className={classes.lineContainer}>
      <div className={classes.line}></div>
      <span className={classes.orSpan}>OR</span>
      <div className={classes.line}></div>
    </div>
  );
};
function SignUp(props) {
  const classes = useStyles();
  const [fields, setFields] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const submit = async () => {
    try {
      const result = await backend.post("/users/signUp", fields);
      console.log(result);
      if (result.status === 200) {
        props.history.push("/login");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {Object.keys(fields).map((field, i) => (
        <TextField
          id={field}
          label={field}
          key={i}
          variant="outlined"
          value={fields[field]}
          onChange={(e) =>
            setFields({ ...fields, [field]: e.currentTarget.value })
          }
          focused={i === 0}
          className={classes.mt24}
        />
      ))}

      <div className={classes.linkContainer}>
        <Typography variant={"h6"} style={{ fontSize: "0.8rem" }}>
          By clicking Agree & Join, you agree to the LinkedIn{" "}
          <Link component={RouterLink} to="/signup" color={"primary"}>
            User Agreement, Privacy Policy
          </Link>
          , and{" "}
          <Link component={RouterLink} to="/signup" color={"primary"}>
            Cookie Policy
          </Link>
        </Typography>
      </div>
      <Button
        variant="contained"
        color={"primary"}
        className={classes.button}
        onClick={submit}
      >
        Agree & Join
      </Button>
      <BreakLine />
      <Button
        variant="outlined"
        color={"primary"}
        className={classes.button}
        startIcon={<FcGoogle />}
      >
        Sign In With Google
      </Button>
    </>
  );
}

export default SignUp;
