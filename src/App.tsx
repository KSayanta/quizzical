import { RouterProvider } from 'react-router'
import { router } from './routes'

export default function App() {
  return (
    <main className='grid__main'>
      <RouterProvider router={router} />
    </main>
  )
}
