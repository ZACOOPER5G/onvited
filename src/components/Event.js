import React from 'react';
import { Link } from 'react-router-dom'

export const Event = (props) => {
    return (
        <div className='event-details'>
            <h1 className='headline' >🎉 Here is your event... Invite all your friends!</h1>
            <h2>{props.eventName}</h2>
            <div className='details' >
                <img className='emoji' src='assets/calendar.png' />
                <div className="inner-details" >
                    <h2>{props.eventStart}</h2><p>{props.eventEnd && props.eventEnd}</p>
                </div>
            </div>
                <div className='details'>
                    <img className='emoji' src='assets/pin.png' />
                    <div className="inner-details">
                        <h2>Location</h2><p>{props.eventLocation}</p>
                    </div>
                </div>
                <div className='details' >
                    <img className='emoji' src='assets/url.png' />
                    <div className="inner-details">
                        <h2>Link</h2>
                        <p>{props.eventUrl}</p>
                    </div>
                </div>
                <h2>Description: {props.eventDescription}</h2>
            <Link to="/" ><button className='create-event-button-event'>Create another event?</button></Link>
        </div>
    )
}
