import React from "react";
import ToDoList from "./to-do-list";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToDoList />
    </ThemeProvider>
  );
}

export default App;
