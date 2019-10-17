import React from "react";
import Link from "next/link";

const Layout = () => {
  return (
    <>
      <nav>
        <Link href="/">
          <a>Problems Page</a>
        </Link>
        <Link href="/passages">
          <a>Passages Page</a>
        </Link>
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 50px;
          width: 100%;
          background: white;
        }
      `}</style>
      <style global jsx>{`
        html,
        body, #__next {
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
          background: #11998e; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to right,
            #38ef7d,
            #11998e
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #38ef7d,
            #11998e
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
      `}</style>
    </>
  );
};

export default Layout;
