import { Input, message } from 'antd'
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
    <div className="w-full h-full p-3">
      <div className=" w-full h-[18%]">
        <div className="h-[50px]  p-1 flex justify-between items-center">
          <div>
            <p className="text-xl font-semibold">Chats</p>
          </div>
          <div className="flex gap-5 text-xl font-light">
            <button>
              <FiEdit />
            </button>

            <button>
              <MdOutlineDarkMode />
            </button>

            <button onClick={() => handleLogout()}>
              <FiLogOut />
            </button>
          </div>
        </div>
        <div className="h-[50px] flex justify-center items-center">
          <Input
            placeholder="Search or start a new chat"
            prefix={<SearchOutlined />}
            className="w-[95%]"
          />
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
