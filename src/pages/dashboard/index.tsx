import { Header } from "../../components/Header"
import { canSSRAuth } from "../../utils/canSSRAuth"
import { Container, CreateTaskButton, IsComplete, NotComplete } from "./style"
import { useState } from "react"
import { Button } from "../../components/Button"
import { setupAPIClient } from "../../services/api"
import { ChangeStatusModal } from "../../components/ChangeStatusModal"
import { ModalCreateTask } from "../../components/CreateTaskModal"

interface TaskListProps {
    id: string,
    title: string,
    user_id: string,
    description: string,
    status: boolean,
    banner: string,
    completed_at: string
}


interface DashboardProps {
    tasks: TaskListProps[]
}


export default function Dashboard({ tasks }: DashboardProps) {

    const [taskList, setTaskList] = useState(tasks || [])
    const [changeStatusTask, setChangeStatusTask] = useState<TaskListProps>()

    const [isEditTaskOpen, setIsEditTaskOpen] = useState(false)
    const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false)


    // console.log(tasks);


    function handleSelectedTaskChangeStatus(task: TaskListProps){
        setChangeStatusTask(task)
        setIsEditTaskOpen(true)
    }


    async function handleOpenCreateTaskModal() {
        setIsCreateTaskOpen(true)
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
                        {
                            taskList.map(task => {
                                return (
                                    <tr key={task.id} onClick={() => handleSelectedTaskChangeStatus(task)}>
                                        <td>
                                            {task.status ? <IsComplete /> : <NotComplete />}
                                        </td>
                                        <td>{task.description}</td>
                                        <td>
                                            {
                                                task.completed_at ? task.completed_at : "--"
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </Container>

            <ChangeStatusModal
                isOpen={isEditTaskOpen}
                onRequestClose={() => setIsEditTaskOpen(false)}
                task={changeStatusTask}
            />

            <ModalCreateTask
                isOpen={isCreateTaskOpen}
                onRequestClose={() => setIsCreateTaskOpen(false)}
            />

            <CreateTaskButton>
                <Button
                    onClick={handleOpenCreateTaskModal}
                >
                    Add Tarefa
                </Button>
            </CreateTaskButton>

        </>
    )
}


export const getServerSideProps = canSSRAuth(async ctx => {

    const apiClient = setupAPIClient(ctx)

    const { data } = await apiClient.get('/list/tasks')


    console.log(data)

    return {
        props: {
            tasks: data
        }
    }
})