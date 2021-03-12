import React, { Component } from 'react';
import "../styles/Personal.css";

class EditPersonal extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.props.toggleForm()
  }

  render() {
    const { name, lastname, phone, email } = this.props;

    return (
      <div className="PersonalEdit">
        <h3>{name} {lastname}</h3>
        <p>{email}</p>
        <p>{phone}</p>
        <div className="PersonalEdit-buttons">
          <button onClick={this.handleToggle}>
            <i className="fas fa-pen" />
          </button>
        </div>
      </div>
    )
  };
};

export default EditPersonal;

// job_title={job_title}
//           company_name={company_name}
//           year_from={year_from}
//           month_from={month_from}
//           year_to={year_to}
//           month_to={month_to}