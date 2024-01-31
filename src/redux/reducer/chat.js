let initialState = {
  ChatPersonal: [],
  Chat: {},
}

export function ChatReducer(state = initialState, actions) {
  switch (actions.type) {
    case 'Fetch/GetAllChatPersonal':
      return {
        ...state,
        ChatPersonal: actions.payload,
      }
    case 'Fetch/GetOneChat':
      return {
        ...state,
        Chat: actions.payload,
      }

    default:
      return state
  }
}
