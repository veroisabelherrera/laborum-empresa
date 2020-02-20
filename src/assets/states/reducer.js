const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_INFORMATION':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'ADD_ID':
      return {
        stateId: [...state.stateId, action.payload],
      };
      // case 'ADD_WORKEXPERIENCE':
      //   return {
      //     ...state,
      //     [action.field]: action.value,
      //   };
    case 'ADD_EDUCATION':
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      throw new Error();
  }
};
export default Reducer;
