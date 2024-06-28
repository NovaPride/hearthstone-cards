const SearchTypeRadiobtn = ({ type, register, ...props }) => {
  if (!type || !register) {
    console.error("You missed some props!");
    return <></>;
  }
  type = type.toLowerCase();
  const text = {
    name: "Name",
    multiverseid: "MultiId",
    smth: "Smth",
  }[type];
  return (
    <label htmlFor={"searchType-" + type}>
      <input
        {...props}
        {...register("searchType")}
        type="radio"
        value={type}
        id={"searchType-" + type}
        className="search_form_grid_column_elem_radio"
      />
      {text}
    </label>
  );
};

export default SearchTypeRadiobtn;
