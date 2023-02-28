import axios from 'axios'

let headers = {
  'Content-type': 'application/json',
}

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: headers,
})

// Before sending request
apiClient.interceptors.request.use((config) => {
  // sessionStorageにsessionIdが格納されているかチェック
  const sessionId = sessionStorage.getItem('sessionId')
  if (sessionId) {
    // Set sessionId on the headers
    config.headers.authorizationtoken = JSON.parse(sessionId)
  }
  return config
})
export default apiClient
