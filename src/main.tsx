import ReactDOM from 'react-dom/client'
import { Link, RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

// Set up a Router instance
const router = createRouter({
  defaultNotFoundComponent: NotFound,
  routeTree,
  defaultPreload: 'intent',
})

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-400 to-pink-500 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Oops! Looks like Unc Kevin misplaced this page...</p>
        <Link to="/" className="bg-yellow-400 hover:bg-yellow-500 text-purple-600 font-bold py-2 px-4 rounded">
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<RouterProvider router={router} />)
}
