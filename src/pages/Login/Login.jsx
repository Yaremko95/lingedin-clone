import React, { useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";
import backend from "../../clients/backemd.client";
import { SocketContext } from "../../context/socket/SocketProvider";
function Login(props) {
  const classes = useStyles();

  const [fields, setFields] = useState({
    email: "",
    password: "",
  });
  const submit = async () => {
    try {
      const { data, status } = await backend.post("/users/login", fields);

      if (status === 200) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);

        window.location.replace("/");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {Object.keys(fields).map((field, i) => (
        <TextField
          value={fields[field]}
          key={i}
          label={field}
          variant="outlined"
          focused={i === 0}
          className={classes.mt24}
          onChange={(e) =>
            setFields({ ...fields, [field]: e.currentTarget.value })
          }
        />
      ))}

      <div className={classes.mt24}>
        <Link component={RouterLink} to="/signup" color={"primary"}>
          Forgot Password?
        </Link>
      </div>
      <Button
        variant="contained"
        color={"primary"}
        className={classes.button}
        onClick={submit}
      >
        Sign In
      </Button>
    </>
  );
}

export default Login;
