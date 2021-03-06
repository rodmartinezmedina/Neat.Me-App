import React, { useContext, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/auth/authContext";
import ContactContext from "../../contexts/contact/contactContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <Link to="/">Contacts</Link>
      </li>
      <li>
        <Link to="/notes">Notes</Link>
      </li>

      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-dark">
      <h1>
        {isAuthenticated ? (
          <Link to="/">
            {/* <i className={icon} /> {title} */}
            <img src="/images/1-sm-bis.png" className="app-logo" />
          </Link>
        ) : (
          <Link to="/welcome">
            {/* <i className={icon} /> {title} */}
            <img src="images/1-sm-bis.png" className="app-logo" />
          </Link>
        )}
      </h1>
      <ul>
        {isAuthenticated ? authLinks : guestLinks}
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li> */}
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Neat.ME",
  icon: "fas fa-id-card",
};

export default Navbar;
