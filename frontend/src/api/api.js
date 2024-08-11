import axios from "axios";

export const baseURL = 'http://localhost:8005/api/'
   
export const api = axios.create({
  baseURL: baseURL,
  timeout: 1000 * 10,
  withCredentials: true,
  headers: {
    authorization: `Bearer ${document.cookie.split(";")}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});



export const backend_start_api = async()=>{
  try{
    const {data} = await api.get("/health");
    return data;
  }
  catch(err){
    console.log(err);
  }
}