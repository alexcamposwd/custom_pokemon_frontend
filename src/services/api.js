import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
})

export const apiNew = axios.create({
  baseURL: process.env.REACT_APP_URL_APINEW,
  headers: {
    'Content-type': 'application/json',
  },
})

export const getPokesRequest = () => apiNew.get('/all')

export const getPokeRequest = (id) => apiNew.get(`/pokenew/${id}`)

export const createPokesRequest = (data) => apiNew.post('/new', data)

export const updatePokesRequest = (id, data) =>
  apiNew.put(`/pokeedit/${id}`, data)

export const deletePokeRequest = (id) => apiNew.delete(`/pokedel/${id}`)
