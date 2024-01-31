let initialState = {
  GroupChatPersonal: [],
  GroupChat: {},
}

export function GroupChatReducer(state = initialState, actions) {
  switch (actions.type) {
    case 'Fetch/GetAllGroupChatPersonal':
      return {
        ...state,
        GroupChatPersonal: actions.payload,
      }
    case 'Fetch/GetOneGroupChat':
      return {
        ...state,
        GroupChat: actions.payload,
      }

    default:
      return state
  }
}
