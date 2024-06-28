//import { useNavigate } from "react-router-dom";
//TODO перекидывать при нажатии на more... на страницу со всеми подходящими, 
//добавь прос типо опциональный, из-за которого он будет вставлять либо нет ссылку

const DropDownPseudoElement = ({ text }) => {
  return (
    <li className="dropdown_search_elem_wrapper">
      <div className="dropdown_search_elem_name">
        <span>{text}</span>
      </div>
    </li>
  );
};

export default DropDownPseudoElement;
