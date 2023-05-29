import PropTypes from "prop-types";

const Filter = ({ filterValue, filteringMethod }) => (
    <input type="text" name="search"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Use only letters, apostrophe, dash and spaces."
        value={filterValue} onChange={filteringMethod}
    />
)

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  filteringMethod: PropTypes.func.isRequired,  
};

export default Filter;