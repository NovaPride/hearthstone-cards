import { useState, useEffect, useDeferredValue, useTransition } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import DropdownSearchInput from "./dropdown-search-input/dropdown-search-input";
import SearchTypePicker from "./search-type/search-type-picker";
import ManaPicker from "./mana/mana-picker";

import "./search-form.scss";

const SearchForm = () => {
  const [searchText, setSearchText] = useState("");
  
  const [searchType, setSearchType] = useState("name");
  
  const [cards, setCards] = useState([]);
  const { register, handleSubmit, control, getValues  } = useForm();
  const navigate = useNavigate();

  

  const onSubmit = async (data) => {
    console.log(data);
    const temp = await getSearched(data);
    console.log(temp);

    //сюда как то получить строку для запроса к апи и перейти на страницу где вывядятся все подходящие
    // navigate("/казахстан");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search_form">
      
      <div className="search_form_elem">
        <DropdownSearchInput cards={cards} setCards={setCards} control={control} searchType={searchType}/>
        <input value="SEARCH" type="submit" className="search_form_submit" />
      </div>
      {/* {modal} */}
      <div className="search_form_grid">
        <div className="search_form_grid_column">
          <SearchTypePicker register={register} setSearchType={setSearchType} />
          <div className="search_form_grid_column_elem search_form_grid_column_elem_separator"></div>
          <ManaPicker register={register} />
        </div>
        <div className="search_form_grid_column"></div>
      </div>
    </form>
  );
};

export default SearchForm;
