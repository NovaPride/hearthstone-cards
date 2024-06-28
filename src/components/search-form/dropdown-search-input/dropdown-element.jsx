import { Link } from "react-router-dom";

const DropDownElement = ({ multiverseid, name }) => {
  return (
    <li className="dropdown_search_elem">
      <Link
        to={"/card/" + multiverseid}
        className="dropdown_search_elem_wrapper">
        <div className="dropdown_search_elem_wrapper_name">{name}</div>
        <div className="dropdown_search_elem_wrapper_id">{multiverseid}</div>
      </Link>
    </li>
  );
};

export default DropDownElement;