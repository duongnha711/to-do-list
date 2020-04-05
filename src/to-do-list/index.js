import React, { useState } from "react";
// import styles from "./style";
import {
  Button,
  Container,
  Typography,
  MuiThemeProvider,
} from "@material-ui/core";
import TaskTable from "../modules/todo/components/table";
import SearchBar from "../component/SearchBar";
import TaskModal from "../modules/todo/components/TaskModal";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import randomstring from "randomstring";
import { viceTheme } from "./../theme";

export default function ToDoList() {
  // const classes = styles();

  const [tasks, setTasks] = useState([
    {
      id: randomstring.generate(),
      name: "Học react",
      status: true,
    },
  ]);

  const handleOnClick = () => {
    const listTask = [
      {
        id: randomstring.generate(),
        name: "Học react",
        status: true,
      },
      {
        id: randomstring.generate(),
        name: "Học redux",
        status: false,
      },
      {
        id: randomstring.generate(),
        name: "Học middleware",
        status: true,
      },
    ];
    setTasks(listTask);
    localStorage.setItem("listTask", JSON.stringify(listTask));
  };

  const handleDetele = () => {
    localStorage.removeItem("listTask");
    setTasks([]);
  };

  return (
    <Container maxWidth="lg">
      <Typography align="center" variant="h1">
        Task Manager
      </Typography>

      {/* Add task */}
      <TaskModal />

      {/* Search bar */}
      <SearchBar />

      {/* Sort */}
      <Button style={{ marginLeft: 20 }} variant="contained" color="primary">
        <ArrowDropDownIcon fontSize="small" /> Sort
      </Button>

      {/* Generate Data */}
      <Button
        onClick={handleOnClick}
        style={{ marginLeft: 20 }}
        variant="contained"
        color="primary"
      >
        Generate Data
      </Button>

      {/* Clear All */}
      <MuiThemeProvider theme={viceTheme}>
        <Button
          onClick={handleDetele}
          style={{ marginLeft: 20 }}
          variant="contained"
          color="primary"
        >
          Delete All Data
        </Button>
      </MuiThemeProvider>

      {/* Task Table */}
      <TaskTable tasks={tasks} />
    </Container>
  );
}
