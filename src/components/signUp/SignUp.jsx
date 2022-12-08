import React, { useState } from 'react'
import Input from '../input/Input'
import './SignUp.scss'

import { inputs } from '../../inputs'
const SignUp = () => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		password_confirmation: ''
	})
	const handleChange = (e) => { 
		const {name,value} = e.target
		setFormData((prev)=> (
			{...prev,[name]: value}
		))
		
	}
	return (
		<div className='sign-up-container'>
			<div className='img' />
			<div className='content'>
				<div className='heading'>
					<h3>Create Account</h3>
					<p>
						Go ahead and sign up, let everyone know how awesome you are!
					</p>
				</div>
				<form>
					{
						inputs.map((input, index) => (
							<Input onChange={handleChange} value={formData[input.name]} key={index} {...input} />
						))
					}
				</form>
				<button onClick={()=> console.log(formData)} type='submit'>Create Account</button>
			</div>
		</div>
	)
}

export default SignUp
