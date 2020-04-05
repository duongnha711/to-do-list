import { makeStyles } from "@material-ui/core";
const logInStyles = makeStyles((theme) => ({
  warning: {
    background: "blue",
    "&:hover": {
      background: "red",
    },
  },
  button: {
    width: "100%",
  },
}));
export default logInStyles;
