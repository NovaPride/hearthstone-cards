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
      text,
      artist,
      originalText,
      multiverseid,
    } = await MTGService.getCardById(id);
    const {
      released_at,
      image_uris,
      legalities,
      prices,
      purchase_uris,
      power,
      toughness,
      rarity,
      set,
      set_name,
      foil,
      nonfoil,
    } = await SFService.getCardById(id);
    return {
      name,
      manaCost,
      colors,
      type,
      text,
      artist,
      originalText,
      multiverseid,
      released_at,
      image_uris,
      legalities,
      prices,
      purchase_uris,
      power,
      toughness,
      rarity,
      set,
      set_name,
      foil,
      nonfoil,
    };
  }

  return { loading, error, clearError, getCardById };
};
