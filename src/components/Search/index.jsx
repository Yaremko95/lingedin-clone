import React, { useState } from "react";
import { useStyles } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "./TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
function Search(props) {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState("");
  const top100Films = ["hello", "ghgh"];
  return (
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={top100Films.map((option) => option)}
      renderInput={(params) => (
        // <TextField
        //   {...params}
        //   renderInput={(params) => (
        //     <div className={classes.search}>
        //       <div className={classes.searchIcon}>
        //         <SearchIcon />
        //       </div>
        //       <InputBase
        //         {...params}
        //         ref={params.InputProps.ref}
        //         inputProps={params.inputProps}
        //         value={searchQuery}
        //         onChange={(e) => setSearchQuery(e.currentTarget.value)}
        //         placeholder="Search…"
        //         classes={{
        //           root: classes.inputRoot,
        //           input: classes.inputInput,
        //         }}
        //       />
        //     </div>
        //
        //   )}
        // />
        <TextField
          {...params}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
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
