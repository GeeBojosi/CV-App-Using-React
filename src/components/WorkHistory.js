import React, { Component } from 'react';
import EditWork from "../editableForms/EditWork";
import { months, years, edOptions } from "../selectData";

class WorkHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: true,
      job_title: "",
      company_name: "",
      description: "",
      period_name: false,
      month_from: "",
      month_to: "",
      year_from: "",
      year_to: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    let results;
    if (!this.state.isEditing) {
      results = <EditWork />
    } else {
      results = (
        <div>
          <h2>Work Experience</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="job_title">Job Title: </label>
            <input type="type" name="job_title" value={this.state.job_title} onChange={this.handleChange} />
            <label htmlFor="company_name">Company Name: </label>
            <input type="text" name="company_name" value={this.state.company_name} onChange={this.handleChange} />
            <label htmlFor="">Description: </label>
            <textarea
              name="description"
              value={this.state.description}
              placeholder="Write Something..."
              onChange={this.handleChange}
            >
            </textarea>
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
};

export default WorkHistory;
