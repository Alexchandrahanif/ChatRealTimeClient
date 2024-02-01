import axios from 'axios'
const BaseUrl = 'http://localhost:3000'

export function getAllContactPersonal() {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/contact/personal`,
        method: 'GET',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      })

      dispatch({
        type: 'Fetch/GetAllContactPersonal',
        payload: data.data,
      })
    } catch (error) {
      return error
    }
  }
}

export function getAllContact() {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/contact`,
        method: 'GET',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      })

      dispatch({
        type: 'Fetch/GetAllContact',
        payload: data.data,
      })
    } catch (error) {
      return error
    }
  }
}

export function getOneContact(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/contact/${id}`,
        method: 'GET',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      })

      dispatch({
        type: 'Fetch/GetOneContact',
        payload: data.data,
      })
    } catch (error) {
      return error
    }
  }
}

export function createContact(body) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/contact`,
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

export function updateContact(id, data) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/contact/${id}`,
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
        data,
      })

      dispatch(getAllContactPersonal())
      return data
    } catch (error) {
      return error
    }
  }
}

export function deleteContact(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/contact${id}`,
        method: 'DELETE',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      })

      dispatch(getAllContactPersonal())
      return data
    } catch (error) {
      return error
    }
  }
}
