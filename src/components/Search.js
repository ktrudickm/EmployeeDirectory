import React from 'react';

function Search(props) {
  return (
    <div className="formStyle">
    <form className='form'>
      <div className="formInput" style={{ display: 'flex' }}>
        <input
          onChange={e=>props.handleFormSubmit(e)}
          name="search"
          type="text"
          className="form-control"
          placeholder="Employee Search"
          id="search"
        />
        <button onClick={props.refreshPage} className="btn btn-primary ml-1">
          Clear
        </button>
      </div>
    </form>
    </div>
  );
}

export default Search;