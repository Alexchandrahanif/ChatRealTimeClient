import axios from 'axios'
const BaseUrl = 'http://localhost:3000'

export function getAllGroupChatPersonal(GroupId) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/groupChat/personal/${GroupId}`,
        method: 'GET',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      })

      dispatch({
        type: 'Fetch/GetAllGroupChatPersonal',
        payload: data.data,
      })
    } catch (error) {
      return error
    }
  }
}

export function getOneGroupChat(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/groupChat/${id}`,
        method: 'GET',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      })

      dispatch({
        type: 'Fetch/GetOneGroupChat',
        payload: data.data,
      })
    } catch (error) {
      return error
    }
  }
}

export function createGroupChat(data) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/groupChat`,
        method: 'POST',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
        data,
      })

      dispatch(getAllgroupChatPersonal())
      return data
    } catch (error) {
      return error
    }
  }
}

export function updateGroupChat(id, data) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/groupChat/${id}`,
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

export function deleteGroupChat(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/groupChat/${id}`,
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
