import { SiAuthy } from "react-icons/si";
import { Container, Content, FormContainer } from "./styles/style";

export default function Home() {
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
				<FormContainer>
					<input type="email"  placeholder="Digite Seu Email..." />
					<input type="password"  placeholder="Digite Seu Senha..." />
				</FormContainer>
			</Content>
		</Container>
	)
}
