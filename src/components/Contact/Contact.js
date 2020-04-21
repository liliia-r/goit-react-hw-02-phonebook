import React from "react";

const Contact = ({ name, number, onDeleteContact, id }) => {
  return (
    <>
      {name}: {number}
      <button onClick={onDeleteContact}>Delete</button>
    </>
  );
};

export default Contact;
