// Libraries
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";

const useListItems = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  return { store };
};

const ListItems = () => {
  const { store } = useListItems();
  const { problems } = store.problems;
  console.log(problems);
  return (
    <>
      <div className="items-container">
        {problems.map(item => {
          return (
            <div className="problem" key={item.id}>
              <p>Problem: {item.reference_number}</p>
              <p>Difficulty: {item.difficulty}</p>
              <p>Video Id: {item.video_id ? item.video_id : ""}</p>
              <p>Active: {item.active === 1 ? "Yes" : "No"}</p>
              <p>Text Preview: {parse(item.text.trim().slice(0, 100))}</p>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .items-container {
          margin: 5%;
          max-width: 100%;
          flex-direction: column;
          background: white;
          color: black;
        }
        .problem {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          width: 100%;
          border-top: 1px solid grey;
          padding: 1% 0;
        }
      `}</style>
    </>
  );
};

export default ListItems;
