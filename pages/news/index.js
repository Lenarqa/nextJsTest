// http://localhost:3000/news
import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/something-great">Next JS sometting great!</Link>
        </li>
        <li>
         Else
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
