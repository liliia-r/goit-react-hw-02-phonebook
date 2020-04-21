import React from "react";

const ContactsFilter = ({ filter, onHandleChangeFilter }) => {
  return (
    <>
      <h2>Contacts</h2>
      <label>
        Find contacts by name
        <input
          className="PhonebookForm__filter"
          type="text"
          name="filter"
          autoFocus
          value={filter}
          onChange={onHandleChangeFilter}
        ></input>
      </label>
    </>
  );
};

export default ContactsFilter;
