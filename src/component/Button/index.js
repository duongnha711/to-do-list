import React from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

import classNames from "classnames";
import logInStyles from "./styles";

export default function Index(props) {
  const { color, ...rest } = props;
  const myStyles = logInStyles();

  const className = classNames({
    [myStyles.button]: true,
    [myStyles[color]]: color,
  });

  return <Button {...rest} classes={{ root: className }} />;
}

Index.propTypes = {
  color: PropTypes.oneOf(["warning", "abc"]),
  simple: PropTypes.bool,
};
