export const getItems = (state) => state.contacts.items
export const getFilter = (state) => state.contacts.filter

export const getContactsArr = (state) => {
  const items = getItems(state)
  const filter = getFilter(state)

  const normalazedFilter = filter.toLowerCase()

  return items.filter(({ name }) =>
    name.toLowerCase().includes(normalazedFilter),
  )
}
