import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3004'

export const fetchContactsApi = async () => {
  const { data } = await axios.get('/contacts')
  return data
}

export const fetchPostNewContact = async (contact) => {
  const { data } = await axios.post('/contacts', contact)
  return data
}

export const removeContactById = async (id) => {
  await axios.delete(`/contacts/${id}`)
  return id
}
