
const Filter = ({ option, search }) => {


    return (
        <input type="text" name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Use only letters, apostrophe, dash and spaces."
            // value={} onChange={}
        />
    )
}
// const Filter = ({search}) = (
//     <input type="text" name="search"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Use only letters, apostrophe, dash and spaces."
        
//     />
// )

// const Filter = () = (
//     <input type="text" name="search"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Use only letters, apostrophe, dash and spaces."
        
//     />
// )

export default Filter;