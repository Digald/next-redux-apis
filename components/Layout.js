import React from "react";
import Link from "next/link";
/**
 * Header for all pages. The title in the header relies on the content that is being displayed.
 */

const Layout = props => {
  let title;
  switch (props.pathname) {
    case "/":
      title = "Problems List";
      break;
    case "/passages":
      title = "Passages List";
      break;
    case "/problem":
      title = `Selected: Problem ${props.asPath.split("=")[1]}`;
      break;
    case "/passage":
      title = `Selected: Passage ${props.asPath.split("=")[1]}`;
      break;
    default:
      title = "";
  }
  return (
    <>
      <nav>
        <h1>{title}</h1>
        <Link href="/">
          <a>Problems</a>
        </Link>
        <Link href="/passages">
          <a>Passages</a>
        </Link>
      </nav>
      <style jsx>{`
        nav {
          position: fixed;
          top: 0;
          box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.2);
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 50px;
          width: 100%;
          background: white;
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 20px;
          }
        }
      `}</style>
      <style global jsx>{`
        html,
        body,
        #__next {
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
          background: #AAFFA9;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #11FFBD, #AAFFA9);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #11FFBD, #AAFFA9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        }
      `}</style>
    </>
  );
};

export default Layout;
