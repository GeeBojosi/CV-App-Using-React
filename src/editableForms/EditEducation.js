import React, { Component } from 'react';

class EditEducation extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.props.toggleForm();
  }

  render() {
    const {
      select_education,
      study_name,
      school_name,
      month_from,
      month_to,
      year_from,
      year_to
    } = this.props;
    return (
      <div>
        <h3>Education</h3>
        <h2>{select_education} in {study_name}</h2>
        <p>{school_name}</p>
        <p>{month_from} {year_from} to {month_to} {year_to}</p>
        <button onClick={this.handleToggle}>
          Edit
        </button>
      </div>
    )
  }
}

export default EditEducation;
