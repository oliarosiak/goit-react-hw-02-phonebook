import PropTypes from "prop-types";
import css from './Filter.module.css';

const Filter = ({ filterValue, filteringMethod }) => (
  <div className={css.wrapper} >
    <label className={css.label} >
      Find contacts by name
      <input type="text" name="search" className={css.input}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Use only letters, apostrophe, dash and spaces."        
        value={filterValue} onChange={filteringMethod}
      />
    </label>
  </div>
)

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  filteringMethod: PropTypes.func.isRequired,  
};

export default Filter;