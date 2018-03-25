import axios from 'axios'
import BaseURL from '../config'

const getHeaders = () => {
  const userId = localStorage.getItem('user_id') || ''
  return {
    'Content-Type': 'application/json',
    user_id: userId,
  }
}

export const getCall = (url, query = {}) => {
  const headers = getHeaders()
  return axios
    .get(BaseURL + url, { params: query, headers })
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
  return axios
    .post(BaseURL + url, data, { headers })
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
