import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/api';
axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse((localStorage.getItem('user'))).token}`;

export const getAllProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
}

export const Login = async (formData) => {
  const response = await axios.post(`${API_URL}/login`, formData);
  return response.data;
} 

export const Register = async (formData) => {
  const response = await axios.post(`${API_URL}/register`, formData);
  return response.data;
} 

export const Logouts = async () => {
  const response = await axios.post(`${API_URL}/logout`);
} 


export const PostProduct = async (formData) =>{
  const response = await axios.post(`${API_URL}/product`, formData,{ headers : {"content-type" : "multipart/form-data"} });
  return response.data;
}

export const UpdateProduct = async (params) =>{
  // console.log(`${API_URL}/product/${params.productId}`)
  const response = await axios.put(`${API_URL}/product/${params.productId}`, params.form);
  console.log(params)
  return response.data;
}

export const DeleteProduct = async (productId) => {
  const response = await axios.delete(`${API_URL}/product/${productId}`);
  return response.data;
}