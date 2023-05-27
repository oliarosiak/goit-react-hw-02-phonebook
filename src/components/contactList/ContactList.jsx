
const ContactList = ({ contactsNames }) => (
    <ol>
        {contactsNames.map(contactName => (
        <li key={contactName.id}>
            <span>{contactName.name}:</span> <span>{contactName.number}</span>
        </li>
        ))}

    </ol>
)

export default ContactList;