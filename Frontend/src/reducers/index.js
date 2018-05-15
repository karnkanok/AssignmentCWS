const initialState = {
  curriculums:[]
};

export default(state = initialState, action) => {
  switch (action.type) {
    case 'GET_CURRICULUMS':
      return{
            ...state,
            curriculums:action.payload.data

      }

    default:
      return state;
  }
}
