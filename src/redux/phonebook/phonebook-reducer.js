import { createSlice } from '@reduxjs/toolkit'
import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './contacts-operations'

const initialState = {
  items: [],
  filter: '',
  isLoading: null,
  status: null,
  error: null,
}
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
      state.status = 'loading'
      state.error = null
    },
    [fetchContacts.rejected]: (state, action) => {
      state.status = null
      state.error = 'Error'
    },
    [fetchAddContact.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload]
      state.status = null
      state.error = null
    },
    [fetchAddContact.pending]: (state, action) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchAddContact.rejected]: (state, action) => {
      state.status = null
      state.error = 'Error'
    },
    [fetchDeleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      state.status = null
      state.error = null
    },
    [fetchDeleteContact.pending]: (state, action) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchDeleteContact.rejected]: (state, action) => {
      state.status = null
      state.error = 'Error'
    },
  },
})

// const items = createReducer([], {
//   [addContact]: (state, action) => [action.payload, ...state],
//   [deleteContact]: (state, action) =>
//     state.filter(({ id }) => id !== action.payload),
//   [fetchContacts.fulfilled]: (_, action) => action.payload,
// })

// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// })

// const isLoading = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
// })

// const error = createReducer(null, {
//   [fetchContacts.rejected]: (_, { payload }) => payload,
//   [fetchContacts.pending]: () => null,
// })

export const { changeFilter } = phonebookSlice.actions
export default phonebookSlice.reducer
