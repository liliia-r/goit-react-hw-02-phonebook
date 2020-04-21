import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class Phonebook extends Component {
  state = {
    name: "",
    number: "",
  };

  handlerChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handlerSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    this.props.onHandlerSubmit(contact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form
          className="PhonebookForm"
          autoComplete="off"
          onSubmit={this.handlerSubmit}
        >
          <h2>Phonebook</h2>

          <label className="Label">
            Name
            <input
              className="PhonebookForm__name"
              type="text"
              name="name"
              autoFocus
              value={name}
              onChange={this.handlerChange}
            ></input>
          </label>

          <label>
            Number
            <input
              className="PhonebookForm__number"
              type="text"
              name="number"
              autoFocus
              value={number}
              onChange={this.handlerChange}
            ></input>
          </label>

          <button className="PhonebookForm__btn" type="submit">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

export default Phonebook;
