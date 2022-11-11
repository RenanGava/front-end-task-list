import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { GlobalStyle } from '../../styles/global'
import { AuthProvider } from '../contexts/AuthContext'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer autoClose={3000}/>
      <GlobalStyle/>
    </AuthProvider>
  )
}
