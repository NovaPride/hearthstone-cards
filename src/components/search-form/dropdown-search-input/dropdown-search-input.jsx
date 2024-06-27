import { useState, useEffect, useRef } from "react";
import { useForm, useController } from "react-hook-form";
import { useDebounce } from "use-debounce";
import { Link, useNavigate } from "react-router-dom";

import { useMTGService } from "../../../services/MTGService";

import "./dropdown-search-input.scss";

const DropdownSearchInput = ({ cards, setCards, control, searchType }) => {
  const { loading, error, getSearched, clearError } = useMTGService();
  const { field } = useController({
    name: "searchText",
    autoComplete: "off",
    defaultValue: "",
    control,
  });
  const [showDropDown, setShowDropDown] = useState(false);

  const timeoutRef = useRef(null);

  /*
  показывать загрузку
  кидать запрос на обновление только когда челвоек ничего не вводит на протяжении 500мс

  состояние hover а модалке
  focus
  есть ли хоть 1 символ
  blur
  количество карт 

  показывать если
  >0 символов введено

  скрывать если 
  0 символов
  ___________
  если серчинг - не показывать no hui
  no hui - если реально нету
  */

  // const [searchDeVal] = useDebounce(field.value, 50);
  // console.log(loading);
  const elasticSearch = async (text, type) => {
    getSearched({ searchText: text, searchType: type }).then((data) => {
      // setCards([{id: "debug", name: text, multiverseid: "debug"}, ...data ]);
      setCards(data);
    });
  };

  // const onFocus = () => {
  //   if (field.value > 0) {
  //     setShowDropDown(true);
  //   } else {
  //     setShowDropDown(false);
  //   }
  // };

  // const onBlur = () => {
  //   setShowDropDown(false);
  //     // setShowDropDown(false);
  //     field.onBlur();
  // };

  // useEffect(() => {
  //   if (field.value.length <= 0) {
  //     setShowDropDown(false);
  //   }
  // }, [field.value]);

  useEffect(() => {
    if (timeoutRef.current === null) {
      timeoutRef.current = -1;
      return;
    }
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      if (field.value.length > 0) {
        elasticSearch(field.value, searchType);
        setShowDropDown(true);
      } else {
        setShowDropDown(false);
      }
    }, 1000);

    // Object.keys(cards).length > 0
    //   ? setShowDropDown(true)
    //   : setShowDropDown(false);
  }, [field.value]);

  return (
    <div className="search">
      <input
        {...field}
        autoComplete="off"
        className="dropdown_search_input"
        // onFocus={onFocus}
        // onBlur = {onBlur}
      />
      <DropDown cards={cards} state={showDropDown} />
    </div>
  );
};

export default DropdownSearchInput;

const DropDown = ({ cards, state = false }) => {
  const dropDownStyle = state
    ? "dropdown_search"
    : "dropdown_search  dropdown_search_hide";
  if (Object.keys(cards).length === 0)
    return (
      <ul className={dropDownStyle}>
        <li key={666} className="dropdown_search_elem_wrapper">
          <div className="dropdown_search_elem_name">
            <span>There is no cards with that parameters...</span>
          </div>
        </li>
      </ul>
    );
  const cardsSize = Object.keys(cards).length;
  const view =
    cardsSize >= 10
      ? cards.slice(0, 10).map(({ id, name, multiverseid }, i) => {
          return i >= 9 ? (
            <li key={id} className="dropdown_search_elem_wrapper">
              <div className="dropdown_search_elem_name">
                <span>And {cardsSize - 9} more...</span>
              </div>
            </li>
          ) : (
            <li key={id} className="dropdown_search_elem">
              <Link
                to={"/card/" + multiverseid}
                className="dropdown_search_elem_wrapper">
                <div className="dropdown_search_elem_wrapper_name">{name}</div>
                <div className="dropdown_search_elem_wrapper_id">
                  {multiverseid}
                </div>
              </Link>
            </li>
          );
        })
      : cards.map(({ id, name, multiverseid }, i) => {
          return (
            <li key={id} className="dropdown_search_elem">
              <Link
                to={"/card/" + multiverseid}
                className="dropdown_search_elem_wrapper">
                <div className="dropdown_search_elem_wrapper_name">{name}</div>
                <div className="dropdown_search_elem_wrapper_id">
                  {multiverseid}
                </div>
              </Link>
            </li>
          );
        });
  return <ul className={dropDownStyle}>{view}</ul>;
};
