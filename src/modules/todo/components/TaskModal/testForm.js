



import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import {
  TextField,
  FormControl,
  Select,
  Box,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export default function TaskModal(props) {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState({
    name: "",
    status: "",
  });
  const { isEdit, editTask } = props;

  const handleClickOpen = () => {
    setOpen(true);
    props.handleClickAdd();
  };
  const handleClose = () => {
    setOpen(false);
    props.handleCloseDialog();
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.handleSave(task);
    setOpen(false);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  useEffect(() => {
    if (isEdit) {
      setOpen(true);
      setTask(editTask);
    }
  }, [isEdit, editTask]);

  return (
    <Box componet="div" mb={2}>
      {/* button click */}
      <Button
        onClick={handleClickOpen}
        style={{ marginRight: 20 }}
        variant="contained"
        color="primary"
      >
        <AddIcon fontSize="small" /> Add Task
      </Button>

      {/* modal */}
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleOnSubmit}>
          <DialogContent>
            <Typography variant="h2">
              {isEdit ? "Edit Task" : "Add Task"}
            </Typography>
            {/* TODO: thêm form */}{" "}
            <TextField
              onChange={handleOnChange}
              name="name"
              autoFocus
              label="Task Name"
              variant="outlined"
              placeholde="Enter your Task"
              fullWidth
              size="small"
              defaultValue={editTask.name}
            />
            <FormControl margin="normal" size="small" fullWidth>
              <Select
                onChange={handleOnChange}
                name="status"
                variant="outlined"
                native
                defaultValue={editTask.status}
              >
                {/* <option value={-1}>Choose status</option> */}
                <option value="-1">Choose status</option>
                <option value="1">Active</option>
                <option value="0">Hidden</option>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button type="submit" variant="contained" color="primary">
              <AddIcon fontSize="small" /> Save
            </Button>
            <Button
              variant="contained"
              onClick={handleClose}
              color="secondary"
              autoFocus
            >
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}
