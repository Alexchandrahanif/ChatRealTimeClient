import axios from 'axios'
const BaseUrl = 'http://localhost:3000'

export function getAllUsers() {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/user`,
        method: 'GET',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      })

      dispatch({
        type: 'Fetch/GetAllUsers',
        payload: data.data,
      })
    } catch (error) {
      return error
    }
  }
}

export function getOneUser(phoneNumber) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/user/${phoneNumber}`,
        method: 'GET',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      })

      dispatch({
        type: 'Fetch/GetOneUser',
        payload: data.data,
      })
    } catch (error) {
      return error
    }
  }
}

export function updateUser(id, data) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/user/${id}`,
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
        data: data,
      })

      dispatch(getAllUsers())

      return data
    } catch (error) {
      return error
    }
  }
}

export function verifyCode(id, code) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/user/verify/${id}`,
        method: 'POST',
        data: {
          code,
        },
      })

      return data
    } catch (error) {
      return error
    }
  }
}

export function updateStatusUser(id, status) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/user/status/${id}`,
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
        data: {
          status,
        },
      })

      dispatch(getAllUsers())

      return data
    } catch (error) {
      return error
    }
  }
}

export function deleteUser(id, status) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/user/${id}`,
        method: 'DELETE',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      })

      dispatch(getAllUsers())

      return data
    } catch (error) {
      return error
    }
  }
}
