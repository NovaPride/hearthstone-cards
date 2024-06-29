import useHttp from "../hooks/http.hook";

export const useScryfallService = () => {
  const _apiBase = "https://api.scryfall.com";

  const { request, loading, error, clearError } = useHttp();

  const getCardById = async (id) => {
    const res = await request(`${_apiBase}/cards/multiverse/${id}`);
    return res;
  }

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