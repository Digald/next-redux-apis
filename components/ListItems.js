// Libraries
import React from "react";
import Link from "next/link";
import parse from "html-react-parser";
import ProblemItem from "../components/ProblemItem";
import PassageItem from "../components/PassageItem";

const ListItems = props => {
  return (
    <>
      <div className="items-container">
        <h1>{props.title}</h1>
        {props.list === "problems" ? <ProblemItem /> : <PassageItem />}
      </div>
      <style jsx>{`
        .items-container {
          border-radius: 30px;
          margin: 5%;
          max-width: 100%;
          flex-direction: column;
          background: white;
          color: black;
        }
        h1 {
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default ListItems;
