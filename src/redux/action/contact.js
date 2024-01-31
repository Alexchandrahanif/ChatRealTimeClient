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
      console.log(error)
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
      console.log(error)
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
      console.log(error)
    }
  }
}

export function createContact(data) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/contact`,
        method: 'POST',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
        data,
      })

      dispatch(getAllContactPersonal())
      return data
    } catch (error) {
      console.log(error)
    }
  }
}

export function updateContact(id, data) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/contact${id}`,
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
        data,
      })

      dispatch(getAllContactPersonal())
      return data
    } catch (error) {
      console.log(error)
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
      console.log(error)
    }
  }
}