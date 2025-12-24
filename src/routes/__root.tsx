import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <nav>
        {/* Link автоматически проверяет наличие путей! */}
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/todo">Todo</Link>
      </nav>
      
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>

      <TanStackRouterDevtools />
    </>
  ),
})