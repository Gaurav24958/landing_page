import React from 'react'
import Button from './Button'

export default function Flex5() {
    return (
        <>
            <div className="last">
                <div className="leftlast">
                    <h1>Join The Ride</h1>

                    <h5>Subscribe to our weekly newsletterwith stories from our</h5>
                    <h5>latest adventures and the travel tips.</h5>
                <div className="info">
                <textarea name="Email" className='mail' cols="1"placeholder='Email' rows="1"></textarea>
                    <Button
                    name="Subscribe"/>

                </div>
                   

                </div>
                <div className="rightlast">
                    {/* <h1>Hi</h1> */}

                    <img className="lastpic" src="./Images/Tips-SinglePost_7-Featured.jpg" alt="" />


                </div>
            </div>
        </>
    )
}
