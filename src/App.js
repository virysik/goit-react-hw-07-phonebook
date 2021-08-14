import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { contactsOperations, contactsSelectors } from 'redux/phonebook'
import { Container, Title, TitleContacts } from './App.styles'
import { TiContacts } from 'react-icons/ti'
import { IoIosContacts } from 'react-icons/io'
import { Toaster } from 'react-hot-toast'
import ContactForm from './components/ContactForm'
import Filter from './components/Filter'
import ContactList from './components/ContactList'

function App() {
  const contacts = useSelector(contactsSelectors.getItems)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  }, [dispatch])

  return (
    <Container>
      <Title>
        <TiContacts /> Phonebook
      </Title>
      <ContactForm />
      {contacts.length > 0 && (
        <>
          <TitleContacts>
            <IoIosContacts />
            Contacts
          </TitleContacts>
          <Filter />
          <ContactList />
        </>
      )}
      <Toaster />
    </Container>
  )
}

export default App
