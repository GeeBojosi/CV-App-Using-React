import React, { Component } from 'react';

class WorkHistory extends Component {
  render() {
    return (
      <div>
        <h2>Work Experience</h2>
        <form>
          <label htmlFor="">Job Title: </label>
          <input type="type" name="job-title"/>
          <label htmlFor="">Company Name: </label>
          <input type="text" name="company-name"/>
          <label htmlFor="">Description: </label>
          <textarea placeholder="Write Something..."></textarea>
        </form>
      </div>
    )
  };
};

export default WorkHistory;
