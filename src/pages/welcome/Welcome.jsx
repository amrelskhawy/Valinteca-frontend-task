import React from 'react'
import { Link } from 'react-router-dom'
import './welcome.scss'
const Welcome = () => {
    return (
        <div className='welcome-container'>
                <div className='img' />
            <div className='content'>
                <div className='heading'>
                <h3>Welcome</h3>
                <p>We’re glad you’re here! Enjoy this free prototype made with <Link>
                Anima.
                </Link>
                </p>
                </div>
                <Link to='sign-up'>
                    <button type='submit'>Get Started</button>
                </Link>
            </div>
        </div>
    )
}

export default Welcome
