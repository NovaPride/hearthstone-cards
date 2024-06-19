import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useMTGService } from "../../services/MTGService";

import "./search-page.scss";

const SearchPage = () => {
  return (
    <div className="search_page">
      <SearchForm />
    </div>
  );
};

export default SearchPage;

const SearchForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { loading, error, getCardByName, clearError } = useMTGService();

  const onSubmit = async (data) => {
    console.log(data);
    const temp = await getCardByName(data.cardName);
    console.log(temp);
    // navigate("/казахстан");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search_form">
      <div className="search_form_elem">
        <input
          {...register("cardName", { required: true })}
          className="search_form_name"
        />
        <input value="SEARCH" type="submit" className="search_form_submit" />
      </div>
    </form>
  );
};
