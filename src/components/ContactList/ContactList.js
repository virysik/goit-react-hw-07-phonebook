import { useDispatch, useSelector } from 'react-redux'
import { contactsOperations, contactsSelectors } from 'redux/phonebook'
import { Ul } from './ContactList.styles'
import ContactListElement from '../ContactListElement'

function ContactList() {
  const contactsArr = useSelector(contactsSelectors.getContactsArr)
  const dispatch = useDispatch()

  return (
    <Ul>
      {contactsArr.map(({ id, name, number }) => {
        return (
          <ContactListElement
            key={id}
            contactId={id}
            contactName={name}
            contactNumber={number}
            onDelete={() => dispatch(contactsOperations.fetchDeleteContact(id))}
          />
        )
      })}
    </Ul>
  )
}

export default ContactList
