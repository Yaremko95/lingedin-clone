import React, { useState } from "react";
import { useStyles } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "./TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import backend from "../../clients/backemd.client";
import Typography from "@material-ui/core/Typography";
function Search(props) {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const handleChange = async (query) => {
    try {
      setSearchQuery(query);
      const { data } = await backend.get("/users?q=" + query);
      // console.log(data);
      setResults(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      //value={searchQuery}
      inputValue={searchQuery}
      onChange={(event, newValue) => {
        props.handleChatOpen(newValue.id);
      }}
      onInputChange={(event, newInputValue) => {
        //console.log(newInputValue);
        handleChange(newInputValue);
      }}
      options={results}
      getOptionLabel={(option) => option.fullName}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={"Search..."}
          InputProps={{
            ...params.InputProps,
            type: "search",
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className={classes.searchIcon} />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}

export default Search;
