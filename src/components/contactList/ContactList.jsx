import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contactsNames, deleteBtn }) => (
    <ul className={css.list}>
        {contactsNames.map(contactName => (
            <li key={contactName.id} className={css.item} >
            <div>
                <span>{contactName.name}:</span> <span>{contactName.number}</span>
            </div>
            <button type='button' onClick={()=>deleteBtn(contactName.id)} className={css.btn} >delete</button> 
        </li>
        ))}

    </ul>
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