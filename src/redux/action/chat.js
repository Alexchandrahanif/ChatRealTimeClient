import axios from 'axios'
const BaseUrl = 'http://localhost:3000'

export function getAllChatPersonal(ReceiverId) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/chat/personal/${ReceiverId}`,
        method: 'GET',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      })

      dispatch({
        type: 'Fetch/GetAllChatPersonal',
        payload: data.data,
      })
    } catch (error) {
      return error
    }
  }
}

export function getOneChat(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/chat/${id}`,
        method: 'GET',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      })

      dispatch({
        type: 'Fetch/GetOneChat',
        payload: data.data,
      })
    } catch (error) {
      return error
    }
  }
}

export function createChat(body) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/chat`,
        method: 'POST',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
        data: body,
      })

      return data
    } catch (error) {
      return error
    }
  }
}

export function updateChat(id, data) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/chat/${id}`,
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
        data,
      })

      return data
    } catch (error) {
      return error
    }
  }
}

export function updateStatusChat(SenderId, status) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/chat/status/${SenderId}`,
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
        data: {
          status,
        },
      })

      return data
    } catch (error) {
      return error
    }
  }
}

export function deleteChat(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/chat/${id}`,
        method: 'DELETE',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      })

      return data
    } catch (error) {
      return error
    }
  }
}
