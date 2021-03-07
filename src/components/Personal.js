import React, { Component } from 'react';
import EditPersonal from "../editableForms/EditPersonal";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: true,
      first_name: "",
      last_name: "",
      phone_number: "",
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  };

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({ isEditing: !this.state.isEditing })
  };

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    let results;
    const { first_name, last_name, phone_number, email } = this.state;
    if (!this.state.isEditing) {
      results = (
        <EditPersonal
          name={first_name}
          lastname={last_name}
          phone={phone_number}
          email={email}
          toggleForm={this.toggleForm}
        />
      )
    } else {
      results = (
        <div>
          <h2>Personal Information:</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="first_name">First Name:</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={this.state.first_name}
              onChange={this.handleChange}
            />

            <label htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={this.state.last_name}
              onChange={this.handleChange}
            />

            <label htmlFor="phone_number">Phone Number:</label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={this.state.phone_number}
              onChange={this.handleChange}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
              onChange={this.handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              placeholder="email@address.com"
              onChange={this.handleChange}
            />
            <button>Submit</button>
          </form>
        </div >
      )
    }
    return results;
  };
};

export default Personal;