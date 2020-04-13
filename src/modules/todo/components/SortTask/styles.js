import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  dropdownSort: {
    position: "absolute !important",
    "& div": {
      top: "135px !important",
    },
    "& div:nth-child(3)": {
      width: 150,
    },
    "& div:nth-child(2)": {
      width: 150,
    },
  },
});

export default useStyles;
