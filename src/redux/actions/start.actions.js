import * as types from '../actionTypes';

export const authSuccess = (data) => {
    return {
        type: types.AUTH,
        auth: data
    }
}

export const auth = (data) => {
    return (dispatch) => {
        return dispatch(
            authSuccess(data)
        );
    }
}