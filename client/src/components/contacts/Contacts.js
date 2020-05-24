import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "./ContactItem";
import ContactContext from "../../contexts/contact/contactContext";
import Spinner from "../../components/layout/Spinner";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add contact</h4>;
  }

  return (
    <div>
      <Fragment>
        {contacts !== null && !loading ? (
          <TransitionGroup>
            {filtered !== null
              ? filtered.map((contact) => (
                  <CSSTransition
                    key={contact._id}
                    timeout={300}
                    classNames="item"
                  >
                    <ContactItem contact={contact} />
                  </CSSTransition>
                ))
              : contacts.map((contact) => (
                  <CSSTransition
                    key={contact._id}
                    timeout={300}
                    classNames="item"
                  >
                    <ContactItem contact={contact} />
                  </CSSTransition>
                ))}
          </TransitionGroup>
        ) : (
          <Spinner />
        )}
      </Fragment>
    </div>
  );
};

export default Contacts;
