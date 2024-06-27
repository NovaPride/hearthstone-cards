const ManaCheckbox = ({ color, imgSrc, register }) => {
  if (!color || !imgSrc || !register) {
    console.error("You missed some props!");
    return <></>;
  }
  color = color.toLowerCase();
  const conValue = {
    white: "W",
    blue: "U",
    black: "B",
    red: "R",
    green: "G",
  }[color];
  return (
    <label htmlFor={"mana-" + color}>
      <input
        {...register("mana")}
        type="checkbox"
        value={conValue}
        id={"mana-" + color}
        className="search_form_grid_column_elem_checkbox"
      />
      <img src={imgSrc} alt={color + " mana"} />
    </label>
  );
};

export default ManaCheckbox;
