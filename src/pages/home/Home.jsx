import React, {  useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './Home.scss'

const Home = () => {

    const navigate = useNavigate()
    const { username, email } = localStorage

    useEffect(() => {
        if (!username && !email) {
            navigate('/sign-up')
        } else {
            (
                <div>
                    Home Works
                </div>
            )
        }
    }, [username, email])


    return (
        <div className='home'>
            <div className='img' />
            <div className='content'>
                <div className='heading' >
                    <h3>Successfully logged in</h3>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    )



}

export default Home
