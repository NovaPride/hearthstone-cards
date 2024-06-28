import DropDownElement from "./dropdown-element";
import DropDownPseudoElement from "./dropdown-pseudo-element";

const DropDown = ({ cards, showDropDown = false, loading = false }) => {
  const dropDownStyle = showDropDown
    ? "dropdown_search"
    : "dropdown_search  dropdown_search_hide";
  if (loading) {
    return (
      <ul className={dropDownStyle}>
        <DropDownPseudoElement key="loading" text={`Loading...`} />
      </ul>
    );
  }
  if (Object.keys(cards).length === 0)
    return (
      <ul className={dropDownStyle}>
        <DropDownPseudoElement
          key="nocards"
          text={`There is no cards with that parameters...`}
        />
      </ul>
    );
  const cardsSize = Object.keys(cards).length;
  const view =
    cardsSize >= 10
      ? cards.slice(0, 10).map(({ id, name, multiverseid }, i) => {
          return i >= 9 ? (
            <DropDownPseudoElement
              key="more"
              text={`And ${cardsSize - 9} more...`}
            />
          ) : (
            <DropDownElement key={id} name={name} multiverseid={multiverseid} />
          );
        })
      : cards.map(({ id, name, multiverseid }, i) => {
          return (
            <DropDownElement key={id} name={name} multiverseid={multiverseid} />
          );
        });
  return <ul className={dropDownStyle}>{view}</ul>;
};

export default DropDown;
