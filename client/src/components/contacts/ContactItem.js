import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../contexts/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact } = contactContext;

  const { id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(id);
    // console.log(`onDelete function `);
  };

  return (
    <div className="card bg-light">
      <h3 className="bg text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            type === "personal" ? "badge badge-primary" : "badge badge-dark"
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-at"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-mobile-alt"></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn-secondary btn-sm">Edit</button>
        <button className="btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
