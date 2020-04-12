import React, { useState, useEffect } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Alert } from "@material-ui/lab";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  FormControl,
  Select,
  Box,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
//TODO: chuyen file test qua project

export default function TaskModal(props) {
  const [open, setOpen] = useState(false);

  const { isEdit, editTask } = props;

  //formik
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("No Empty"),
    status: Yup.string()
      .oneOf(["1", "0"], "Invalid Status Type")
      .required("Required"),
  });

  const TextInput = ({ field, form, ...props }) => {
    return (
      <TextField
        label="Task Name"
        variant="outlined"
        placeholde="Enter your Task"
        fullWidth
        size="small"
        {...field}
        {...props}
      />
    );
  };

  const SelectInput = ({ field, form, ...props }) => {
    return (
      <FormControl margin="normal" size="small" fullWidth>
        <Select variant="outlined" native {...field} {...props}>
          <option value="">Choose status</option>
          <option value="1">Active</option>
          <option value="0">Hidden</option>
        </Select>
      </FormControl>
    );
  };
  const MyAlert = ({ children, ...props }) => {
    return (
      <Alert {...props} severity="error">
        {children}
      </Alert>
    );
  };

  const handleClickOpen = () => {
    setOpen(true);
    props.handleClickAdd();
  };
  const handleClose = () => {
    setOpen(false);
    props.handleCloseDialog();
  };

  useEffect(() => {
    if (isEdit) {
      setOpen(true);
    }
  }, [isEdit]);

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
        <DialogContent style={{ width: 400, height: 300 }}>
          <Typography variant="h2">
            {isEdit ? "Edit Task" : "Add Task"}
          </Typography>
          {/* TODO: thêm form */}{" "}
          <Formik
            initialValues={{
              name: !editTask.name ? "" : editTask.name, // nếu undifined thì lấy ""
              status: !editTask.status ? "" : editTask.status,
              id: !editTask.id ? "" : editTask.id,
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              //ti truyen value qua index o day
              props.handleSave(values);
              setOpen(false);
            }}
          >
            {({ isValid, touched }) => {
              if (!touched.name || !touched.status) {
                isValid = false;
              }

              return (
                <Form>
                  <Field component={TextInput} name="name" />
                  <ErrorMessage
                    render={(msg) => <MyAlert>{msg}</MyAlert>}
                    name="name"
                  />
                  <Field component={SelectInput} name="status" />
                  <ErrorMessage
                    render={(msg) => <MyAlert>{msg}</MyAlert>}
                    name="status"
                  />
                  {/* button */}
                  <DialogActions>
                    <Button
                      // disabled={!isValid}
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
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
                </Form>
              );
            }}
          </Formik>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
