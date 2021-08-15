import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  fetchContactsApi,
  fetchPostNewContact,
  removeContactById,
} from '../../services/contacts-api'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await fetchContactsApi()
    return contacts
  },
)

export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (contact) => {
    const contacts = await fetchPostNewContact(contact)
    return contacts
  },
)

export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id) => {
    const contacts = await removeContactById(id)
    return contacts
  },
)
