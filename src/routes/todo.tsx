import { createFileRoute } from '@tanstack/react-router'

import TodoPage from '../components/Todo/pages/TodoPage'

export const Route = createFileRoute('/todo')({
  component: TodoPage,
})
