import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { TextField, FormControl, Select } from "@material-ui/core";

export default function TestAA() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* button click */}
      <Button
        onClick={handleClickOpen}
        style={{ marginRight: 20 }}
        variant="contained"
        color="primary"
      >
        Add task
      </Button>

      {/* modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
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
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
