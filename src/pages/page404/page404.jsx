import "./page404.scss";

import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="page404">
      <h1 className="page404_header">ERROR 404</h1>
      <h2 className="page404_headling">PAGE NOT FOUND</h2>
      <p className="page404_text">
        The page you are looking for could not be found! The link to this
        <br />
        address may be outdated or we may have moved the page since you last
        <br />
        bookmarked it. It may also be temporarily unavailable.
      </p>
      <Link to="/" className="page404_back">
        GO BACK
      </Link>
    </div>
  );
};

export default Page404;
