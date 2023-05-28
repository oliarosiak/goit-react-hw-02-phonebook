
const Filter = ({option, search}) => (
    <input type="text" name="search"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Use only letters, apostrophe, dash and spaces."
        value={ option} onChange={search}
    />
)

export default Filter;