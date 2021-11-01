import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ showClear, clearUsers, setAlert }) => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='search'
          className='btn btn-dark btn-block'
        />
        {showClear ? (
          <input
            type='reset'
            value='clear'
            className='btn btn-light btn-block'
            onClick={clearUsers}
          />
        ) : (
          ''
        )}
      </form>
    </div>
  );
};

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  // 'ptbr'
  showClear: PropTypes.bool.isRequired,
  // 'ptfr'
  setAlert: PropTypes.func.isRequired,
};

export default Search;
