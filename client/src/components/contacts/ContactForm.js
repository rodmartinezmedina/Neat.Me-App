import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../contexts/contact/contactContext";
import AlertContext from "../../contexts/alert/alertContext";
import AuthContext from "../../contexts/auth/authContext";

function ContactForm() {
  const alertContext = useContext(AlertContext);
  const contactContext = useContext(ContactContext);
  const authContext = useContext(AuthContext);

  const { clearErrors } = authContext;
  const { setAlert } = alertContext;
  const {
    error,
    addContact,
    updateContact,
    clearCurrent,
    current,
  } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [error, authContext, contactContext, clearErrors, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setAlert(`Please enter all fields`, "danger");
    } else if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2 className="text-primary">
          {current ? "Edit Contact" : "Add Contact"}
        </h2>
        <p>Please enter all fields</p>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={onChange}
        />
        <h5>Contact Type</h5>
        <input
          type="radio"
          name="type"
          value="personal"
          checked={type === "personal"}
          onChange={onChange}
        />
        Personal{" "}
        <input
          type="radio"
          name="type"
          value="professional"
          checked={type === "professional"}
          onChange={onChange}
        />
        Professional
        <div>
          <input
            type="submit"
            value={current ? "Update Contact" : "Add Contact"}
            className="btn btn-primary btn-block"
          />
        </div>
        {current && (
          <div>
            <button className="btn btn-light btn-block" onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
