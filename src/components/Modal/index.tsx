import { Container } from "./style";
import { ReactNode } from 'react'

interface ModalProps{
    isOpen: boolean;
    onRequestClose: () => void
    children: ReactNode
}

export function Modal({ isOpen, onRequestClose, children,  }: ModalProps) {
    return (
        <Container
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
                overlay:{
                    backgroundColor: "rgba(0,0,0,0.5)",
                }
            }}
            ariaHideApp={false}
        >
            {children}
        </Container>
    )
}