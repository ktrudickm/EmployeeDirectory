import React from 'react';

function Search(props) {
  return (
    <form>
      <div className="form-group" style={{ display: 'flex' }}>
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Employee Search"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
        <button onClick={props.refreshPage} className="btn btn-primary ml-1">
          Clear Search
        </button>
      </div>
    </form>
  );
}

export default Search;