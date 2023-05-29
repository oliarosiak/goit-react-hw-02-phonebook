
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

export default ContactList;