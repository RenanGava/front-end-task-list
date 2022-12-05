import { useState, useEffect } from "react";
import { BsFillPencilFill, BsTrash } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { setupAPIClient } from "../../services/api";
import { Modal } from "../Modal";
import { ChangeStatus, LoadingStatus, ModalContent, ModalContentContainer, ModalHeaderContainer } from "./style";
import { VscLoading } from 'react-icons/vsc'
import Router from "next/router";

interface TaskListProps {
    id: string,
    title: string,
    user_id: string,
    description: string,
    status: boolean,
    banner: string,
    completed_at: string
}


// type StatusChangedProps = Omit<TaskListProps, 'banner' | 'title' | 'user_id' | 'description'>


interface ChangeStatusModalProps {
    isOpen: boolean,
    onRequestClose: () => void
    task: TaskListProps
}

export function ChangeStatusModal({ isOpen, onRequestClose, task }: ChangeStatusModalProps) {
    // isEditTaskOpen
    // () => setIsEditTaskOpen(false)

    const [isComplete, setIsComplete] = useState<boolean>(task?.status)
    const [loading, setLoading] = useState(false)
    // const [setStatus, setLoading] = useState(false)

    console.log(isComplete);
    
    useEffect( () =>{
        setIsComplete(task?.status)
    },[task?.status])
    
    async function handleToggleValue(taskSelected: TaskListProps) {

        setIsComplete(!isComplete)


        // usa para pegar a data data forma que é criada pelo banco de dados
        const currentTime = new Date().toISOString()
        const apiClient = setupAPIClient()
        const data = {
                task_id: taskSelected.id,
                completed_at: currentTime,
                status: !isComplete
        }


        setLoading(true)

        const response = await apiClient.put('/update/task', data)

        console.log(response.data);
        

        setLoading(false)

        onRequestClose()

    }

    // console.log(task);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <ModalContent>
                <button className="close" onClick={onRequestClose}>
                    <IoMdCloseCircleOutline
                        size={30}
                        color="#ff3f4b"
                    />
                </button>
                <ModalHeaderContainer>
                    <div className="title">
                        <p>Title</p>
                    </div>
                    {/* <div className="icons">
                        <BsFillPencilFill
                            size={20}
                            color="#3fffa3"
                        />
                        <BsTrash
                            size={20}
                            color="#ff3f4b"
                        />
                    </div> */}

                </ModalHeaderContainer>
                <ModalContentContainer>
                    <p>
                        {
                            isOpen && task.description
                        }
                    </p>
                </ModalContentContainer>
                <ChangeStatus
                    onClick={() => handleToggleValue(task)}
                    status={isComplete}
                >
                    <span>
                        {
                            loading && <LoadingStatus />
                        }
                    </span>
                </ChangeStatus>
            </ModalContent>
        </Modal>
    )
}