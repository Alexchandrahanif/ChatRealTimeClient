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
import { useDispatch } from 'react-redux'
import { getOneContact } from '../redux/action/contact'
import { useSelector } from 'react-redux'
import { createChat } from '../redux/action/chat'
import { getOneUser } from '../redux/action/user'

const ChatPage = () => {
  const dispatch = useDispatch()
  const { phoneNumber } = useParams()

  let dark = localStorage.getItem('darkmode')
  const [openStiker, setOpenStiker] = useState(false)
  const [openClip, setOpenClip] = useState(false)

  const { Contact } = useSelector((state) => state.ContactReducer)
  const { User } = useSelector((state) => state.UserReducer)

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

  const [text, setText] = useState('')
  const [rowsText, setRowsText] = useState(1)

  const sendMessage = async () => {
    let body = {
      ReceiverId: Contact.Teman.id,
      message: text,
    }

    await dispatch(createChat(body))
      .then((data) =>
        message.loading('Loading', 1, () => {
          if (data?.statusCode == 201) {
            message.success(data.message, 1, () => {
              setText('')
            })
          } else {
            console.log()
          }
        })
      )
      .catch((error) => console.log(error))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (e.shiftKey) {
        setText((prevText) => prevText + '\n')
        setRowsText((prevRows) => prevRows + 1)
      } else if (text.trim() !== '') {
        sendMessage(e)
        setText('')
        setRowsText(1)
        message.success(text)
      } else {
        message.success('Teks pesan kosong')
      }
    }
  }

  useEffect(() => {
    dispatch(getOneContact(phoneNumber))
    dispatch(getOneUser(phoneNumber))
  }, [phoneNumber])

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
              {Contact.username}
            </p>
            <p className="text-[13px]  text-dark ">
              {User.statusActive == true ? 'Online' : 'Offline'}
            </p>
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
        <div>Chat dengan {phoneNumber}</div>
      </div>

      {/* Input Text */}
      <div className=" min-h-[8%] max-h-[16%]  flex justify-between border-[1px] border-t-slate-200 py-1">
        {/* Emot dan PaperClip */}
        <div className="  w-[14%] flex justify-between items-center px-3  ">
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
          <textarea
            type="text"
            placeholder="Type a message"
            autoComplete="off"
            rows={rowsText}
            className={`w-full focus:outline-none placeholder:text-[15px] text-[15px]`}
            style={{
              overflowY: rowsText > 4 ? 'scroll' : 'auto',
              maxHeight: rowsText > 4 ? '80px' : 'none',
              boxSizing: 'border-box',
            }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* Microfon/send */}
        <div className="w-[9%] flex  items-center ">
          <div
            className=" w-[50px] h-full text-[21px] flex justify-center items-center  hover:cursor-pointer hover:bg-slate-200 rounded-md"
            onClick={() => {
              text == '' ? message.success('Merekan') : sendMessage()
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
