import { useState } from "react";
import { SiAuthy } from "react-icons/si";
import { Button } from "../components/Button";
import { useAuthContext } from "../contexts/AuthContext";
import { Container, Content, FormContainer } from "./styles/style";
import { FormEvent } from 'react'
import { toast } from "react-toastify";
import { canSSRGuest } from "../utils/canSSRGuest";

import Modal from 'react-modal'


export default function Home() {

	const { signIn } = useAuthContext()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)

	async function hanldeSignIn(event: FormEvent) {
		event.preventDefault()

		if (email === '' ||  password === '') {

			toast.warn("Preencha os campos corretamente")
			return
		}

		setLoading(true)
		await signIn({ email, password })
		setLoading(false)

		setEmail('')
		setPassword('') 
	}

	return (
		<Container>
			<head>
				<title>Login</title>
			</head>


			<Content>
				<div>
					<div>
						<SiAuthy
							color="#3fffa1"
							size={80}
						/>
						<h1>Login</h1>

					</div>
				</div>
				<FormContainer onSubmit={hanldeSignIn}>
					<input
						type="email"
						placeholder="Digite Seu Email..."
						onChange={e => setEmail(e.target.value)}
					/>
					<input 
						type="password" 
						placeholder="Digite Seu Senha..." 
						onChange={e => setPassword(e.target.value)}
					/>
					<Button
						loading={loading}
					>
						Entrar
					</Button>
				</FormContainer>
			</Content>
		</Container>
	)
}

export const getServerSideProps = canSSRGuest(async ctx =>{
	return {
		props: {}
	}
})

Modal.setAppElement(document.getElementById("modal"))