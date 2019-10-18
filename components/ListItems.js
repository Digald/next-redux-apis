// Libraries
import React from "react";
import Link from "next/link";
import parse from "html-react-parser";
import ProblemItem from "./ProblemItems";
import PassageItem from "./PassageItems";

const ListItems = props => {
  return (
    <>
      <div className="items-container">
        {props.list === "problems" ? <ProblemItem /> : <PassageItem />}
      </div>
      <style jsx>{`
        .items-container {
          border-radius: 20px;
          margin: 100px 10% 0 10%;
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
