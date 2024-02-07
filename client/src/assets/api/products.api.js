import axios from 'axios'

const productApi = axios.create({
   baseURL:'http://localhost:8000/product/api/v1/products/',

})


export const getPrueba = () => productApi.get('http://localhost:8000/product/prueba')



export const getAllProducts = () => productApi.get('/')


export const createProduct = (product)=> productApi.post(`/`, product)

export const getProduct = (id)=> productApi.get(`/${id}/`)

export const likeProduct = (id)=> productApi.put(`/${id}/`)

//prueb para  likear los productos con python y no el front
export const likeProductPython = (id)=> productApi.put(`http://localhost:8000/product/prueba/${id}/`)
