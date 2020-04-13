import React, { Fragment, useState, useEffect } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CheckIcon from "@material-ui/icons/Check";
import useStyles from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortAlphaDownAlt,
  faSortAlphaDown,
} from "@fortawesome/free-solid-svg-icons";

const IconCheck = () => (
  <CheckIcon style={{ marginLeft: 10 }} fontSize="small" color="primary" />
);

export default function SortTask(props) {
  const clasess = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [sort, setSort] = useState({});
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSort = (valueSort) => {
    setSort(valueSort); // cái này để hiện dấu tick thằng nào đc chọn
    setAnchorEl(null);
    props.handleSort(valueSort);
  };

  //check sort
  useEffect(() => {
    if (!props.isSort) {
      setSort({});
    }
  }, [props.isSort]);
  return (
    <Fragment>
      <Button
        onClick={handleClick}
        style={{ marginLeft: 20 }}
        variant="contained"
        color="primary"
      >
        <ArrowDropDownIcon fontSize="small" /> Sort
      </Button>
      <Menu
        className={clasess.dropdownSort}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleSort({ by: "name", value: 1 });
          }}
        >
          <FontAwesomeIcon style={{ marginRight: 10 }} icon={faSortAlphaDown} />{" "}
          Name A-Z {sort.value === 1 && <IconCheck />}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleSort({ by: "name", value: -1 });
          }}
        >
          <FontAwesomeIcon
            style={{ marginRight: 10 }}
            icon={faSortAlphaDownAlt}
          />
          Name Z-A{sort.value === -1 && <IconCheck />}
        </MenuItem>
        <hr />
        <MenuItem
          onClick={() => {
            handleSort({ by: "status", value: -2 });
          }}
        >
          Status Actice {sort.value === -2 && <IconCheck />}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleSort({ by: "status", value: 2 });
          }}
        >
          Status Hidden {sort.value === 2 && <IconCheck />}
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
