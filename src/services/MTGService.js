import useHttp from "../hooks/http.hook";

export const useMTGService = () => {
  const _apiBase = "https://api.magicthegathering.io/v1";

  const { request, loading, error, clearError } = useHttp();

  // useEffect(() => {


  //   const nigger = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const result = await response.text();
  //       console.log(result);
  //       const res = await JSON.parse(result);
  //       console.log(res);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   nigger();
  // }, []);


  //https://scryfall.com/docs/api/cards/search
  // const aboba = async (page = 1, perPage = 96) => {
  //   const res = await request(`https://api.scryfall.com/cards/search?order=cmc&q=c%3Ared+pow%3D3`);
  //   console.log(res)
  //   // return res.cards.map(_transformCard);
  // }

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
    // return res.cards.map(_transformCard);
  }

  const getCards = async (page = 1, perPage = 96) => {
    const res = await request(`${_apiBase}/cards?contains=imageUrl&pageSize=${perPage}&page=${page}`);
    return res.cards;
    // return res.cards.map(_transformCard);
  }

  // const getCharacter = async (id) => {
  //   const res = await request(`${_apiBase}/characters/${id}?apikey=${apiKey}`);
  //   return _transformCharacter(res.data.results[0]);
  // }

  // const getCharacterByName = async (name) => {
  //   const res = await request(`${_apiBase}/characters?name=${name}&apikey=${apiKey}`);
  //   return _transformCharacter(res.data.results[0]);
  // }

  // const getAllCharacters = async (additionalOffset) => {
  //   const res = await request(`${_apiBase}/characters?limit=9&offset=${additionalOffset}&apikey=${apiKey}`);
  //   return res.data.results.map(_transformCharacter);
  // }

  // const getComic = async (id) => {
  // 	const res = await request(`${_apiBase}/comics/${id}?apikey=${apiKey}`);
  // 	return _transformComics(res.data.results[0]);
  // }

  // const getAllComics = async (additionalOffset) => {
  //   const res = await request(`${_apiBase}/comics?limit=8&offset=${additionalOffset}&apikey=${apiKey}`);
  //   return res.data.results.map(_transformComics);
  // }

  // const _transformComics = (comic) => {
  //   return {
  //     id: comic.id,
  //     title: comic.title,
  //     thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
  // 		description: comic.description || "There is no description",
  // 		pageCount: comic.pageCount
  // 			? `${comic.pageCount} p.`
  // 			: "No information about the number of pages",
  // 		language: comic.textObjects[0]?.language || "en-us",
  // 		price: comic.prices[0].price
  // 			? `${comic.prices[0].price}$`
  // 			: "NOT AVAILABLE",
  //   }
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



  return { loading, error, clearError, getCards, getCardById, getSearched }
  // return {loading, error, getCharacter, getCharacterByName, getAllCharacters, getComic, getAllComics, clearError}
}