import React, { useState, useEffect } from "react";
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
import { findTasksIndex } from "../functions/helper";
import { searchName, searchStatus } from "../modules/todo/components/handler";

export default function ToDoList() {
  // const classes = styles();
  const inititalTask = JSON.parse(localStorage.getItem("listTask"))
    ? JSON.parse(localStorage.getItem("listTask"))
    : [];

  //state
  const [tasks, setTasks] = useState(inititalTask);
  const [isEdit, setIsEdit] = useState(false);
  const [editTask, setEditTask] = useState({});
  //search
  const [keyWord, setKeyWord] = useState("");
  const [status, setStatus] = useState("all");
  const [searchTasks, setSearchTasks] = useState([]);
  const handleGenerateData = () => {
    const listTask = [
      {
        name: "Learn ReactJS",
        status: "0",
        id: randomstring.generate(),
      },
      {
        name: "Learn Redux",
        status: "1",
        id: randomstring.generate(),
      },
      {
        name: "Learn Middleware",
        status: "0",
        id: randomstring.generate(),
      },
    ];
    setTasks(listTask);
    localStorage.setItem("listTask", JSON.stringify(listTask));
  };
  const handleDeteleLocal = () => {
    localStorage.removeItem("listTask");
    setTasks([]);
  };

  const handleDeteleTask = (id) => {
    const listTask = tasks.filter((item) => {
      return item.id !== id;
    });

    setTasks(listTask);
    localStorage.setItem("listTask", JSON.stringify(listTask));
  };

  const handleChangeStatus = (id) => {
    const index = findTasksIndex(tasks, id);
    const newTasks = [...tasks];
    let status;
    if (newTasks[index].status === "1") {
      status = "0";
    }
    if (newTasks[index].status === "0") {
      status = "1";
    }
    newTasks[index].status = status;
    setTasks(newTasks);
    localStorage.setItem("listTask", JSON.stringify(newTasks));
  };
  const handleSave = (value) => {
    if (isEdit) {
      const index = findTasksIndex(tasks, value.id);
      tasks[index] = value;
      setTasks([...tasks]);
      localStorage.setItem("listTask", JSON.stringify([...tasks]));
    } else {
      const task = { ...value, id: randomstring.generate() };
      setTasks([...tasks, task]);
      localStorage.setItem("listTask", JSON.stringify([...tasks, task]));
    }
    setIsEdit(false);
  };

  const handleEditTask = (editTask) => {
    setIsEdit(true);
    setEditTask(editTask);
  };

  const handleCloseDialog = () => {
    setIsEdit(false);
  };

  const handleClickAdd = () => {
    setEditTask({});
  };

  const handleSearch = (value) => {
    setKeyWord(value);
  };
  const handleSearchStatus = (value) => {
    setStatus(value);
  };

  //search theo name
  useEffect(() => {
    const arrSearch = searchName(tasks, keyWord);
    setSearchTasks([...arrSearch]);
  }, [keyWord, tasks]);

  //search theo active - hidden
  useEffect(() => {
    if (status !== "all") {
      const arrSearch = searchStatus(tasks, status);
      setSearchTasks([...arrSearch]);
    } else {
      setSearchTasks([...tasks]);
    }
  }, [status, tasks]);

  return (
    <Container maxWidth="lg">
      <Typography align="center" variant="h1">
        Task Manager
      </Typography>

      {/* Add task */}
      <TaskModal
        handleClickAdd={handleClickAdd}
        handleCloseDialog={handleCloseDialog}
        editTask={editTask}
        isEdit={isEdit}
        handleSave={handleSave}
        keyWord={keyWord} // để trùng 2 thằng keyWord
      />

      {/* Search bar */}
      <SearchBar keyWord={keyWord} handleSearch={handleSearch} />

      {/* Sort */}
      <Button style={{ marginLeft: 20 }} variant="contained" color="primary">
        <ArrowDropDownIcon fontSize="small" /> Sort
      </Button>

      {/* Generate Data */}
      <Button
        onClick={handleGenerateData}
        style={{ marginLeft: 20 }}
        variant="contained"
        color="primary"
      >
        Generate Data
      </Button>

      {/* Clear All */}
      <MuiThemeProvider theme={viceTheme}>
        {Array.isArray(searchTasks) && searchTasks.length > 0 && (
          <Button
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this item?"))
                handleDeteleLocal();
            }}
            style={{ marginLeft: 20 }}
            variant="contained"
            color="primary"
          >
            Delete All Data
          </Button>
        )}
      </MuiThemeProvider>

      {/* Task Table */}
      <TaskTable
        handleSearchStatus={handleSearchStatus}
        handleSearch={handleSearch}
        handleChangeStatus={handleChangeStatus}
        handleDeteleTask={handleDeteleTask}
        tasks={searchTasks}
        handleEditTask={handleEditTask}
        keyWord={keyWord} // để trùng 2 thằng keyWord
      />
    </Container>
  );
}
