import React from 'react';

function Search(props) {
  return (
    <div className="formStyle">
    <form className='form'>
      <div className="formInput" style={{ display: 'flex' }}>
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
          Search Name
        </button>
        <button onClick={props.refreshPage} className="btn btn-primary ml-1">
          Clear Search
        </button>
      </div>
    </form>
    </div>
  );
}

export default Search;