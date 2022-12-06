import Router from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify"

import { api } from "../services/apiClient";

interface AuthProviderProps {
    children: ReactNode
}

interface UserProps {
    id: string,
    name: string,
    email: string
}

interface SignInProps {
    email: string,
    password: string
}

interface SignUpProps {
    email: string,
    name: string,
    password: string
}

interface AuthContextData {
    user: UserProps | undefined
    signUp: (credentiasl: SignUpProps) => Promise<void>
    signIn: (credentiasl: SignInProps) => Promise<void>
    signOut: () => void
    isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function signOut() {
    try {
        destroyCookie(undefined, "@nextauth.token")
        Router.push('/')
    } catch (err) {
        console.log(err);

    }
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user

    useEffect(() => {

        const { "@nextauth.token": token } = parseCookies()

        if(token){
            api.get('/user/me').then(res =>{
                const { id, name, email } = res.data

                setUser({
                    id,
                    name, 
                    email
                })
            }).catch(() =>{
                signOut()
            })
        }

    }, [])

    async function signIn({ email, password }: SignInProps) {

        // console.log('Funcionou', { email, password });

        try {
            const response = await api.post('/session', {
                email,
                password
            })

            const { id, name, token } = response.data

            setCookie(undefined, "@nextauth.token", token, {
                maxAge: 60 * 60 * 24 * 30,
                path: "/"
            })

            setUser({
                id,
                email,
                name
            })

            api.defaults.headers["Authorization"] = `Bearer ${token}`

            toast.success("Bem-vindo A sua lista de tarefas", { delay: 1000 })

            Router.push("/dashboard")


        } catch (err) {
            toast.error('Parece que Este usuário está incorreto! 🤷‍♀️ ')
        }

    }

    async function signUp({ email, name, password }: SignUpProps) {
        try {
            const response = await api.post('/user', {
                email,
                name,
                password
            })

            console.log('Dados Cadastrados com sucesso ->', response.data);

            Router.push('/')

            toast.success('Usuario criado com sucesso 🥳')
        } catch (err) {
            console.log(err);
            toast.error('Alguma coisa deu errado 🤦‍♂️')
        }


    }


    return (
        <AuthContext.Provider value={{ signUp, signOut, signIn, user, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {

    const context = useContext(AuthContext)

    return context
}