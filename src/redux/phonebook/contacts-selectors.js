import { createSelector } from 'reselect'

export const getItems = (state) => state.contacts.items
export const getFilter = (state) => state.contacts.filter

export const getContactsArr = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    const normalazedFilter = filter.toLowerCase()

    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalazedFilter),
    )
  },
)
