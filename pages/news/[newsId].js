// http://localhost:3000/news/something-important

import { useRouter } from "next/router";
import { Fragment } from "react";
import Link from "next/link";

const DetailPage = (props) => {
  const router = useRouter(); 

  const newId = router.query.newsId;
  
  return (
    <Fragment>
      <h1>The Detail Page</h1>;
      <ul>
        <li><Link href="/news">Go back!</Link></li>
      </ul>
    </Fragment>
  )
};

export default DetailPage;
