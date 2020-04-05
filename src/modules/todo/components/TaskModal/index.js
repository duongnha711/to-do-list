import React from "react";
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

export default function TaskModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box componet="div" mb={2}>
      {/* button click */}
      <Button
        onClick={handleClickOpen}
        style={{ marginRight: 20 }}
        variant="contained"
        color="primary"
      >
        <AddIcon fontSize="small" /> Add task
      </Button>

      {/* modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Typography variant="h2">Add Task</Typography>

          {/* TODO: thêm form */}
          <TextField
            label="Task Name"
            variant="outlined"
            placeholde="Enter your Task"
            fullWidth
            size="small"
          />
          <FormControl margin="normal" size="small" fullWidth>
            <Select variant="outlined" native>
              <option value={true}>Active</option>
              <option value={false}>Hidden</option>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} color="primary">
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
      </Dialog>
    </Box>
  );
}
