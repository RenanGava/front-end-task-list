import { title } from "process"
import { ChangeEvent, FormEvent, useState } from "react"
import { FiUpload } from "react-icons/fi"
import { IoMdCloseCircleOutline } from "react-icons/io"
import { toast } from "react-toastify"
import { useAuthContext } from "../../contexts/AuthContext"
import { setupAPIClient } from "../../services/api"
import { Button } from "../Button"
import { Modal } from "../Modal"
import { CreateTaskButton, CreateTaskModal } from "./style"

interface CreateTaskModalProps{
    isOpen: boolean
    onRequestClose: () => void
}

export function ModalCreateTask({ 
    isOpen, 
    onRequestClose,
}: CreateTaskModalProps) {


    const { user } = useAuthContext()

    const [imageUrl, setImageUrl] = useState('')
    const [imageFile, setImageFile] = useState(null)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)

    function handleFile(event: ChangeEvent<HTMLInputElement>) {
        if (!event.target.files) {
            toast.warn("Ocorreu algum erro!")
            return
        }

        const image = event.target.files[0]

        if (!image) {
            toast.warn("Ocorreu algum erro!")
            return
        }

        if (image.type === "image/png" || image.type === "image/jpeg") {
            setImageFile(image)

            setImageUrl(URL.createObjectURL(event.target.files[0]))
        }
    }


    async function handleCreateTask(event: FormEvent) {
        event.preventDefault()

        if (title === '' || description === "" || imageFile === null) {
            toast.warn("Preencha todos os campos!")
            return
        }

        const data = new FormData()

        data.append("title", title)
        data.append("description", description)
        data.append("file", imageFile)
        data.append("user_id", user.id)

        const apiClient = setupAPIClient()
        setLoading(true)
        const response = await apiClient.post("/create/task", data)

        onRequestClose()

        setTitle('')
        setDescription('')
        setImageFile('')
        setImageUrl('')

        console.log(response.data);



    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <CreateTaskModal>
                <button className="close" onClick={onRequestClose}>
                    <IoMdCloseCircleOutline
                        size={30}
                        color="#ff3f4b"
                    />
                </button>

                <form onSubmit={handleCreateTask}>
                    <label>
                        <span>
                            <FiUpload size={20} />
                        </span>

                        <input
                            type="file"
                            accept='image/png, image/jpeg'
                            onChange={handleFile}
                        />

                        {
                            imageUrl && (
                                <img
                                    src={imageUrl}
                                    alt='i'
                                    width={150}
                                    height={150}
                                />
                            )
                        }

                    </label>
                    <input
                        type="text"
                        placeholder="Titúlo..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição Da Tarefa..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <CreateTaskButton
                        className="submit-task"
                    >
                        <Button
                            className="form--create--task"
                            onClick={handleCreateTask}
                            loading={loading}
                        >
                            Enviar
                        </Button>
                    </CreateTaskButton>
                </form>
            </CreateTaskModal>
        </Modal>
    )
}