import React from "react";
import Contact from "../Contact/Contact";

const Contacts = ({ filteredContacts, onDeleteContact }) =>
  filteredContacts.length > 0 && (
    <ul>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            {...contact}
            onDeleteContact={() => onDeleteContact(contact.id)}
          />
        </li>
      ))}
    </ul>
  );

export default Contacts;
