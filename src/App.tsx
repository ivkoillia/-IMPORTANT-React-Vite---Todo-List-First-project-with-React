import { RouterProvider, createRouter } from '@tanstack/react-router'
// Импортируем сгенерированное дерево маршрутов
import { routeTree } from './routeTree.gen'

// Создаем экземпляр роутера
const router = createRouter({ routeTree })

// Регистрируем роутер для типизации (чтобы Link и useNavigate знали твои пути)
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  return (
    // Провайдер, который "раздает" роутинг всему приложению
    <RouterProvider router={router} />
  )
}

export default App