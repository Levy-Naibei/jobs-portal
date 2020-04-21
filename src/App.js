import React, { Component } from 'react'
import './App.css'
import JobItem from './components/JobItem';
import RingLoader from 'react-spinners/RingLoader'
import { css } from "@emotion/core";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 10% auto;
  border-color: red;
`;


export default class App extends Component {

  state = {
    loading: true,
    jobs: []
    
  }

  async componentDidMount(){
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const url = `${cors}https://jobs.github.com/positions.json`;
    const response = await fetch(url);
    const data = await response.json()

    this.setState(() => {
      return {loading: false, jobs: data};
    })
  }

  render() {

    if(this.state.loading){
  
        return <RingLoader
          css={override}
          size={80}
          color={"#50E3C2"}
        />
    }

    else{

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
}
