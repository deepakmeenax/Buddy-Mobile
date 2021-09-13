import * as api from '../../api';

export const regDonor =
  ({ id }) =>
  async dispatch => {
    try {
      dispatch({ type: 'REG_REQUEST', payload: [] });
      const { data } = await api.addparticipant({ id });
      dispatch({ type: 'REG_SUCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'REG_FAILURE', payload: error.message });
      console.log('from action reg donor fail');
      console.log(error);
    }
  };
