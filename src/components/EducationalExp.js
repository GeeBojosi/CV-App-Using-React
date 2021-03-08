import React, { Component } from 'react';
import EditEducation from "../editableForms/EditEducation";
import { months, years, edOptions } from "../selectData";

class EducationalExp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: true,
      select_education: "",
      school_name: "",
      study_name: "",
      period_name: false,
      month_from: "",
      month_to: "",
      year_from: "",
      year_to: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  };

  handleChange(evt) {
    const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    this.setState({
      [evt.target.name]: value,
    })
  };

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({ isEditing: !this.state.isEditing })
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    const {
      select_education,
      study_name,
      school_name,
      month_from,
      year_from,
      month_to,
      year_to
    } = this.state;

    let results;
    if (!this.state.isEditing) {
      results = <EditEducation
        select_education={select_education}
        study_name={study_name}
        school_name={school_name}
        month_from={month_from}
        month_to={month_to}
        year_from={year_from}
        year_to={year_to}
        toggleForm={this.toggleForm}
      />
    } else {
      results = (
        <div>
          <h2>Education</h2>
          <form onSubmit={this.handleSubmit}>
            {/* add value={this.state.xxxx} */}
            <label htmlFor="select_education">Level of Education: </label>
            <select name="select_education" id="select_education" value={this.state.select_education} onChange={this.handleChange}>
              {edOptions.map((edLevel, i) => (
                <option value={edLevel} key={i}>{edLevel}</option>
              ))}
            </select>
            <label htmlFor="school_name">School or University: </label>
            <input type="text" name="school_name" id="school_name" value={this.state.school_name} onChange={this.handleChange} />
            <label htmlFor="study_name">Field of Study: </label>
            <input type="text" name="study_name" id="study_name" value={this.state.study_name} onChange={this.handleChange} />
            <label htmlFor="period">Time Period: </label>
            <input type="checkbox" name="period_name" id="period_name" checked={this.state.period_name} onChange={this.handleChange} />
            <span>Currently enrolled: </span>

            <label htmlFor="month_from">From:</label>
            <select name="month_from" id="month_form" value={this.state.month_from} onChange={this.handleChange}>
              {months.map((month, i) => (
                <option value={month} key={i}>{month}</option>
              ))}
            </select>
            <select name="year_from" id="year_form" value={this.state.year_from} onChange={this.handleChange}>
              {years.map(year => (
                <option value={year} key={year}>{year}</option>
              ))}
            </select>

            <label htmlFor="month_to">To:</label>
            <select name="month_to" id="month_to" value={this.state.month_to} onChange={this.handleChange}>
              {months.map((month, i) => (
                <option value={month} key={i}>{month}</option>
              ))}
            </select>
            <select name="year_to" id="year_to" value={this.state.year_to} onChange={this.handleChange}>
              {years.map(year => (
                <option value={year} key={year}>{year}</option>
              ))}
            </select>
            <button>Submit</button>
          </form>
        </div>
      )
    }
    return results;
  };
}
export default EducationalExp;
