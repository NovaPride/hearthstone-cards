import "./mtg-symbols.scss";

const MtgSymbols = ({ symbols }) => {
  const symArr = symbols.split(/\{|\}/).filter(Boolean);
  return (
    <>
      {symArr.map((symbol, i) => {
        return (
          <span
            className="mtg-symbol"
            key={i}
            style={{
              backgroundImage: `url(https://svgs.scryfall.io/card-symbols/${symbol}.svg)`,
            }}></span>
        );
      })}
    </>
  );
};

export default MtgSymbols;
