import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { GlobalStyle, theme } from '../../styles/global'
import { AuthProvider } from '../contexts/AuthContext'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'
import { TaskProvider } from "../contexts/TaskFunctions"

export default function App({ Component, pageProps }: AppProps) {

	// para não dar erro com o react-renderizando antes do servidor.
	const [initialRender, setInitialRender] = useState(false)

	useEffect(() => {
		setInitialRender(true)
	}, [])

	if (!initialRender) {
		return null
	} else {
		return (
			<AuthProvider>
				<TaskProvider>
					<ThemeProvider theme={theme}>
						<Component {...pageProps} />
						<ToastContainer autoClose={3000} />
						<GlobalStyle />
					</ThemeProvider>
				</TaskProvider>
			</AuthProvider>
		)
	}
}
