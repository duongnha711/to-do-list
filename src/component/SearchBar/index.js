import React, { useState } from "react";
import { Button, OutlinedInput, FormControl } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export default function SearchBar(props) {
  const [keyWordForm, setKeyWordForm] = useState("");
  const { keyWord } = props;
  const handleOnChange = (e) => {
    const { value } = e.target;
    setKeyWordForm(value);
    props.handleSearch(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSearch(keyWordForm);
  };
  return (
    <FormControl size="small">
      <form onSubmit={handleSubmit}>
        <OutlinedInput
          value={keyWord}
          onChange={handleOnChange}
          //   className={classes.search}
          style={{ paddingRight: 0 }}
          size="small"
          endAdornment={
            <Button
              type="submit"
              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              variant="contained"
              color="primary"
            >
              <SearchIcon fontSize="small" /> Search
            </Button>
          }
        />
      </form>
    </FormControl>
  );
}
