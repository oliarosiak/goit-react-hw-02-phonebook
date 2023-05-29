import PropTypes from "prop-types";

const ContactList = ({ contactsNames, deleteBtn }) => (
    <ol>
        {contactsNames.map(contactName => (
        <li key={contactName.id}>
            <span>{contactName.name}:</span> <span>{contactName.number}</span>
            <button type='button' onClick={()=>deleteBtn(contactName.id)}>delete</button> 
        </li>
        ))}

    </ol>
)

ContactList.propTypes = {
    contactsNames: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
    deleteBtn: PropTypes.func.isRequired,
};

export default ContactList;