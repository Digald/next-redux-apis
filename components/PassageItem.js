// Libraries
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import parse from "html-react-parser";

const useProblemItem = async () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  return { store };
};

const ProblemItem = (props) => {
  const { store } = useProblemItem();
  return (
    <>
        Hello
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
