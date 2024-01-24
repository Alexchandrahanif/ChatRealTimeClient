import axios from 'axios'
const BaseUrl = 'http://localhost:3000'

function getAllUsers() {
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
      console.log(error)
    }
  }
}

export default getAllUsers
