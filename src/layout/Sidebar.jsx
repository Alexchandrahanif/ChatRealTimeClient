import { Input, Popover, Tooltip, message } from 'antd'
import React, { useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { FiEdit, FiLogOut } from 'react-icons/fi'
import { PiChecksBold } from 'react-icons/pi'
import { CiLogout } from 'react-icons/ci'
import { RiContactsBookLine, RiContactsBookFill } from 'react-icons/ri'
import { HiEllipsisVertical } from 'react-icons/hi2'
import { MdDarkMode, MdOutlineDarkMode, MdManageAccounts } from 'react-icons/md'
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
  {
    id: 6,
    nama: 'Alex Chandra',
    jam: '10:10',
    last: 'Oke Bang mantap bener dah pokoknya mantap',
  },
  {
    id: 7,
    nama: 'Alex Chandra',
    jam: '10:10',
    last: 'Oke Bang mantap bener dah pokoknya mantap',
  },
  {
    id: 8,
    nama: 'Alex Chandra',
    jam: '10:10',
    last: 'Oke Bang mantap bener dah pokoknya mantap',
  },
  {
    id: 9,
    nama: 'Alex Chandra',
    jam: '10:10',
    last: 'Oke Bang mantap bener dah pokoknya mantap',
  },
  {
    id: 10,
    nama: 'Alex Chandra',
    jam: '10:10',
    last: 'Oke Bang mantap bener dah pokoknya mantap',
  },
]

let dataContact = [
  {
    id: 1,
    nama: 'Alex Chandra Hanif',
    about: 'Sibuk',
  },
  { id: 2, nama: 'Saber Roam', about: 'Sibuk' },
  { id: 3, nama: 'Kagura', about: 'Sibuk' },
  {
    id: 4,
    nama: 'Zilong',
    about: 'Sibuk',
  },
  {
    id: 5,
    nama: 'Pascol',
    about: 'Sibuk',
  },
  {
    id: 6,
    nama: 'Natan',
    about: 'Sibuk',
  },
  {
    id: 7,
    nama: 'Balmond',
    about: 'Sibuk',
  },
  {
    id: 8,
    nama: 'Hababi',
    about: 'Sibuk',
  },
  {
    id: 9,
    nama: 'Cyclops',
    about: 'Sibuk',
  },
  {
    id: 10,
    nama: 'Vale',
    about: 'Sibuk',
  },
]

const Sidabar = () => {
  const navigate = useNavigate()

  const [selectedItemId, setSelectedItemId] = useState(null)
  const [isDark, setIsDark] = useState(false)
  const [openContact, setOpenContact] = useState(false)

  const handleOpenChange = (newOpen) => {
    setOpenContact(newOpen)
  }

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

  const contentTitik3 = (
    <div className={`flex flex-col w-[90px] gap-1 `}>
      <button
        className="p-1 flex items-center  h-[32px] font-medium cursor-pointer  rounded-md  gap-1 hover:bg-slate-100"
        // onClick={() => handleLogout()}
      >
        <MdManageAccounts /> Profile
      </button>
      <button
        className="p-1 flex items-center  h-[32px] font-medium cursor-pointer  rounded-md gap-1 hover:bg-slate-100 "
        // onClick={() => handleDarkMode()}
      >
        {isDark ? <RiContactsBookLine /> : <RiContactsBookFill />}
        Contact
      </button>
      <button
        className="p-1 flex items-center  h-[32px] font-medium cursor-pointer  rounded-md gap-1 hover:bg-slate-100 "
        onClick={() => handleDarkMode()}
      >
        {isDark ? <MdOutlineDarkMode /> : <MdDarkMode />}{' '}
        {isDark ? 'Light' : 'Dark'}
      </button>
      <button
        className="p-1 flex items-center  h-[32px] font-medium cursor-pointer  rounded-md  gap-1 hover:bg-slate-100"
        onClick={() => handleLogout()}
      >
        <FiLogOut /> Logout
      </button>
    </div>
  )

  const contentContact = (
    <div className="w-[250px]">
      <div className="w-full">
        <Input placeholder="Search user" size="small" />
      </div>
      <div className="w-full mt-5 flex flex-col h-[400px] overflow-y-scroll">
        {dataContact
          ? dataContact.map((el) => {
              return (
                <div key={el.id}>
                  <div
                    className={`h-[60px] w-full flex p-2 rounded-lg hover:bg-slate-100`}
                    key={el.id}
                    onClick={() => {
                      message.success(`Mulai chat dengan ${el.nama}`)
                    }}
                  >
                    <div className="w-[20%] flex justify-center items-center">
                      <img
                        src="https://image.gambarpng.id/pngs/gambar-transparent-boy-cartoon-illustration_46930.png"
                        alt="profile"
                        className="w-[45px] h-[45px] rounded-full"
                      />
                    </div>
                    <div className="w-[80%] px-2 ">
                      <div className=" w-full flex justify-between ">
                        <div>
                          <p className="text-[15px] font-semibold">{el.nama}</p>
                        </div>
                        <div>
                          <p className="text-[12px] font-poppins text-slate-600 ">
                            {el.jam}
                          </p>
                        </div>
                      </div>
                      <div className=" w-full flex items-center gap-1 text-slate-600 ">
                        <div>
                          <p className="text-[13px] ">
                            {potongString(el.about, 35)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          : null}
      </div>
    </div>
  )

  return (
    <div className="w-full h-full p-3 dark:bg-bgDark">
      <div className=" w-full h-[18%]">
        <div className="w-full h-[50px]  p-1 flex justify-between items-center ">
          <div className="w-[80%] ">
            <p className="text-xl font-semibold dark:text-white">Chats</p>
          </div>
          <div className="w-[20%] flex  text-xl font-light dark:text-white">
            <div className="w-1/2 flex justify-center items-center ">
              <Popover
                content={contentContact}
                title="New Chat"
                trigger="click"
                placement="bottomLeft"
                open={openContact}
                onOpenChange={handleOpenChange}
              >
                <button>
                  <FiEdit />
                </button>
              </Popover>
            </div>

            <div className="w-1/2 flex justify-center items-center">
              <Popover placement="bottomLeft" content={contentTitik3}>
                <HiEllipsisVertical className="text-[25px]" />
              </Popover>
            </div>
          </div>
        </div>
        <div className={`relative w-[95%] mx-auto`}>
          <input
            type="text"
            placeholder="Search or start a new chat"
            className={`w-full py-1 pl-8 pr-4 rounded-md focus:outline-none ${
              isDark
                ? 'bg-bgDark text-white'
                : 'bg-white dark:bg-bgDark text-black dark:text-white'
            } border-[1px] border-slate-200`}
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <SearchOutlined
              className={`h-5 w-5 ${isDark ? 'text-white' : 'text-black'}`}
            />
          </span>
        </div>
      </div>
      {/* Chat */}
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
                    <div className="w-[85%] px-2 dark:text-white">
                      <div className=" w-full flex justify-between ">
                        <div>
                          <p className="text-[15px] font-semibold">{el.nama}</p>
                        </div>
                        <div>
                          <p className="text-[12px] font-poppins text-slate-600 dark:text-white">
                            {el.jam}
                          </p>
                        </div>
                      </div>
                      <div className=" w-full flex items-center gap-1 text-slate-600 dark:text-white">
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
