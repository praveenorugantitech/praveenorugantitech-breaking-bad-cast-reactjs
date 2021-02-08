import React, { useState } from "react";

const Search = ({ setQuery }) => {
  const [text, setText] = useState("");

  const searchChangeHandler = (e) => {
    setText(e.target.value);

    setQuery(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="search">
      <form onSubmit={submitHandler}>
        <input
          className="form-control"
          placeholder="Search Characters"
          autoFocus
          type="text"
          name="search"
          value={text}
          onChange={searchChangeHandler}
          id="search"
        />
      </form>
    </section>
  );
};

export default Search;
