import useHttp from "../hooks/http.hook";

export const useMTGService = () => {
  const _apiBase = "https://api.magicthegathering.io/v1";

  const { request, loading, error, clearError } = useHttp();

  const getSearched = async ({ searchType = "", searchText = "", mana = [] }) => {
    const baseSearchValue = {
      "name": `&name=${searchText}`,
      "multiverseid": `&multiverseid=${searchText}`,
      "": "",
    }[searchType];
    const colors = Object.keys(mana).length ? `&colors="${mana.toString()}"` : "";
    const res = await request(`${_apiBase}/cards?contains=imageUrl${baseSearchValue}${colors}`);
    return res.cards;
  }

  const getCardById = async (id) => {
    const res = await request(`${_apiBase}/cards?contains=imageUrl&multiverseid=${id}`);
    return res.cards[0];
  }

  const getCards = async (page = 1, perPage = 96) => {
    const res = await request(`${_apiBase}/cards?contains=imageUrl&pageSize=${perPage}&page=${page}`);
    return res.cards;
  }

  // const _transformCard = ({
  //   id,
  //   multiverseid,
  //   name,
  //   imageUrl,
  //   artist
  // }) => ({
  //   id,
  //   multiverseid,
  //   name,
  //   imageUrl,
  //   artist
  // });

  return { loading, error, clearError, getCards, getCardById, getSearched }
}