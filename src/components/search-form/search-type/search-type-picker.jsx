import SearchTypeRadiobtn from "./search-type-radiobtn";

const SearchTypePicker = ({ register }) => {
  return (
    <>
      <div className="search_form_grid_column_elem search_form_grid_column_elem_text">
        Search cards by:
      </div>
      <div className="search_form_grid_column_elem">
        <SearchTypeRadiobtn type="name" register={register} defaultChecked />
        <SearchTypeRadiobtn type="multiverseid" register={register} />
        <SearchTypeRadiobtn type="Smth" register={register} />
      </div>
    </>
  );
};

export default SearchTypePicker;
