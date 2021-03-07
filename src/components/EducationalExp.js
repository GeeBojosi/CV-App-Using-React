import React, { Component } from 'react';
import { months, years, edOptions } from "../selectData";

class EducationalExp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ed_level: edOptions[0]
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(evt) {
    console.log([evt.target.name])
    this.setState({
      [evt.target.name] : evt.target.value
    })
  }

  render() {
    const yrs = years.map(year => (
      <option value={year} key={year}>{year}</option>
    ));
    const mon = months.map((month, i) => (
      <option value={month} key={i}>{month}</option>
    ));
    const edLevels = edOptions.map((edLevel, i) => (
      <option value={edLevel} key={i}>{edLevel}</option>
    ));
    return (
      <div>
        <h2>Education</h2>
        <form>
          {/* add value={this.state.xxxx} */}
          <label htmlFor="select-education">Level of Education: </label>
          <select name="select-education" id="select-education" value={this.state.ed_level} onChange={this.handleChange}>
            {edLevels}
          </select>
          <label htmlFor="school-name">School or University: </label>
          <input type="text" name="school-name" id="school-name" />
          <label htmlFor="study-name">Field of Study: </label>
          <input type="text" name="study-name" id="study-name" />
          <label htmlFor="period">Time Period: </label>
          <input type="checkbox" name="period-name" id="period-name" />
          <span>Currently enrolled: </span>

          <label htmlFor="month-from">From:</label>
          <select name="month-from" id="month-form">
            <option>Month: </option>
            {mon}
          </select>
          <select name="year-from" id="year-form">
            {yrs}
          </select>

          <label htmlFor="month-to">To:</label>
          <select name="month-to" id="month-to">
            <option value>Month: </option>
            {mon}
          </select>
          <select name="year-to" id="year-to">
            {yrs}
          </select>
        </form>
      </div>
    )
  };
};

export default EducationalExp;
