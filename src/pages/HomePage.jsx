import React, { useEffect } from 'react'
import { getAllUsers } from '../redux/action/user'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const HomePage = () => {
  const dispatch = useDispatch()
  const { Users } = useSelector((state) => state.UserReducer)

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div>
        {Users?.map((el) => {
          return (
            <div key={el.id}>
              <p>{el.username}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomePage
