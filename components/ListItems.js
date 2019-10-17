// Libraries
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import parse from "html-react-parser";
// import InfiniteScroll from "react-infinite-scroller";

const useListItems = async () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const getSingleProblem = data => {
    dispatch({
      type: "GET_SINGLE_PROBLEM",
      problem: data
    });
  };
  // const getMoreProblems = () => {
  //   dispatch({
  //     type: "GET_MORE_PROBLEMS"
  //   });
  // };
  return { store, getSingleProblem };
};

const ListItems = () => {
  const { store, getSingleProblem} = useListItems();
  console.log(store);
  const {problems} = store.problems;
  return (
    <>
      <div className="items-container">
        <h1>Problems</h1>
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
        {/* <InfiniteScroll
          pageStart={0}
          loadMore={getMoreProblems}
        ></InfiniteScroll> */}
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

export default ListItems;
