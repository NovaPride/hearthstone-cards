import SearchTypeRadiobtn from "./search-type-radiobtn";

const SearchTypePicker = ({ register, setSearchType }) => {
  return (
    <>
      <div className="search_form_grid_column_elem search_form_grid_column_elem_text">
        Search cards by:
      </div>
      <div className="search_form_grid_column_elem">
        <SearchTypeRadiobtn
          type="name"
          register={register}
          setSearchType={setSearchType}
        />
        <SearchTypeRadiobtn
          type="multiverseid"
          register={register}
          setSearchType={setSearchType}
        />
        <SearchTypeRadiobtn
          type="Smth"
          register={register}
          setSearchType={setSearchType}
        />
      </div>
    </>
  );
};

export default SearchTypePicker;
