import { FormEvent, useContext, useState } from "react";
import { SiAuthy } from "react-icons/si";
import { AuthContext } from "../../contexts/AuthContext";
import { Container, Content, FormContainer } from "./style";
import { toast } from 'react-toastify'
import { Button } from "../../components/Button";

export default function SignUp() {
	
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)

	const { signUp } = useContext(AuthContext)

	async function handleRegister(event: FormEvent){
		event.preventDefault()

		if(name === '' || email === '' || password === ''){
			toast.warn('Preencha Os campos Corretament 😁')
		}


		setLoading(true)
		await signUp({name, email, password})
		setLoading(false)
	}
	return (
		<Container>
			<head>
				<title>Register</title>
			</head>


			<Content>
				<div>
					<div>
						<SiAuthy
							color="#3fffa1"
							size={80}
						/>
						<h1>Register</h1>

					</div>
				</div>
				<FormContainer onSubmit={handleRegister}>
					<input 
						type="text"
						value={name}
						onChange={(e) => 
						setName(e.target.value)} 
						placeholder="Digite Seu Nome..."
					/>
					<input 
						type="email"
						value={email}  
						onChange={(e) => setEmail(e.target.value)} 
						placeholder="Digite Seu Email..." 
					/>
					<input 
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)} 
						placeholder="Digite Seu Senha..." 
					/>
					
					<Button
						loading={loading}
					>
						Register
					</Button>
				</FormContainer>
			</Content>
		</Container>
	)
}
