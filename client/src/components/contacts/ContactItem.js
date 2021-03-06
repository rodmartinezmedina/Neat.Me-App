import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../contexts/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
    // console.log(`onDelete function `);
  };

  return (
    <div className="card bg-dark">
      <h3 className="bg text-left">
        {name}
        <span
          style={{ float: "right" }}
          className={
            type === "personal" ? "badge badge-light" : "badge badge-secondary"
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-mobile-alt"></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className=" btn btn-secondary btn-sm"
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
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
