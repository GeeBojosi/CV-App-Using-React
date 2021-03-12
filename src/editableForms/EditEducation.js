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
      <div className="EducationEdit">
        <hr />
        <h3 className="EducationEdit-title">Education</h3>
        <h3>{select_education} in {study_name}</h3>
        <p>{school_name}</p>
        <p>{month_from} {year_from} to {month_to} {year_to}</p>
        <div className="EducationEdit-buttons">
          <button onClick={this.handleToggle}>
            <i className="fas fa-pen" />
          </button>
        </div>
      </div>
    )
  }
}

export default EditEducation;
