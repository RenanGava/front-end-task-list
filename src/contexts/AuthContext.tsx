import Router from "next/router";
import { destroyCookie } from "nookies";
import { createContext, ReactNode, useState } from "react";
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

interface SignUpProps{
    email: string,
    name: string,
    password: string
}

interface AuthContextData {
    // user: UserProps | undefined
    signUp: (credentiasl: SignUpProps) => Promise<void>
    signOut: () => void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function signOut(){
    try {
        destroyCookie(undefined,"@nextauth.token")
        Router.push('/')
    } catch (err) {
        console.log(err);
        
    }
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>()

    async function signUp({ email, name, password }:SignUpProps) {
        try{
            const response = await api.post('/user',{
                email, 
                name, 
                password
            })
    
            console.log('Dados Cadastrados com sucesso ->', response.data);
    
            Router.push('/')
    
            toast.success('Usuario criado com sucesso 🥳')
        }catch(err){
            console.log(err);
            toast.error('Alguma coisa deu errado 🤦‍♂️')
        }
        
        
    }


    return(
        <AuthContext.Provider value={{signUp, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}