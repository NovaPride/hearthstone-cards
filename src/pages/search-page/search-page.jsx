import { useState, useEffect, useDeferredValue, useTransition } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDebounce } from "use-debounce";

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
  const [searchText, setSearchText] = useState("");
  const [cards, setCards] = useState([]);
  const [searchTextDebounceValue] = useDebounce(searchText, 333);
  const [isModal, setIsModal] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const { loading, error, getCardByName, clearError } = useMTGService();

  const onSubmit = async (data) => {
    const temp = await getCardByName(data.cardName);
    console.log(temp);
    // navigate("/казахстан");
  };

  const elasticSearch = async (text) => {
    getCardByName(text)
      .then((data) => {
        setCards(data);
      })
      .then(() => setIsModal(true));
    // navigate("/казахстан");
  };

  useEffect(() => {
    if (searchTextDebounceValue.length > 2){
      elasticSearch(searchTextDebounceValue)
    } else {
      setIsModal(false)
    }
      
  }, [searchTextDebounceValue]);

  const modal = isModal ? <Modal cards={cards} /> : null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search_form">
      <div className="search_form_elem">
        <input
          {...register("cardName", { required: true })}
          className="search_form_name"
          autoComplete="off"
          value={searchText}
          onChange={({ target }) => setSearchText(target.value)}
        />
        <input value="SEARCH" type="submit" className="search_form_submit" />
      </div>
      {modal}
    </form>
  );
};

const Modal = ({ cards }) => {
  if (Object.keys(cards).length === 0) return <></>;
  const cardsSize = Object.keys(cards).length;
  const view =
    cardsSize >= 10
      ? cards.slice(0, 10).map(({ id, name, multiverseid }, i) => {
          return i >= 9 ? (
            <li key={id} className="card_modal_elem_wrapper">
              <div className="card_modal_elem_name">
                <span>And {cardsSize - 9} more...</span>
              </div>
            </li>
          ) : (
            <li key={id} className="card_modal_elem">
              <Link to={"/card/" + multiverseid} className="card_modal_elem_wrapper">
                <div className="card_modal_elem_wrapper_name">{name}</div>
                <div className="card_modal_elem_wrapper_id">{multiverseid}</div>
              </Link>
            </li>
          );
        })
      : cards.map(({ id, name, multiverseid }, i) => {
          return (
            <li key={id} className="card_modal_elem">
              <Link to={"/card/" + multiverseid} className="card_modal_elem_wrapper">
                <div className="card_modal_elem_wrapper_name">{name}</div>
                <div className="card_modal_elem_wrapper_id">{multiverseid}</div>
              </Link>
            </li>
          );
        });
  return <ul className="card_modal">{view}</ul>;
};
