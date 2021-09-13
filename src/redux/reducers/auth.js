const initialState = {
  user: null,
  isLogin: false,
  isExist: false,
  authtoken: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'VERIFY_OTP_SUCESS':
      return {
        ...state,
        isLogin: action.payload.isLogin,
        user: action.payload.user,
        authtoken: action.payload.token,
        isExist: action.payload.isLogin ? false : true,
      };
    case 'VERIFY_OTP_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    case 'NEW_USER_SUCESS':
      return {
        ...state,
        user: action.payload.user,
        isLogin: action.payload.isLogin,
        authtoken: action.payload.token,
        isExist: action.payload.isLogin ? false : true,
      };
    case 'NEW_USER_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        user: null,
        isLogin: false,
        error: null,
        authtoken: null,
        isExist: false,
      };
    case 'LOGOUT_USER_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
