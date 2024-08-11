import React, { useState } from 'react';
import "./button.css";
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import DeleteSharp from '@mui/icons-material/DeleteSharp';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { create, deleteByID } from '../../api/cards.api';


const Button = ({deletedCardID}) => {
  const [visibility, setVisibility] = useState(false);

  const [card, setData] = useState({
    question: "",
    answer: ""
  })

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value)
    setData(() => {
      return {
        ...card,
        [name]: value
      }
    })
  }

  const createCard = async()=>{
    try{
      const data = await create(card);
      if(data.statusCode === 200){
        alert("Card created.")
      }
    }
    catch(err){
      console.log(err);
    }
  }

  const deleteCard = async()=>{
    try{
      console.log(deletedCardID)
      const data = await deleteByID({id:deletedCardID})
      if(data.statusCode === 200){
        alert("deleted successfully.");
        
      }
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div>
      {
        visibility ? <div className='hidden-create-box'>
          <div>
            <input className='data' placeholder='Enter Question' name='question' onChange={handleChange} value={card.question}></input>
            <input className='data' placeholder='Enter Answer' name='answer' onChange={handleChange} value={card.answer}></input>
            <IconButton onClick={() => {
              setVisibility(false);
            }}>
              <CloseIcon />
            </IconButton>
          </div>
          <button onClick={createCard} className='submit-button'>Submit</button>
        </div> : ""
      }
      <div className='button-containers'>
        <button onClick={() => {
          setVisibility(true)
        }} className='add-button' style={{ background: "#3498fe", borderRadius: "20%" }}>
          <AddCircleOutlineSharpIcon sx={{ color: "white" }} />
        </button>
        <button onClick={deleteCard} className='delete-button' style={{ background: "red", borderRadius: "20%" }}>
          <DeleteSharp sx={{ color: "white" }} />
        </button>
      </div>
    </div>
  )
}

export default Button