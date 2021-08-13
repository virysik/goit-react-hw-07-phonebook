import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Label, Input, Button } from './ContactForm.styles'
import { addContact } from '../../redux/phonebook/phonebook-actions'
import { getItems } from '../../redux/phonebook/contacts-selectors'
import { GiButterflyWarning } from 'react-icons/gi'
import { nanoid } from 'nanoid'
import toast from 'react-hot-toast'

function ContactForm() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const items = useSelector(getItems)
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget

    switch (name) {
      case 'name':
        return setName(value)

      case 'number':
        return setNumber(value)

      default:
        throw new Error(`there is no such name as ${name}`)
    }
  }

  const resetFormInputs = () => {
    setName('')
    setNumber('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const normalizedName = name.toLowerCase()
    const contactExists = items.find(
      ({ name }) => name.toLowerCase() === normalizedName,
    )

    if (contactExists) {
      toast(`${name} is already in contacts`, {
        style: { color: '#456173' },
        icon: <GiButterflyWarning />,
      })
      resetFormInputs()
      return
    }
    const id = nanoid()
    dispatch(addContact({ name, number, id }))
    resetFormInputs()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          onChange={handleInputChange}
          type="text"
          name="name"
          autoComplete="off"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Label>
      <Label>
        Number
        <Input
          onChange={handleInputChange}
          type="tel"
          name="number"
          autoComplete="off"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  )
}

export default ContactForm
