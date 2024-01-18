import React from 'react'

const ProfilePage = () => {
  const toggleFullscreen = () => {
    const element = document.documentElement

    if (!document.fullscreenElement) {
      element.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
    } else {
      document.exitFullscreen()
    }
  }

  return (
    <div className="container mx-auto my-4 text-center">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={toggleFullscreen}
      >
        Toggle Fullscreen
      </button>
      {/* Konten aplikasi lainnya */}
    </div>
  )
}

export default ProfilePage
