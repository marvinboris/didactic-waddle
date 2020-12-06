import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    token: null,
    error: null,
    data: {},
    hash: null,
    loading: false,
    message: null,
    authRedirectPath: '/'
};

const authStart = (state, action) => updateObject(state, { error: null, loading: true, message: null });
const authUserLoginSuccess = (state, action) => updateObject(state, { error: null, loading: false, ...action });
const authAdminLoginSuccess = (state, action) => updateObject(state, { error: null, loading: false, ...action });
const authAdminVerifySuccess = (state, action) => updateObject(state, { error: null, loading: false, ...action });
const resendCodeSuccess = (state, action) => updateObject(state, { error: null, loading: false, ...action });
const authLogoutSuccess = (state, action) => updateObject(state, { error: null, loading: false, token: null });
const authFail = (state, action) => updateObject(state, { loading: false, ...action });
const authMessage = (state, action) => updateObject(state, { loading: false, ...action });
const setAuthRedirectPath = (state, action) => updateObject(state, { authRedirectPath: action.path });
const setHash = (state, action) => updateObject(state, { hash: action.hash });

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_USER_LOGIN_SUCCESS: return authUserLoginSuccess(state, action);
        case actionTypes.AUTH_ADMIN_LOGIN_SUCCESS: return authAdminLoginSuccess(state, action);
        case actionTypes.AUTH_ADMIN_VERIFY_SUCCESS: return authAdminVerifySuccess(state, action);
        case actionTypes.RESEND_CODE_SUCCESS: return resendCodeSuccess(state, action);
        case actionTypes.AUTH_LOGOUT_SUCCESS: return authLogoutSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_MESSAGE: return authMessage(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action);
        case actionTypes.SET_HASH: return setHash(state, action);

        default: return state;
    }
};