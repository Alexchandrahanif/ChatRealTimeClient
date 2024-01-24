let initialState = {
  Users: [],
  User: {},
  Profile: {},
}

export function UserReducer(state = initialState, actions) {
  switch (actions.type) {
    case 'Fetch/GetAllUsers':
      return {
        ...state,
        Users: actions.payload,
      }

    default:
      return state
  }
}
