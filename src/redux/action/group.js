import axios from 'axios'
const BaseUrl = 'http://localhost:3000'

export function getAllGroupPersonal() {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/group/personal`,
        method: 'GET',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      })

      dispatch({
        type: 'Fetch/GetAllGroupPersonal',
        payload: data.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getOneGroup(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/group/${id}`,
        method: 'GET',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      })

      dispatch({
        type: 'Fetch/GetOneGroup',
        payload: data.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function createGroup(data) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/group`,
        method: 'POST',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
        data,
      })

      dispatch(getAllGroupPersonal())
      return data
    } catch (error) {
      console.log(error)
    }
  }
}

export function updateGroup(id, data) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/group/${id}`,
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
        data,
      })

      dispatch(getAllGroupPersonal())
      return data
    } catch (error) {
      console.log(error)
    }
  }
}

export function deleteGroup(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/group/${id}`,
        method: 'DELETE',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      })

      dispatch(getAllGroupPersonal())
      return data
    } catch (error) {
      console.log(error)
    }
  }
}
