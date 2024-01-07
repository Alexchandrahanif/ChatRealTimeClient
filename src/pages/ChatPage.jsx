import React from 'react'
import { useParams } from 'react-router-dom'

const ChatPage = () => {
  const { id } = useParams()
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div>Halaman Chat Dengan Id {id}</div>
    </div>
  )
}

export default ChatPage
