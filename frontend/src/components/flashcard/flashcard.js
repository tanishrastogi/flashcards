import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./flashcard.css";
import { Pagination } from "@mui/material";
import Button from "../button/buttons";
import { deleteByID, fetchAll } from "../../api/cards.api";

const Flashcard = () => {

  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  const [data, setData] = useState([]);

  const fetchData = async (id) => {
    try {
      const { data } = await fetchAll();
      setData(data);
    }
    catch (err) {
      console.log(err);
    }
  }

  

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(()=>{
    setIsVisible(false)
  }, [page])


  const handleFlip = (index) => {
    setIsVisible(!isVisible);
  };

  console.log(data[page-1]?.id)


  return (
    <div className="carousel">
      <div className="flashcard" onClick={() => handleFlip()}>
        <div className={`flashcard-inner ${isVisible ? "flipped" : ""}`}>
          <div className="flashcard-front">
            {data[page - 1]?.question}
          </div>
          <div className="flashcard-back">
            {data[page - 1]?.answer}
          </div>
        </div>
      </div>
      <Pagination
        count={data.length}
        color="success"
        onChange={(e, value) => {
          setPage(value);
        }}
        style={{ margin: "20px" }}
      />
      <Button deletedCardID={data[page-1]?.id}/>
    </div>
  );
};

export default Flashcard;
