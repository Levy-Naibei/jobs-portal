import React, { Component } from 'react'
import Truncate from 'react-truncate';
import renderHTML from 'react-render-html';
import './card.scss';
import jobs from '../assets/jobs.jpeg';

export default class JobItem extends Component {

    render() {
        // passing data from parent to child component
        const{job}= this.props;

        // destructuring props
        const{type, url, company, company_url, location, title, description,
             how_to_apply, company_logo} = job;

    
        return (
            <div className="main-content">
                <div className='card_header'>
                    <div className='company_logo'>
                        { company_logo ?
                            <img className='card_img' alt='logo' src = {company_logo} /> :
                            <img className='card_img' alt='no-logo' src = {jobs} />
                        }
                    </div>

                    <div className="job_title">{title} </div>

                    <div className="job_time">{type} </div>    
                </div>

                <div className="company_name">
                    <a href={company_url} target="_blank" rel="noopener noreferrer">{company}</a>
                </div>

                <div className="job_location">{location} </div>
    
                <div className='job_description'>
                    <Truncate 
                        lines={3} 
                        ellipsis={
                        <span>
                            ... <a href={url} target="_blank" rel="noopener noreferrer">Read more</a>
                        </span>
                        }
                        >
                            {renderHTML(description)}
                    </Truncate>
                </div>

                <div className='card_footer'>
                    <div className='application_link'> 
                        <span style={{fontWeight:'bold'}}>How to apply:</span>
                        <p className="apply">{renderHTML(how_to_apply)}</p>
                    </div>
                </div>
           </div>

        )
    }
}
