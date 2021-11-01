import React from 'react';
import { Link } from 'react-router-dom';
// type 'impt' then enter for short cut for PropTypes!
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

Navbar.defaultProps = {
  title: 'GitHub Finder',
  icon: 'fab fa-github',
};

//Almost like using typescript, this defines what type of value props should be.
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

//Below is class component before refactored to functional component

// import React, { Component } from 'react';

// // type 'impt' then enter for short cut for PropTypes!
// import PropTypes from 'prop-types';

// class Navbar extends Component {
//   static defaultProps = {
//     title: 'GitHub Finder',
//     icon: 'fab fa-github',
//   };

//   //Almost like using typescript, this defines what type of value props should be.
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired,
//   };

//   render() {
//     return (
//       <nav className='navbar bg-primary'>
//         <h1>
//           <i className={this.props.icon} />
//           {this.props.title}
//         </h1>
//       </nav>
//     );
//   }
// }

// export default Navbar;
