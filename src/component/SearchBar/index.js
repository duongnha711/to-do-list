import React from "react";
import { Button, OutlinedInput, FormControl } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export default function SearchBar() {
  return (
    <FormControl size="small">
      <OutlinedInput
        //   className={classes.search}
        style={{ paddingRight: 0 }}
        size="small"
        endAdornment={
          <Button
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            variant="contained"
            color="primary"
          >
            <SearchIcon fontSize="small" /> Search
          </Button>
        }
      />
    </FormControl>
  );
}
