export const noteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [
        ...state,
        {
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "REMOVE_NOTE":
      return state.filter((note, idx) => idx !== action.payload.id);
    default:
      return state;
  }
};
