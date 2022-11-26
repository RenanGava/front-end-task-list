import { Header } from "../../components/Header"
import { canSSRAuth } from "../../utils/canSSRAuth"
import { ChangeStatus, Container, IsComplete, ModalContent, ModalContentContainer, ModalHeaderContainer, NotComplete } from "./style"
import { Modal } from "../../components/Modal"
import { useState } from "react"
import { BsFillPencilFill, BsTrash } from 'react-icons/bs'
import { IoMdCloseCircleOutline } from "react-icons/io"



export default function Dashboard() {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [isComplete, setIsComplete] = useState(true)

    function handleToggleValue(){
        setIsComplete(!isComplete)
        
    }

    return (
        <>
            <Header />
            <Container>
                <table>
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Título</th>
                            <th>Conclusão</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr onClick={() => setIsModalOpen(true)}>
                            <td>
                                {isComplete ? <IsComplete /> : <NotComplete />}
                            </td>
                            <td>Estudar Programação</td>
                            <td> 12/10/2020</td>
                        </tr>
                        <tr>
                            <td>
                                {isComplete ? <IsComplete /> : <NotComplete />}
                            </td>
                            <td>Estudar Programação</td>
                            <td> 12/10/2020</td>
                        </tr>
                        <tr>
                            <td>
                                {isComplete ? <IsComplete /> : <NotComplete />}
                            </td>
                            <td>Estudar Programação</td>
                            <td> 12/10/2020</td>
                        </tr>
                        <tr>
                            <td>
                                {isComplete ? <IsComplete /> : <NotComplete />}
                            </td>
                            <td>Estudar Programação</td>
                            <td> 12/10/2020</td>
                        </tr>
                        <tr>
                            <td>
                                {isComplete ? <IsComplete /> : <NotComplete />}
                            </td>
                            <td>Estudar Programação</td>
                            <td> 12/10/2020</td>
                        </tr>
                    </tbody>
                </table>
            </Container>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                
                
            >
                <ModalContent>
                    <button className="close" onClick={ () => setIsModalOpen(false)}>
                        <IoMdCloseCircleOutline
                            size={30}
                            color="#ff3f4b"
                        />
                    </button>
                    <ModalHeaderContainer>
                        <div className="title">
                            <p>Title</p>
                        </div>
                        <div className="icons">
                            <BsFillPencilFill
                                size={20}
                                color="#3fffa3"
                            />
                            <BsTrash
                                size={20}
                                color="#ff3f4b"
                            />
                        </div>

                    </ModalHeaderContainer>
                    <ModalContentContainer>
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Dicta facilis eum tenetur quae
                        sapiente fuga accusantium.
                        Pariatur consequatur at explicabo
                        esse commodi maiores. Facere, corporis
                        id. Totam ex consectetur qui omnis voluptates
                        cupiditate mollitia soluta necessitatibus
                        pariatur nisi sunt beatae, minima placeat
                        sapiente alias nulla reiciendis autem, ipsa
                        animi vitae nobis aspernatur! Pariatur
                        commodi sapiente ratione nostrum ullam
                        soluta earum consectetur voluptate,
                        temporibus, perspiciatis quia molestiae
                        possimus repellat odio aut.
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Dicta facilis eum tenetur quae
                        sapiente fuga accusantium.
                        Pariatur consequatur at explicabo
                        esse commodi maiores. Facere, corporis
                        id. Totam ex consectetur qui omnis voluptates
                        cupiditate mollitia soluta necessitatibus
                        pariatur nisi sunt beatae, minima placeat
                        sapiente alias nulla reiciendis autem, ipsa
                        animi vitae nobis aspernatur! Pariatur
                        commodi sapiente ratione nostrum ullam
                        soluta earum consectetur voluptate,
                        temporibus, perspiciatis quia molestiae
                        possimus repellat odio aut.
                    </ModalContentContainer>
                    <ChangeStatus
                        onClick={handleToggleValue}
                        status={isComplete}
                    >
                        <span></span>
                    </ChangeStatus>
                </ModalContent>
            </Modal>
        </>
    )
}


export const getServerSideProps = canSSRAuth(async ctx => {
    return {
        props: {}
    }
})