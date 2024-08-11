import { handleErr } from "../../utils/apiError.js"
import { ApiResponse } from "../../utils/apiResponse.js";
import Flashcard from "../models/flashcard.model.js";

const addQuestion = async(req,res)=>{
  try{
    const {question, answer} = req.body
    const flashcard = await Flashcard.create({question, answer});
    return res.json(new ApiResponse(200, flashcard, "Flashcard created successfully."));
  }
  catch(err){
    return handleErr(res,err);
  }
};

const deleteQuestion = async(req,res)=>{
  try{
    const {id} = req.body;
    console.log(id)
    const flashcard = await Flashcard.findByPk(id);
    if(flashcard){
      await flashcard.destroy();
      return res.json(new ApiResponse(200, flashcard, "deleted successfully."));
    }
    else{
      return res.json(new ApiResponse(404, null , "flashcard not found."));
    }
  }
  catch(err){
    return handleErr(res,err);
  }
};


const deleteAll = async(req,res)=>{
  try{
    const deletedRows = await Flashcard.destroy({
      where:{},
      truncate:true
    })
    return res.json(new ApiResponse(200, deletedRows, "Rows deleted successfully."));
  }
  catch(err){
    return handleErr(res, err);
  }
}


const fetchByID = async(req,res)=>{
  try{
    const {id} = req.body;
    const flashcard = await Flashcard.findByPk(id);
  
    if(!flashcard) return res.json(new ApiResponse(404, null, "Flashcard not found. "));
  
    return res.json(new ApiResponse(200, flashcard, "flashcard fetched successfully."));

    }
  catch(err){
    return handleErr(res,err);
  }
}

const fetchAll = async(req,res)=>{
  try{
    const flashcards = await Flashcard.findAll();
    return res.json(new ApiResponse(200, flashcards, "flashcards fetched successuflly."));
  }
  catch(err){
    return handleErr(res,err);
  }
}


export {
  addQuestion,
  deleteQuestion,
  fetchByID,
  fetchAll,
  deleteAll
}