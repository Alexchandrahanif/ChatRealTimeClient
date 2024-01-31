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

//! Member

export function getOneMember(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/group/member/${id}`,
        method: 'GET',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      })

      dispatch({
        type: 'Fetch/GetOneMember',
        payload: data.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function createMember(data) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/group/member`,
        method: 'POST',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
        data,
      })

      return data
    } catch (error) {
      console.log(error)
    }
  }
}

export function updateStatusMember(GroupId, MemberId) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/group/member/${GroupId}/${MemberId}`,
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
        data: { status },
      })

      return data
    } catch (error) {
      console.log(error)
    }
  }
}

export function deleteMember(GroupId, MemberId) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/group/member/${GroupId}/${MemberId}`,
        method: 'DELETE',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      })

      return data
    } catch (error) {
      console.log(error)
    }
  }
}

export function memberLeaveGroup(GroupId, MemberId) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `${BaseUrl}/group/member/leave/${GroupId}`,
        method: 'DELETE',
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      })

      return data
    } catch (error) {
      console.log(error)
    }
  }
}
