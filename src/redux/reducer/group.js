let initialState = {
  GroupPersonal: [],
  Group: {},
}

export function GroupReducer(state = initialState, actions) {
  switch (actions.type) {
    case 'Fetch/GetAllGroups':
      return {
        ...state,
        Groups: actions.payload,
      }
    case 'Fetch/GetAllGroupPersonal':
      return {
        ...state,
        GroupPersonal: actions.payload,
      }
    case 'Fetch/GetOneGroup':
      return {
        ...state,
        Group: actions.payload,
      }

    default:
      return state
  }
}
