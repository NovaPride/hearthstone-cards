import useHttp from "../hooks/http.hook";

export const useScryfallService = () => {
  const _apiBase = "https://api.scryfall.com";

  const { request, loading, error, clearError } = useHttp();


  // const getSearched = async ({ searchType = "", searchText = "", mana = [] }) => {
  //   const baseSearchValue = {
  //     "name": `&name=${searchText}`,
  //     "multiverseid": `&multiverseid=${searchText}`,
  //     "": "",
  //   }[searchType];
  //   const colors = Object.keys(mana).length ? `&colors="${mana.toString()}"` : "";
  //   const res = await request(`${_apiBase}/cards?contains=imageUrl${baseSearchValue}${colors}`);
  //   return res.cards;
  // }

  const getCardById = async (id) => {
    const res = await request(`${_apiBase}/cards/multiverse/${id}`);
    return res;
    // return res.cards.map(_transformCard);
  }

  // const getCards = async (page = 1, perPage = 96) => {
  //   const res = await request(`${_apiBase}/cards?contains=imageUrl&pageSize=${perPage}&page=${page}`);
  //   return res.cards;
  //   // return res.cards.map(_transformCard);
  // }

  const _transformCard = ({
    id,
    multiverseid,
    name,
    imageUrl,
    artist
  }) => ({
    id,
    multiverseid,
    name,
    imageUrl,
    artist
  });



  return { loading, error, clearError, getCardById }
}