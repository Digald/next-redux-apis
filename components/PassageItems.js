// Libraries
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const usePassageItem = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const getSinglePassage = data => {
    dispatch({
      type: "GET_SINGLE_PASSAGE",
      passage: data
    });
  };
  return { store, getSinglePassage };
};

const PassageItem = props => {
  const { store, getSinglePassage } = usePassageItem();
  const { passages } = store;
  return (
    <>
      {passages.map(item => {
        return (
          <Link
            key={item.id}
            href={{
              pathname: "/passage",
              query: { name: `${item.reference_id}` }
            }}
          >
            <a className="item" onClick={() => getSinglePassage(item)}>
              <p>Passage Id: {item.reference_id}</p>
              <p>Active: {item.active === 1 ? "Yes" : "No"}</p>
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
          text-decoration: none;
        }
        .item:first-child {
          border-top: 0;
        }
        a:hover {
          background: #E3D4D1;
        }
        p {
          color: black;
          padding: 0 1%;
        }
      `}</style>
    </>
  );
};

export default PassageItem;
