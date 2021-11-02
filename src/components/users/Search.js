import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';
const Search = () => {
  const alertContext = useContext(AlertContext);
  const githubContext = useContext(GithubContext);

  const { clearUsers } = githubContext;

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
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
        {githubContext.users.length > 0 ? (
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

export default Search;
