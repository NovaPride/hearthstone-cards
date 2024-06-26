import "./card-prices.scss";

const CardPrices = ({ prices }) => {
  if (!prices) return <></>
  const { usd, usd_foil, eur, eur_foil } = prices;

  const pricesView = prices ? (
    <>
      <div className="card_prices_elem">
        <div className="card_prices_elem_text">Prices:</div>
      </div>
      {usd ? (
        <div className="card_prices_elem">
          <div className="card_prices_elem_usd">
            USD: {usd}$ {usd_foil ? ` / ${usd_foil}$` : null}
          </div>
        </div>
      ) : null}
      {eur ? (
        <div className="card_prices_elem">
          <div className="card_prices_elem_eur">
            EUR: {eur}€ {eur_foil ? ` / ${eur_foil}€` : null}
          </div>
        </div>
      ) : null}
    </>
  ) : null;

  return <div className="card_prices">{pricesView}</div>;
};

export default CardPrices;
