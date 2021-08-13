import { Ul } from './ContactList.styles'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from '../../redux/phonebook/phonebook-actions'
import { getContactsArr } from '../../redux/phonebook/contacts-selectors'
import ContactListElement from '../ContactListElement'

function ContactList() {
  const contactsArr = useSelector(getContactsArr)
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
            onDelete={() => dispatch(deleteContact(id))}
          />
        )
      })}
    </Ul>
  )
}

export default ContactList
