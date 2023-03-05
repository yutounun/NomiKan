import axios from 'axios'

export default axios.create({
  baseURL: process.env.REACT_APP_ENV,
  headers: {
    'Content-type': 'application/json',
  },
})
