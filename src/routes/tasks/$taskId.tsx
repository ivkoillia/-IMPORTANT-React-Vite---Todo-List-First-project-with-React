import { createFileRoute } from '@tanstack/react-router'

import TaskPage from '../../components/Todo/pages/TaskPage'

import { useTodoStore, selectTaskById } from '../../store/useTodoStore'
import TaskNotFoundPage from '../../components/Todo/pages/TaskNotFoundPage'
import type { ITask } from '../../types/Todo/types'


export const Route = createFileRoute('/tasks/$taskId')({
  component: TaskComponent,
})

function TaskComponent() {
  const { taskId } = Route.useParams()

  const task = useTodoStore((state) => selectTaskById(state, taskId));

  const Page = ( task ) ? TaskPage : TaskNotFoundPage;

  return (
    <Page task={task as ITask} />
  )
}