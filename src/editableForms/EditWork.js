import React, { Component } from 'react';

class EditWork extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.props.toggleForm()
  }

  render() {
    const {
      job_title,
      company_name,
      year_form,
      month_from,
      year_to,
      month_to,
      description
    } = this.props;
    return (
      <div>
        <h3>Work Experience</h3>
        <h2>{job_title}</h2>
        <p>{company_name}</p>
        <p>{year_form} {month_from} to {year_to} {month_to}</p>
        <p>{description}</p>
        <button onClick={this.handleToggle}>
          Edit
        </button>
      </div>
    )
  };
};

export default EditWork;