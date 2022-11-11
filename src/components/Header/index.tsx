import { Container, Logo, User, ContentContainer } from "./style";
import { SiAuthy } from 'react-icons/si'
import { useEffect, useState } from "react";



export function Header() {


    return (
        <Container>
            <ContentContainer>
                <Logo>
                    <div>
                        <SiAuthy
                            color="#3fffa1"
                            size={50}
                        />
                        <h1>Task</h1>

                    </div>
                </Logo>
                <User>
                    <div>
                        Renan D. Gava
                        <span>
                            <SiAuthy
                                color="#3fffa1"

                                size={22}
                            />

                        </span>
                    </div>
                </User>
            </ContentContainer>
        </Container>
    )
}