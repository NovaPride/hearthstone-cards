import { useState, useEffect, useRef } from "react";
import { useController } from "react-hook-form";

import { useMTGService } from "../../../services/MTGService";

import DropDown from "./dropdown";

import "./dropdown-search-input.scss";

const DropDownSearchInput = ({ control, getValues }) => {
  const [cards, setCards] = useState([]);
  const { loading, getSearched } = useMTGService();
  const { field } = useController({
    name: "searchText",
    autoComplete: "off",
    defaultValue: "",
    control,
  });
  const [showDropDown, setShowDropDown] = useState(false);

  const timeoutRef = useRef(null);
  const waitingRef = useRef(false);

  const elasticSearch = async () => {
    const { searchText, searchType, mana } = getValues();
    getSearched({ searchText, searchType, mana }).then((data) => {
      setCards(data);
    });
  };

  useEffect(() => {
    waitingRef.current = true;
    if (timeoutRef.current === null) {
      timeoutRef.current = -1;
      return;
    }
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      if (field.value.length > 0) {
        elasticSearch();
        setShowDropDown(true);
      } else {
        setShowDropDown(false);
      }
      waitingRef.current = false;
    }, 1000);
  }, [field.value]);

  return (
    <div className="search">
      <input {...field} autoComplete="off" className="dropdown_search_input" />
      <DropDown
        cards={cards}
        showDropDown={showDropDown}
        loading={loading || waitingRef.current}
      />
    </div>
  );
};

export default DropDownSearchInput;
