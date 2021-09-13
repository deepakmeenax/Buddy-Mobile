const initialState = {
  loading: false,
  camps: [],
  detail: null,
  banks: [],
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_BANK_SUCESS':
      return {
        ...state,
        loading: false,
        banks: action.payload.data,
      };
    case 'FETCH_CAMP_SUCESS':
      return {
        ...state,
        loading: false,
        camps: action.payload.data,
      };
    case 'FETCH_CAMP_DETAIL_SUCESS':
      return {
        ...state,
        loading: false,
        detail: action.payload.data,
        error: false,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        loading: false,
        banks: [],
        camps: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
