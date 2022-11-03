import React, { useState } from "react";

const SearchBar = ({search}) => {
    const [name, setName] = useState('')

    const changeHandler = (e) =>{
        setName(e)
        search(e)
    }

  return (
    <div className="search">
      <form>
        <input
          type="text"
          placeholder="Search Characters"
          value={name}
          onChange={(e) => changeHandler(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
