import { api } from "./api";

const fetchAll = async(payload)=>{
  try{
    const {data} = await api.get("/fetch/all");
    return data;
  }
  catch(err){
    console.log(err);
  }
}

const create = async(payload)=>{
  try{
    const {data} = await api.post("/create/", payload);
    return data
  }
  catch(err){
    console.log(err);
  }
}


const deleteByID = async(payload)=>{
  try{
    console.log(payload)
    const {data} = await api.post("/delete/id", payload);
    return data;
  }
  catch(err){
    console.log(err);
  }
}

export {
  fetchAll,
  create,
  deleteByID
}