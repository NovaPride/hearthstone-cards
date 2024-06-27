import ManaCheckbox from "./mana-checkbox";
import mana from "../../assets/img/mana";

const ManaPicker = ({ register }) => {
  return (
    <>
      <div className="search_form_grid_column_elem search_form_grid_column_elem_text">
        Search by Color:
      </div>
      <div className="search_form_grid_column_elem">
        <ManaCheckbox
          color="white"
          imgSrc={mana.White_Mana}
          register={register}
        />
        <ManaCheckbox
          color="blue"
          imgSrc={mana.Blue_Mana}
          register={register}
        />
        <ManaCheckbox
          color="black"
          imgSrc={mana.Black_Mana}
          register={register}
        />
        <ManaCheckbox color="red" imgSrc={mana.Red_Mana} register={register} />
        <ManaCheckbox
          color="green"
          imgSrc={mana.Green_Mana}
          register={register}
        />
      </div>
    </>
  );
};

export default ManaPicker;
