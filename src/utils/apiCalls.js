import axios from 'axios'
// import BaseURL from '../config'

const BaseURL = 'https://nameless-lowlands-96458.herokuapp.com'

const getHeaders = () => {
  const userId = localStorage.getItem('user_id') || ''
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    // user_id: userId,
  }
}

export const getCall = (url, query = {}) => {
  const headers = getHeaders()
  return axios
    .get(BaseURL + url)
    .then(response => response)
    .catch(error => {
      if (error.response && error.response.status === 401) {
        localStorage.clear()
      }
      return error
    })
}

export const postCall = (url, data = {}) => {
  const headers = getHeaders()
  console.log('data', data);
  return axios
    .post(BaseURL + url, {user: JSON.stringify(data)}, { headers })
    .then(response => response)
    .catch(error => {
      if (error.response && error.response.status === 401) {
        localStorage.clear()
      }
      return error
    })
}

export const putCall = (url, data = {}) => {
  const headers = getHeaders()
  return axios
    .put(`${BaseURL}${url}/${data.todo_id}`, data, { headers })
    .then(response => response)
    .catch(error => {
      if (error.response && error.response.status === 401) {
        localStorage.clear()
      }
      return error
    })
}

export const deleteCall = (url, data) => {
  const headers = getHeaders()
  return axios
    .delete(`${BaseURL}${url}/${data}`, { headers })
    .then(response => response)
    .catch(error => {
      if (error.response && error.response.status === 401) {
        localStorage.clear()
      }
      return error
    })
}
