// Libraries
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import parse from "html-react-parser";

const useProblemItem = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const getSingleProblem = data => {
    dispatch({
      type: "GET_SINGLE_PROBLEM",
      problem: data
    });
  };
  return { store, getSingleProblem };
};

const ProblemItem = props => {
  const { store, getSingleProblem } = useProblemItem();
  const { problems } = store.problems.data;
  return (
    <>
      {problems.map(item => {
        return (
          <Link
            href={{
              pathname: "/problem",
              query: { name: `${item.reference_number}` }
            }}
          >
            <a
              className="item"
              key={item.id}
              onClick={() => getSingleProblem(item)}
            >
              <p>Problem: {item.reference_number}</p>
              <p>Difficulty: {item.difficulty}</p>
              <p>Video Id: {item.video_id ? item.video_id : ""}</p>
              <p>Active: {item.active === 1 ? "Yes" : "No"}</p>
              <p>Text Preview: {parse(item.text.trim())}</p>
            </a>
          </Link>
        );
      })}
      <style jsx>{`
        .item {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          width: 100%;
          border-top: 1px solid grey;
          padding: 1% 0;
          text-decoration: none;
        }
        p {
          color: black;
        }
      `}</style>
    </>
  );
};

export default ProblemItem;
