import { createSlice } from '@reduxjs/toolkit'
import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './contacts-operations'

const initialState = {
  items: [],
  filter: '',
  status: null,
  error: null,
}

const loading = 'Loading'
const error = 'Error'

const phonebookSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload
    },
  },

  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = null
      state.error = null
    },
    [fetchContacts.pending]: (state, action) => {
      state.status = loading
      state.error = null
    },
    [fetchContacts.rejected]: (state, action) => {
      state.status = null
      state.error = error
    },
    [fetchAddContact.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload]
      state.status = null
      state.error = null
    },
    [fetchAddContact.pending]: (state, action) => {
      state.status = loading
      state.error = null
    },
    [fetchAddContact.rejected]: (state, action) => {
      state.status = null
      state.error = error
    },
    [fetchDeleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      state.status = null
      state.error = null
    },
    [fetchDeleteContact.pending]: (state, action) => {
      state.status = loading
      state.error = null
    },
    [fetchDeleteContact.rejected]: (state, action) => {
      state.status = null
      state.error = error
    },
  },
})

export const { changeFilter } = phonebookSlice.actions
export default phonebookSlice.reducer
