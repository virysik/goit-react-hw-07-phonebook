import { createSelector } from 'reselect'

export const getStatus = (state) => state.contacts.status

export const getItems = (state) => state.contacts.items
export const getFilter = (state) => state.contacts.filter

export const getContactsArr = createSelector(
  [getItems, getFilter],
  (items, filter) =>
    items.filter(
      (item) =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.number.includes(filter),
    ),
)
