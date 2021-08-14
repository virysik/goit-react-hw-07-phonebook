import { Ul } from './ContactList.styles'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchDeleteContact } from '../../redux/phonebook/contacts-operations'
import { fetchContacts } from '../../redux/phonebook/contacts-operations'
import { getContactsArr } from '../../redux/phonebook/contacts-selectors'
import ContactListElement from '../ContactListElement'

function ContactList() {
  const contactsArr = useSelector(getContactsArr)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <Ul>
      {contactsArr.map(({ id, name, number }) => {
        return (
          <ContactListElement
            key={id}
            contactId={id}
            contactName={name}
            contactNumber={number}
            onDelete={() => dispatch(fetchDeleteContact(id))}
          />
        )
      })}
    </Ul>
  )
}

export default ContactList
