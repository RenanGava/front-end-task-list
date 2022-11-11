import { ButtonHTMLAttributes, ReactNode } from "react";
import { FaSpinner } from 'react-icons/fa'
import { ButtonSubmit } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    loading?: boolean
    children: ReactNode
}


export function Button({ children, loading, ...rest }: ButtonProps) {
    return(
        <ButtonSubmit
            disabled={loading}
            {...rest}
        >
            {
                loading ? (
                    <FaSpinner color={'#1d1d2e'} size={16} />
                ):(
                    <a>{children}</a>
                )
            }
        </ButtonSubmit>
    )
}