import { useState, useEffect, useDeferredValue, useTransition } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDebounce } from "use-debounce";

import { useMTGService } from "../../services/MTGService";

import mana from "../../assets/img/mana/mana";
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
    // const temp = await getCardByName(data.cardName);
    // console.log(cards);
    console.log(data);
    //сюда как то получить строку для запроса к апи и перейти на страницу где вывядятся все подходящие
    // navigate("/казахстан");
  };

  const elasticSearch = async (text) => {
    getCardByName(text).then((data) => {
      setCards(data);
    });
  };

  useEffect(() => {
    if (searchTextDebounceValue.length > 2) {
      elasticSearch(searchTextDebounceValue);
    }
  }, [searchTextDebounceValue]);

  const modal = isModal ? (
    <Modal cards={cards} />
  ) : (
    <Modal cards={cards} style={"card_modal_hide"} />
  );

  //register re-writes onBlur, onChange, value and name. so u need do to this stuff
  const { onBlur, onChange, ...fieldProps } = register("cardName", {
    required: true,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search_form">
      <div className="search_form_elem">
        <input
          className="search_form_name"
          autoComplete="off"
          value={searchText}
          onFocus={() => setIsModal(true)}
          onBlur={(e) => {
            setIsModal(false);
            onBlur(e);
          }}
          onChange={(e) => {
            setSearchText(e.target.value);
            onChange(e);
          }}
          {...fieldProps}
        />
        <input value="SEARCH" type="submit" className="search_form_submit" />
      </div>
      {modal}
      <div className="search_form_grid">
        <div className="search_form_grid_column">
          <div className="search_form_grid_column_elem search_form_grid_column_elem_text">
            Search cards by:
          </div>
          <div className="search_form_grid_column_elem">
            <label htmlFor="searchType-name">
              <input
                {...register("searchType")}
                type="radio"
                value="name"
                id="searchType-name"
                className="search_form_grid_column_elem_radio"
                defaultChecked={true}
              />
              Name
            </label>
            <label htmlFor="searchType-multiId">
              <input
                {...register("searchType")}
                type="radio"
                value="multiId"
                id="searchType-multiId"
                className="search_form_grid_column_elem_radio"
              />
              MultiId
            </label>
            <label htmlFor="searchType-smth">
              <input
                {...register("searchType")}
                type="radio"
                value="smth"
                id="searchType-smth"
                className="search_form_grid_column_elem_radio"
              />
              Smth
            </label>
          </div>
          <div className="search_form_grid_column_elem search_form_grid_column_elem_separator"></div>
          <div className="search_form_grid_column_elem search_form_grid_column_elem_text">
            Search by Color:
          </div>
          <div className="search_form_grid_column_elem">
            <label htmlFor="mana-white">
              <input
                {...register("mana")}
                type="checkbox"
                value="white"
                id="mana-white"
                className="search_form_grid_column_elem_checkbox"
              />
              <img src={mana.White_Mana} alt="White_Mana" />
            </label>
            <label htmlFor="mana-blue">
              <input
                {...register("mana")}
                type="checkbox"
                value="blue"
                id="mana-blue"
                className="search_form_grid_column_elem_checkbox"
              />
              <img src={mana.Blue_Mana} alt="Blue_Mana" />
            </label>
            <label htmlFor="mana-black">
              <input
                {...register("mana")}
                type="checkbox"
                value="black"
                id="mana-black"
                className="search_form_grid_column_elem_checkbox"
              />
              <img src={mana.Black_Mana} alt="Black_Mana" />
            </label>
            <label htmlFor="mana-red">
              <input
                {...register("mana")}
                type="checkbox"
                value="red"
                id="mana-red"
                className="search_form_grid_column_elem_checkbox"
              />
              <img src={mana.Red_Mana} alt="Red_Mana" />
            </label>
            <label htmlFor="mana-green">
              <input
                {...register("mana")}
                type="checkbox"
                value="green"
                id="mana-green"
                className="search_form_grid_column_elem_checkbox"
              />
              <img src={mana.Green_Mana} alt="Green_Mana" />
            </label>
          </div>
        </div>
        <div className="search_form_grid_column"></div>
      </div>
    </form>
  );
};

const Modal = ({ cards, style }) => {
  if (Object.keys(cards).length === 0)
    return (
      <ul className={"card_modal " + style}>
        <li key={666} className="card_modal_elem_wrapper">
          <div className="card_modal_elem_name">
            <span>There is no cards with that name...</span>
          </div>
        </li>
      </ul>
    );
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
              <Link
                to={"/card/" + multiverseid}
                className="card_modal_elem_wrapper">
                <div className="card_modal_elem_wrapper_name">{name}</div>
                <div className="card_modal_elem_wrapper_id">{multiverseid}</div>
              </Link>
            </li>
          );
        })
      : cards.map(({ id, name, multiverseid }, i) => {
          return (
            <li key={id} className="card_modal_elem">
              <Link
                to={"/card/" + multiverseid}
                className="card_modal_elem_wrapper">
                <div className="card_modal_elem_wrapper_name">{name}</div>
                <div className="card_modal_elem_wrapper_id">{multiverseid}</div>
              </Link>
            </li>
          );
        });
  return <ul className={"card_modal " + style}>{view}</ul>;
};
