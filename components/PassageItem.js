// Libraries
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import parse from "html-react-parser";

const useProblemItem = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  return { store };
};

const ProblemItem = props => {
  const { store } = useProblemItem();
  console.log(store);
  const {passages} = store.passages.data
  return (
    <>
      {passages.map(item => {
        return (
          <Link
            href={{
              pathname: "/passage",
              query: { name: `${item.reference_id}` }
            }}
          >
            <a
              className="item"
              key={item.id}
              onClick={() => getSingleProblem(item)}
            >
              <p>Passage Id: {item.reference_id}</p>
              <p>Active: {item.active === 1 ? "Yes": "No"}</p>
              <p>Title: {item.title}</p>
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
