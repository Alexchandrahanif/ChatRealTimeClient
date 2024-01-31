let initialState = {
  Contacts: [],
  ContactPersonal: [],
  Contact: {},
}

export function ContactReducer(state = initialState, actions) {
  switch (actions.type) {
    case 'Fetch/GetAllContacts':
      return {
        ...state,
        Contacts: actions.payload,
      }
    case 'Fetch/GetAllContactPersonal':
      return {
        ...state,
        ContactPersonal: actions.payload,
      }
    case 'Fetch/GetOneContact':
      return {
        ...state,
        Contact: actions.payload,
      }

    default:
      return state
  }
}
