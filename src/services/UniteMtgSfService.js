import { useMTGService } from "./MTGService";
import { useScryfallService } from "./ScryfallService";


export const useUniteMtgSfService = () => {
  const MTGService = useMTGService();
  const SFService = useScryfallService();

  const loading = MTGService.loading || SFService.loading;
  const error = MTGService.error || SFService.error;

  const clearError = () => {
    MTGService.clearError();
    SFService.clearError();
  };

  async function getCardById(id) {
    const {
      name,
      manaCost,
      colors,
      type,
      rarity,
      set,
      setName,
      text,
      artist,
      originalText,
      multiverseid,
    } = await MTGService.getCardById(id);
    const { released_at, image_uris, legalities, prices, purchase_uris } =
      await SFService.getCardById(id);
    return {
      name,
      text,
      originalText,
      manaCost,
      colors,
      type,
      rarity,
      set,
      setName,
      artist,
      multiverseid,
      released_at,
      image_uris,
      legalities,
      prices,
      purchase_uris,
    };
  }

  return { loading, error, clearError, getCardById }
}