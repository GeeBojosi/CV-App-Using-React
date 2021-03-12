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
      year_from,
      month_from,
      year_to,
      month_to,
      description
    } = this.props;
    return (
      <div className="WorkHistoryEdit">
        <hr />
        <h3 className="WorkHistoryEdit-title">Work Experience</h3>
        <h3>{job_title}</h3>
        <p>{company_name}</p>
        <p>{year_from} {month_from} to {year_to} {month_to}</p>
        <p>{description}</p>
        <div className="WorkHistoryEdit-buttons">
          <button onClick={this.handleToggle}>
            <i className="fas fa-pen" />
          </button>
        </div>
      </div>
    )
  };
};

export default EditWork;