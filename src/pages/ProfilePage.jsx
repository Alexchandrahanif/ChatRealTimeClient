import React, { useState, useEffect } from 'react'
import axios from 'axios'
import io from 'socket.io-client'

const ProfilePage = () => {
  const [imageFile, setImageFile] = useState(null)
  const [progress, setProgress] = useState(0)
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const newSocket = io('http://localhost:5173')
    setSocket(newSocket)

    return () => {
      newSocket.disconnect()
    }
  }, [])

  console.log(imageFile)
  useEffect(() => {
    if (socket) {
      socket.on('progress', (percentage) => {
        setProgress(percentage)
      })
    }

    return () => {
      if (socket) {
        socket.off('progress')
      }
    }
  }, [socket])

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setImageFile(file)
  }

  const handleUpload = async () => {
    try {
      const formData = new FormData()
      formData.append('messageImage', imageFile)

      const response = await axios.post(
        'http://localhost:3000/chat',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: localStorage.getItem('authorization'),
          },
          onUploadProgress: (progressEvent) => {
            const percentage = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            )
            setProgress(percentage)

            if (socket) {
              socket.emit('clientProgress', percentage)
            }
          },
        }
      )

      console.log('Upload successful', response.data)
    } catch (error) {
      console.error('Error uploading file', error)
    }
  }

  return (
    <div className="container mx-auto my-4 text-center">
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload File</button>
        {progress > 0 && <p>Upload Progress: {progress}%</p>}
      </div>
    </div>
  )
}

export default ProfilePage
