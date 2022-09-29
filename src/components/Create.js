import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export const Create = (props) => {
    const formInitialDetails = {
        eventName: '',
        start: '',
        end: '',
        location: '',
        url: '',
        description: '',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    
    const [buttonText, setButtonText] = useState('Create your event!');

    const [status, setStatus] = useState({});

    const [redirect, setRedirect] = useState('/create');

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
        props.onChange({
            ...formDetails,
            [category]: value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Creating...');
        setButtonText("Send Message");
        setStatus({success: true, message: "Event created! Visit your event here"})
        setRedirect('/event')
        props.setEventDetails(formInitialDetails);
    };

    return (
        <div className='create-event' >
            <Link to="/" ><Button className='btn btn-light' >Cancel</Button></Link>
            <h1 className='headline' >Create your<span className='fancy-text' > event</span></h1>
            <section className="create-event-form align-contents-center" id="create-event-form" >
                <Container >
                    <Row className="align-items-center" >
                        <Col md={12} >
                            <form onSubmit={handleSubmit} >
                                <Row>
                                    <Col sm={12} className="px-2" >
                                        <h2 className='form-headline' >🎉 My event is called</h2>
                                        <input type="text" value={formDetails.eventName} required="required" onChange={(e) => onFormUpdate('eventName', e.target.value)} />
                                    </Col>
                                    <Col sm={12} className="px-2" >
                                        <h2 className='form-headline' >🗓 It starts at</h2>
                                        <input type="date" value={formDetails.start} required="required" onChange={(e) => onFormUpdate('start', e.target.value)} />
                                    </Col>
                                    <Col sm={12} className="px-2" >
                                        <h2 className='form-headline' >🏁 It ends at <span className='optional'>(optional)</span></h2>
                                        <input type="date" value={formDetails.end} placeholder="Email" onChange={(e) => onFormUpdate('end', e.target.value)} />
                                    </Col>
                                    <Col sm={12} className="px-2" >
                                        <h2 className='form-headline' >📍 It’s happening at <span className='optional'>(optional)</span></h2>
                                        <input type="text" value={formDetails.location} placeholder="Location" onChange={(e) => onFormUpdate('location', e.target.value)} />
                                    </Col>
                                    <Col sm={12} className="px-2" >
                                        <h2 className='form-headline' >🔗 Add a URL link <span className='optional'>(optional)</span></h2>
                                        <input type="text" value={formDetails.url} placeholder="URL" onChange={(e) => onFormUpdate('url', e.target.value)} />
                                    </Col>
                                    <Col sm={12} className="px-2" >
                                        <h2 className='form-headline' >✏️ Description <span className='optional'>(optional)</span></h2>
                                        <textarea type="text" row="6" value={formDetails.description} onChange={(e) => onFormUpdate('description', e.target.value)} />
                                    </Col>
                                    {
                                        status.message ? (
                                            <Link to={redirect} ><button className="submit-event">{status.message}</button></Link>
                                        ) : (
                                            <button type="submit" className='submit-event' ><span>{buttonText}</span></button>
                                        )
                                    }
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
