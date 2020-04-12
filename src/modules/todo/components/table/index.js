import React from "react";
import { Table, Badge } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";

import useStyles from "./styles";
import {
  Button,
  MuiThemeProvider,
  TextField,
  Select,
  FormControl,
} from "@material-ui/core";
import { viceTheme } from "../../../../theme";

export default function TaskTable(props) {
  const classes = useStyles();
  const { tasks, keyWord } = props;

  const renderTask = () => {
    if (Array.isArray(tasks) && tasks.length > 0) {
      return tasks.map((task, index) => (
        <TableRow key={index}>
          <TableCell className={classes.item}>{index + 1}</TableCell>
          <TableCell className={classes.item}>{task.name}</TableCell>
          <TableCell align="center" className={classes.item}>
            {task.status === "1" ? (
              <Tooltip disableFocusListener title="Click to change status">
                <Badge
                  onClick={() => {
                    handleChangeStatus(task.id);
                  }}
                  style={{ cursor: "pointer" }}
                  badgeContent={"Active"}
                  color="primary"
                />
              </Tooltip>
            ) : (
              <Tooltip disableFocusListener title="Click to change status">
                <Badge
                  onClick={() => {
                    handleChangeStatus(task.id);
                  }}
                  style={{ cursor: "pointer" }}
                  badgeContent={"Hidden"}
                  color="secondary"
                />
              </Tooltip>
            )}
          </TableCell>
          <TableCell align="center" className={classes.item}>
            <Button
              style={{ marginRight: 10 }}
              variant="contained"
              color="secondary"
              onClick={() => {
                handleEditTask(task);
              }}
            >
              <EditIcon fontSize="small" />
              Edit
            </Button>
            <MuiThemeProvider theme={viceTheme}>
              <Button
                onClick={() => {
                  if (
                    window.confirm("Are you sure you want to delete this item?")
                  )
                    handleDelete(task.id);
                }}
                variant="contained"
                color="primary"
              >
                <DeleteIcon fontSize="small" />
                Delete
              </Button>
            </MuiThemeProvider>
          </TableCell>
        </TableRow>
      ));
    }
  };

  const handleDelete = (id) => {
    props.handleDeteleTask(id);
  };

  const handleEditTask = (task) => {
    props.handleEditTask(task);
  };

  const handleChangeStatus = (id) => {
    props.handleChangeStatus(id);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    props.handleSearch(value);
  };

  const handleSearchStatus = (e) => {
    const { value } = e.target;
    props.handleSearchStatus(value);
  };

  return (
    <TableContainer
      style={{
        overflowX: "hidden",
        marginTop: 20,
        borderTop: "1px solid rgba(224, 224, 224, 1)",
      }}
      component={Paper}
    >
      <Table className={classes.table}>
        {/* table header */}
        <TableHead>
          <TableRow>
            <TableCell className={classes.item}>
              <b>No.</b>
            </TableCell>
            <TableCell className={classes.item} align="center">
              <b>Task</b>
            </TableCell>
            <TableCell className={classes.item} align="center">
              <b>Status</b>
            </TableCell>
            <TableCell align="center">
              <b>Action</b>
            </TableCell>
          </TableRow>
        </TableHead>
        {/* table body */}
        <TableBody>
          {/* fixed */}
          <TableRow>
            <TableCell className={classes.item}></TableCell>
            <TableCell className={classes.item}>
              <TextField
                onChange={handleOnChange}
                variant="outlined"
                size="small"
                fullWidth
                value={keyWord}
              />
            </TableCell>
            <TableCell className={classes.item}>
              <FormControl fullWidth size="small">
                <Select onChange={handleSearchStatus} native variant="outlined">
                  {/* render option */}
                  <option value="all">All</option>
                  <option value="1">Active</option>
                  <option value="0">Hidden</option>
                </Select>
              </FormControl>
            </TableCell>
            <TableCell className={classes.item}></TableCell>
          </TableRow>
          {/* render */}
          {renderTask()}
          {/* render */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
