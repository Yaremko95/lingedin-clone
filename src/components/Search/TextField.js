import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      border: "0",
    },
    "& .MuiInput-underline:before": {
      // borderBottomColor: "green",
      border: "0",
    },
    "& .MuiInput-underline": {
      // borderBottomColor: "green",
      backgroundColor: "#eef3f8",
      padding: "6px 16px",
    },
    "& .MuiInput-underline:after": {
      // borderBottomColor: "green",
      border: "0",
    },
    "& .MuiInput-underline:hover:before": {
      // borderBottomColor: "green",
      border: "0",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
})(TextField);

export default CssTextField;
