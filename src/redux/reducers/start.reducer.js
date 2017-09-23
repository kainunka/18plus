import * as types from '../actionTypes';
import initialState from '../initialState';

export default  (state = initialState.start, action) => {
    switch (action.type) {

        case types.AUTH:   
            return {
                ...state,
                auth: action.auth
            };
        
        /*case types.CHECK_LANGUAGE:
            return {
                ...state,
                checkLanguage: action.checkLanguage
            }
        
        case types.CHECK_AUTH:
            return {
                ...state,
                checkAuth: action.checkAuth
            }

        case types.USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }

        case types.DATA_USER:
            return {
                ...state,
                dataUser: action.dataUser
            }

        case types.LOADING_STATE:
            return {
                ...state,
                loading: action.LOADING_STATE
            }
        case types.FB_TOKEN:
            return {
                ...state,
                fbToken: action.fbToken
            }*/

        default:
            return state;
    }
}