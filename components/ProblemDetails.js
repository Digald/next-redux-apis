import React from "react";
import {useSelector } from "react-redux";
import parse from "html-react-parser";
import NoStore from './NoStore';

// Grab store from redux
const useProblemDetails = () => {
  const store = useSelector(state => state.singleProblem);
  return { store };
};

// Use redux store to display details about the selected problem
const ProblemDetails = () => {
  const { store } = useProblemDetails();
  let subject;
  switch (store.subject_id) {
    case "0a354dc2-0e55-489c-8e82-7efaebf112bd":
      subject = "Writing and Language";
      break;
    case "6c844aca-f43e-4f3e-a68c-ba2fb2bb38ae":
      subject = "Reading";
      break;
    case "8b4a36de-d8c2-4bfd-a9c0-aae2e2241290":
      subject = "Math";
      break;
    default:
      subject = "";
  }
  if (!store || Object.entries(store).length === 0) {
    return <NoStore resource="problem" />;
  }
  return (
    <>
      <div className="details">
        <div className="grid-area">
          <h2>Problem Text</h2>
          {parse(store.text)}
        </div>
        <div className="grid-area">
          <h2>Answer Choices</h2>
          {store.answers.map(answer => {
            return (
              <p className={`correct-${answer.correct}`} key={answer.id}>
                Option {answer.sequence}: {answer.text}
              </p>
            );
          })}
        </div>
        <div className="grid-area">
          <h2>Additional Details</h2>
          <p>Reference Number: {store.reference_number}</p>
          <p>Active: {store.active ? "Yes" : "No"}</p>
          <p>Subject: {subject}</p>
          <p>Difficulty: {store.difficulty}</p>
          <ul>
            Categories:{" "}
            {store.categories.map(category => {
              return <li key={category.id}>-{category.name}</li>;
            })}
          </ul>
        </div>
        <div className="grid-area">
          <h2>Notes</h2>
          {parse(store.notes)}
        </div>
      </div>
      <style jsx>{`
        .details {
          display: grid;
          grid-template-rows: 1fr 1fr;
          grid-template-columns: 1fr 1fr;
          grid-gap: 10px;
          padding: 10px;
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
        @media (max-width: 768px) {
         .details {
            grid-template-columns: 1fr;
            grid-template-rows: auto
          }
        }
      `}</style>
    </>
  );
};

export default ProblemDetails;
