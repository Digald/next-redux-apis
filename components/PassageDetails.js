// Libraries
import React from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import Link from "next/link";
import NoStore from "./NoStore";

const usePassageDetails = () => {
  const store = useSelector(state => state.singlePassage);
  return { store };
};

const PassageDetails = () => {
  const { store } = usePassageDetails();
  if (!store || Object.entries(store).length === 0) {
    return <NoStore resource="passage" />;
  }
  return (
    <>
      <div className="details">
        <div className="grid-area">
          <h2>Passage Text</h2>
          {parse(store.text)}
        </div>
        <div className="grid-area">
          <h2>Details</h2>
          <p>Title: {store.title}</p>
          <p>Active: {store.active === 1 ? "Yes" : "No"}</p>
        </div>
        <div className="grid-area">
          <h2>Notes</h2>
          <p>{store.notes}</p>
        </div>
      </div>
      <style jsx>{`
        .details {
          display: grid;
          grid-template-rows: auto auto;
          grid-template-columns: auto auto;
          grid-gap: 10px;
          padding: 1%;
          border-radius: 30px;
          margin: 100px 10% 0 10%;
          max-width: 100%;
          background: white;
          color: black;
        }
        ul {
          padding: 0;
        }
        li {
          list-style-type: none;
          padding-left: 40px;
        }
        h2 {
          text-align: center;
          margin: 0;
          color: white;
          background: #5d737e;
          border-radius: 10px;
        }
        .correct-1 {
          border-radius: 10px;
          background: green;
        }
        .grid-area {
          padding: 10px;
          border-radius: 10px;
          border: 1px solid grey;
        }
      `}</style>
    </>
  );
};

export default PassageDetails;
