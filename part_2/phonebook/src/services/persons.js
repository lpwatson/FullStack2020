import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (recordId, updatedRecord)  => {
  const request = axios.put(`${baseUrl}/${recordId}`, updatedRecord)
  return request.then(response => response.data)
}

const deleteRecord = id => {
  const url = `${baseUrl}/${id}`
  const request = axios.delete(url)
  return request.then(response => response.data)
}

export default { getAll, create, update, deleteRecord }