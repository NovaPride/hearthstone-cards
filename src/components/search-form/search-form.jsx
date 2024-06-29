import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import DropDownSearchInput from "./dropdown-search-input/dropdown-search-input";
import SearchTypePicker from "./search-type/search-type-picker";
import ManaPicker from "./mana/mana-picker";

import "./search-form.scss";

const SearchForm = () => {
  const { register, handleSubmit, control, getValues } = useForm();
  //const navigate = useNavigate();
  console.log();
  const onSubmit = async (data) => {
    // console.log(data);
    // const temp = await getSearched(data);
    // console.log(temp);
    //сюда как то получить строку для запроса к апи и перейти на страницу где вывядятся все подходящие
    // navigate("/казахстан");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search_form">
      <div className="search_form_elem">
        <DropDownSearchInput control={control} getValues={getValues} />
        <input value="SEARCH" type="submit" className="search_form_submit" />
      </div>
      <div className="search_form_grid">
        <div className="search_form_grid_column">
          <SearchTypePicker register={register} />
          <div className="search_form_grid_column_elem search_form_grid_column_elem_separator"></div>
          <ManaPicker register={register} />
        </div>
        <div className="search_form_grid_column"></div>
      </div>
    </form>
  );
};

export default SearchForm;
