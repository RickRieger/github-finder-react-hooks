import React from 'react';
// type 'impt' then enter for snippet shortcut below
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

// Type 'ptor' then enter from the snippet short cut for 'PropTypes.object.isRequired'.
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

// Below is the component as a class before being refactored.

// import React, { Component } from 'react';

// class UserItem extends Component {
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     id: 'id',
//   //     login: 'mojombo',
//   //     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//   //     html_url: 'https://github.com/mojombo',
//   //   };
//   // }

//   // The constructor above is not needed, we can simply just define state as below.
//   // state = {
//   //   id: 'id',
//   //   login: 'mojombo',
//   //   avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//   //   html_url: 'https://github.com/mojombo',
//   // };

//   render() {
//     const { id, login, avatar_url, html_url } = this.props.user;
//     return (
//       <div className='card text-center'>
//         <img
//           src={avatar_url}
//           alt=''
//           className='round-img'
//           style={{ width: '60px' }}
//         />
//         <h3>{login}</h3>
//         <div>
//           <a href={html_url} className='btn btn-dark btn-sm my-1'>
//             More
//           </a>
//         </div>
//       </div>
//     );
//   }
// }

// export default UserItem;
