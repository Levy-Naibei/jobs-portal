import React, { Component } from 'react'
import './App.css'
import JobItem from './components/JobItem';

export default class App extends Component {

  state = {
    jobs: [],
  }

  async componentDidMount(){
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const url = `${cors}https://jobs.github.com/positions.json`;
    const response = await fetch(url);
    const data = await response.json()

    this.setState(() => {
      return {jobs: data};
    })
  }

  render() {

    const{jobs} = this.state;
    console.log('Jobs here ', jobs);

    return (
      <div className='app'>
        { jobs.map((job, id)=> {
          return  <JobItem  key={id} job={job}/>;
        }

        )}
      </div>
    )
  }
}
