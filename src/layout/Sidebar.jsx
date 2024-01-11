import { Input, Popover, Tooltip, message } from 'antd'
import React, { useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { FiEdit, FiLogOut } from 'react-icons/fi'
import { PiChecksBold } from 'react-icons/pi'
import { CiLogout } from 'react-icons/ci'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import potongString from '../utils/String'

let data = [
  {
    id: 1,
    nama: 'Alex Chandra',
    jam: '10:10',
    last: 'Oke Bang',
  },
  { id: 2, nama: 'Alex Chandra', jam: '10:10', last: 'Oke Bang' },
  { id: 3, nama: 'Alex Chandra', jam: '10:10', last: 'Oke Bang' },
  {
    id: 4,
    nama: 'Alex Chandra',
    jam: '10:10',
    last: 'Oke Bang mantap bener dah pokoknya mantap',
  },
  {
    id: 5,
    nama: 'Alex Chandra',
    jam: '10:10',
    last: 'Oke Bang mantap bener dah pokoknya mantap',
  },
]

const Sidabar = () => {
  const navigate = useNavigate()

  const [selectedItemId, setSelectedItemId] = useState(null)
  const [isDark, setIsDark] = useState(false)

  const handleDarkMode = () => {
    setIsDark(!isDark)
    const html = document.querySelector('html')
    if (!isDark) {
      html.classList.add('dark')
      localStorage.setItem('darkmode', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('darkmode', 'light')
    }
  }

  const handleItemClick = (id) => {
    navigate(`/${id}`)
    setSelectedItemId(id)
  }
  const handleLogout = () => {
    message.success(
      `Selamat datang kembali ${localStorage.getItem('username')}`
    )
    localStorage.clear()
    navigate('/login')
  }

  return (
    <div className="w-full h-full p-3 dark:bg-bgDark">
      <div className=" w-full h-[18%]">
        <div className="h-[50px]  p-1 flex justify-between items-center ">
          <div>
            <p className="text-xl font-semibold dark:text-white">Chats</p>
          </div>
          <div className="flex gap-5 text-xl font-light dark:text-white">
            <Tooltip placement="rightTop" title={'New Chat'}>
              <button>
                <FiEdit />
              </button>
            </Tooltip>

            <Tooltip placement="rightTop" title={'Dark Mode'}>
              <button
                className="font-medium cursor-pointer  rounded-md border-slate-300 shadow-md"
                onClick={() => handleDarkMode()}
              >
                {isDark ? <MdOutlineDarkMode /> : <MdDarkMode />}
              </button>
            </Tooltip>

            <Tooltip placement="rightTop" title={'Logout'}>
              <button onClick={() => handleLogout()}>
                <FiLogOut />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className={`relative w-[95%] mx-auto`}>
          <input
            type="text"
            placeholder="Search or start a new chat"
            className={`w-full py-2 pl-8 pr-4 rounded-full focus:outline-none ${
              isDark
                ? 'bg-bgDark text-white'
                : 'bg-white dark:bg-bgDark text-black dark:text-white'
            }`}
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <SearchOutlined
              className={`h-5 w-5 ${isDark ? 'text-white' : 'text-black'}`}
            />
          </span>
        </div>
      </div>
      <div className="w-full h-[82%] overflow-y-scroll  ">
        <div className="flex flex-col gap-1">
          {data
            ? data?.map((el) => {
                const isSelected = el.id === selectedItemId

                return (
                  <div
                    className={`h-[60px] w-full flex p-2 rounded-lg ${
                      isSelected ? 'bg-slate-100' : ''
                    }`}
                    key={el.id}
                    onClick={() => handleItemClick(el.id)}
                  >
                    <div className="w-[15%] flex justify-center items-center">
                      <img
                        src="https://image.gambarpng.id/pngs/gambar-transparent-boy-cartoon-illustration_46930.png"
                        alt="profile"
                        className="w-[45px] h-[45px] rounded-full"
                      />
                    </div>
                    <div className="w-[85%] px-2 ">
                      <div className=" w-full flex justify-between">
                        <div>
                          <p className="text-[15px] font-semibold">{el.nama}</p>
                        </div>
                        <div>
                          <p className="text-[12px] font-poppins text-slate-600">
                            {el.jam}
                          </p>
                        </div>
                      </div>
                      <div className=" w-full flex items-center gap-1 text-slate-600">
                        <div>
                          <p className="text-[13px] ">
                            <PiChecksBold />
                          </p>
                        </div>
                        <div>
                          <p className="text-[13px] ">
                            {potongString(el.last, 35)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            : null}
        </div>
      </div>
    </div>
  )
}

export default Sidabar
