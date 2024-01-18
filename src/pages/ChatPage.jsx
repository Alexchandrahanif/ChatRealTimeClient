import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { IoVideocamOutline, IoVideocam } from 'react-icons/io5'
import { SlEmotsmile } from 'react-icons/sl'
import {
  HiOutlinePhoto,
  HiOutlineDocument,
  HiOutlineCamera,
} from 'react-icons/hi2'
import { IoIosContacts } from 'react-icons/io'

import {
  HiOutlineMicrophone,
  HiMiniMicrophone,
  HiPhone,
  HiOutlinePhone,
  HiOutlineVideoCamera,
  HiVideoCamera,
} from 'react-icons/hi2'

import { AiOutlinePaperClip } from 'react-icons/ai'
import { VscSend } from 'react-icons/vsc'
import { message, Popover } from 'antd'

const ChatPage = () => {
  const { id } = useParams()

  let dark = localStorage.getItem('darkmode')

  const [text, setText] = useState('')
  const [openStiker, setOpenStiker] = useState(false)
  const [openClip, setOpenClip] = useState(false)

  const handleOpenStiker = (newOpen) => {
    setOpenStiker(newOpen)
  }
  const handleOpenClip = (newOpen) => {
    setOpenClip(newOpen)
  }

  let contentStiker = (
    <div>
      <div>Stiker</div>
    </div>
  )

  let contentClip = (
    <div className="w-[100px] ">
      {/* Photo */}
      <button
        className="p-1 w-full flex items-center  h-[32px] font-medium cursor-pointer  rounded-md  gap-1 hover:bg-slate-100"
        // onClick={() => handleLogout()}
      >
        <HiOutlinePhoto /> Photos
      </button>

      {/* Camera */}
      <button
        className="p-1 w-full flex items-center  h-[32px] font-medium cursor-pointer  rounded-md  gap-1 hover:bg-slate-100"
        // onClick={() => handleLogout()}
      >
        <HiOutlineCamera /> Camera
      </button>

      {/* Contact */}
      <button
        className="p-1 w-full flex items-center  h-[32px] font-medium cursor-pointer  rounded-md  gap-1 hover:bg-slate-100"
        // onClick={() => handleLogout()}
      >
        <IoIosContacts /> Contact
      </button>

      {/* Document */}
      <button
        className="p-1 w-full flex items-center  h-[32px] font-medium cursor-pointer  rounded-md  gap-1 hover:bg-slate-100"
        // onClick={() => handleLogout()}
      >
        <HiOutlineDocument /> Document
      </button>
    </div>
  )

  return (
    <div className="w-full h-full flex flex-col justify-between border-l-[1.5px] border-slate-200 ">
      {/* Header */}
      <div className="h-[10%]  flex justify-between px-5 py-2 border-b-[1.5px] border-slate-200">
        {/* profile */}
        <div className="flex justify-center items-center gap-3">
          <div>
            <img
              src="https://image.gambarpng.id/pngs/gambar-transparent-boy-cartoon-illustration_46930.png"
              alt="profile"
              className="w-[40px] h-[40px] rounded-full"
            />
          </div>
          <div>
            <p className="text-[15px] font-semibold mb-[-2px]">
              Alex Chandra Hanif
            </p>
            <p className="text-[13px]  text-dark ">online/offline</p>
          </div>
        </div>
        {/* Phone/Video */}
        <div className="h-full flex shadow-sm mr-2">
          <div className=" w-[50px] text-[17px] flex justify-center items-center  border-[1px] border-slate-200 hover:cursor-pointer hover:bg-slate-100 rounded-l-md">
            <HiOutlinePhone />
          </div>
          <div className=" w-[50px] text-[17px] flex justify-center items-center  border-[1px] border-slate-200 hover:cursor-pointer hover:bg-slate-100 rounded-r-md">
            <HiOutlineVideoCamera />
          </div>
        </div>
      </div>

      {/* Chat */}
      <div className="flex justify-center items-center">
        <div>Chat dengan {id}</div>
      </div>

      {/* Input Text */}
      <div className="h-[8%]  flex justify-between border-[1px] border-t-slate-200">
        {/* Emot dan PaperClip */}
        <div className=" h-full w-[14%] flex justify-between items-center px-3 py-1 ">
          <Popover
            content={contentStiker}
            title="Emoji"
            trigger="click"
            placement="bottomLeft"
            open={openStiker}
            onOpenChange={handleOpenStiker}
          >
            <div className=" h-full w-[50px] text-[21px] flex justify-center items-center  hover:cursor-pointer hover:bg-slate-200 rounded-md">
              <SlEmotsmile />
            </div>
          </Popover>

          <Popover
            content={contentClip}
            trigger="click"
            placement="bottomLeft"
            open={openClip}
            onOpenChange={handleOpenClip}
          >
            <div className=" h-full w-[50px] text-[21px] flex justify-center items-center  hover:cursor-pointer hover:bg-slate-200 rounded-md">
              <AiOutlinePaperClip />
            </div>
          </Popover>
        </div>

        {/* Inputan */}
        <div className="w-full flex justify-center items-center">
          <input
            type="text"
            placeholder="Type a message"
            autoComplete="off"
            className={`w-full focus:outline-none placeholder:text-[15px] text-[15px] `}
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
          />
        </div>

        {/* Microfon/send */}
        <div className="w-[9%] h-full flex  items-center  py-1">
          <div
            className=" h-full w-[50px] text-[21px] flex justify-center items-center  hover:cursor-pointer hover:bg-slate-200 rounded-md"
            onClick={() => {
              message.success('Mulai Merekam')
            }}
          >
            {text == '' ? <HiMiniMicrophone /> : <VscSend />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatPage
