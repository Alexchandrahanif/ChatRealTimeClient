import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Button, Input, Space } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const [passwordVisible, setPasswordVisible] = React.useState(false)
  return (
    <div className="w-screen h-screen bg-slate-50 flex items-center">
      <div className="w-[60%] h-full p-5 flex justify-center items-center">
        <div className=" h-full w-full bg-slate-400 rounded-xl"></div>
      </div>
      <div className="w-[40%] h-full bg-slate-50 flex justify-center items-center">
        <div className="w-[400px]">
          <div className="text-sky-900 font-bold mb-3">
            <p className="text-[25px]">LOGIN</p>
          </div>
          <div className="text-slate-400 text-lg mb-5">
            <p>Welcome,</p>
            <p>Please login your account</p>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <label htmlFor="email" className="text-slate-500">
                Email
              </label>
              <Input placeholder="Input Your Email" size="large" />
            </div>

            <div>
              <label htmlFor="password" className="text-slate-500">
                Password
              </label>
              <Input.Password
                size="large"
                placeholder="input password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </div>

            <div className="mt-5">
              <button className="w-full h-[40px] bg-green-600 text-white font-bold">
                Login
              </button>
            </div>

            <div className="flex justify-center">
              <p className="text-slate-500">
                Don't have an account?{' '}
                <span
                  className="text-sky-900 hover:cursor-pointer"
                  onClick={() => navigate('/register')}
                >
                  register
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
