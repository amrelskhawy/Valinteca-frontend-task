import React, { useState, useContext } from 'react'
import Input from '../input/Input'
import './SignUp.scss'
import { inputs } from '../../inputs'
import Loading from '../Loading/Loading'
import { useNavigate } from 'react-router-dom'



const SignUp = () => {
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		password_confirmation: ''
	})

	const navigate = useNavigate();
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
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},

				body: JSON.stringify(data)
			});
			return response
		}
		function isNumber(str) {
			return /\d/.test(str);
		}
		function isValidUserName(username) {
			if (
				(!isNumber(username.substr(0, 1))  && !isNumber(username.substr(-1, 1)))
				&& username.length >= 5 && username.length <= 15) {
				return  true
			}
			return false
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
		}else if (!password > 8 ) {
			setError("Password should be at least 8 characters")
		}
		
		else if (password !== password_confirmation) {
			setError("Passwords Should be Matched !!")
		} else {
			setLoading(true)
			postData('https://goldblv.com/api/hiring/tasks/register', formData)
				.then((data) => {
					console.log(data)
					if (data.statusText === "OK" &&
						data.status === 200) {

						setLoading(false)
						navigate("/home");
						localStorage.setItem("username",
						formData.username)
						localStorage.setItem("email",
						formData.email)

					} else {
						setLoading(false)
						alert("Can't Regeister !!")
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
			{loading && <Loading />}
		</div>
	)
}

export default SignUp
