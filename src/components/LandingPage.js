import React from 'react';
import { Button } from 'react-bootstrap';
import { ReactComponent as LandingImage } from '../assets/landing-page.svg'
import { Link } from 'react-router-dom';

export const LandingPage = () => {
    return (
        <div className="landing-page" >
            <div className='landing-page-header' >
                <h1 className='headline headline1' >Imagine if </h1><span className='fancy-text' >Snapchat</span><h1 className='headline'> had events.</h1>
                <h2 className='byline' >
                    Easily host and share events with your friends across any social media.
                </h2>
            </div>
            <div className='create-event-display' >
                <LandingImage className="landing-page-image" />
                <Link to="/create" ><Button className='create-event-button' >🎉 Create my event</Button></Link>
            </div>
        </div>
    )
}
