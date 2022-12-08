import React, { useState } from 'react'
import Input from '../input/Input'
import axios from 'axios'
import './SignUp.scss'
import { inputs } from '../../inputs'


const SignUp = () => {
	const [error, setError] = useState("")
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		password_confirmation: ''
	})
	const handleChange = (e) => {
		const { name, value } = e.target
		setError("")
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		function isValidEmail(email) {
			return /\S+@\S+\.\S+/.test(email);
		}

		async function postData(url = '', data = {}) {
			// Default options are marked with *
			const response = await fetch(url, {
				method: 'POST', // *GET, POST, PUT, DELETE, etc.
				headers: {
					'Content-Type': 'application/json'
					// 'Content-Type': 'application/x-www-form-urlencoded',
				},
				
				body: JSON.stringify(data) // body data type must match "Content-Type" header
			});
			return response // parses JSON response into native JavaScript objects
		}

		function isValidUserName(username) {
			let isValid = false
			if (
				username.substr(0, 1) != NaN &&
				username.substr(-1, 1) != NaN
				&& (username.length >= 5 && username.length <= 15)) {
				isValid = true
			}
			return isValid
		}


		// Validating Username Input 
		const { username, password, password_confirmation, email } = formData

		if (!isValidUserName(username)) {
			setError("Username doesn't meet out requirments")

		} else if (!isValidEmail(email)) {
			setError("It's Not a Valid Email !")
		}
		else if (!password && !password_confirmation) {
			setError("You Should Enter The Password")
		} else if (password !== password_confirmation) {
			setError("Passwords Should be Matched !!")
		} else {

			const response = {}; 
			postData('https://goldblv.com/api/hiring/tasks/register', formData)
				.then((data) => {
					console.log(data)
					if ( data.statusText === "OK" &&
					data.status===200 ) {
						window.navigator('/authenticate')
						
					}
				});

				

		}





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
				<form method='post' onSubmit={handleSubmit}>
					{
						inputs.map((input, index) => (
							<Input onChange={handleChange} value={formData[input.name]} key={index} {...input} />
						))
					}
					{error && <div className='err'>{error}</div>}
					<button type='submit'>Create Account</button>
				</form>

			</div>
		</div>
	)
}

export default SignUp
