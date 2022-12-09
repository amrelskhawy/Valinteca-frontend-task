import React from 'react'
import './input.scss'


const Input = ({ icon, ...otherProps }) => {


    return (
        <div className='input-field'>
            <span>
                {icon}
            </span>
            <input
                {...otherProps}
            />
        </div>
    )
}

export default Input
