import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import store from './redux/store'
import { Provider } from 'react-redux'
import io from 'socket.io-client'
import { useEffect, useState } from 'react'

function App() {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const newSocket = io('http://localhost:3000', {
      query: {
        token: localStorage.getItem('authorization')
          ? localStorage.getItem('authorization')
          : null,
      },
    })
    setSocket(newSocket)

    return () => {
      newSocket.disconnect()
    }
  }, [])

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
