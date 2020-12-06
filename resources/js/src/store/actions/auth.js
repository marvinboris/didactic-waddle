import * as actionTypes from './actionTypes';

const prefix = '/api/';

const authStart = () => ({ type: actionTypes.AUTH_START });
const authMessage = message => ({ type: actionTypes.AUTH_MESSAGE, message });
const authFail = error => ({ type: actionTypes.AUTH_FAIL, error });

const authUserLoginSuccess = (token, data) => ({ type: actionTypes.AUTH_USER_LOGIN_SUCCESS, token, data: { ...data }, role: 'user' });
const authAdminLoginSuccess = hash => ({ type: actionTypes.AUTH_ADMIN_LOGIN_SUCCESS, hash });
const authAdminVerifySuccess = (token, data) => ({ type: actionTypes.AUTH_ADMIN_VERIFY_SUCCESS, token, data: { ...data }, role: 'admin' });
const resendCodeSuccess = (hash, message) => ({ type: actionTypes.RESEND_CODE_SUCCESS, hash, message });

const authLogoutSuccess = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT_SUCCESS,
    };
};

const checkAuthTimeout = expirationTime => dispatch => {
    setTimeout(() => {
        dispatch(authLogout());
    }, expirationTime);
};

export const authUserLogin = data => async dispatch => {
    dispatch(authStart());

    try {
        const form = new FormData(data);

        const res = await fetch(prefix + 'user/login', {
            method: 'POST',
            body: form
        });

        const resData = await res.json();

        let { access_token, token_type, expires_at, userData } = resData;
        const token = token_type + ' ' + access_token;
        expires_at = new Date(expires_at).getTime();

        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status === 403 || res.status === 401) return dispatch(authMessage(resData.message));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);

        const expirationDate = new Date(expires_at);
        localStorage.setItem('token', token);
        localStorage.setItem('lang', userData.language);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(authUserLoginSuccess(token, userData));
        dispatch(checkAuthTimeout(expires_at - new Date().getTime()));
    } catch (err) {
        dispatch(authFail(err));
    }
};

export const authAdminLogin = data => async dispatch => {
    dispatch(authStart());

    try {
        const form = new FormData(data);

        const res = await fetch(prefix + 'admin/login', {
            method: 'POST',
            body: form
        });

        const resData = await res.json();

        let { hash } = resData;

        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status === 403 || res.status === 401) return dispatch(authMessage(resData.message));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);

        dispatch(authAdminLoginSuccess(hash));
    } catch (err) {
        dispatch(authFail(err));
    }
};

export const authAdminVerify = data => async dispatch => {
    dispatch(authStart());

    try {
        const form = new FormData(data);

        const res = await fetch(prefix + 'admin/verify', {
            method: 'POST',
            body: form,
        });

        const resData = await res.json();

        let { access_token, token_type, expires_at, userData } = resData;
        const token = token_type + ' ' + access_token;
        expires_at = new Date(expires_at).getTime();

        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status === 403 || res.status === 401) return dispatch(authMessage(resData.message));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);

        const expirationDate = new Date(expires_at);
        localStorage.setItem('token', token);
        localStorage.setItem('lang', userData.language);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(authAdminVerifySuccess(token, userData));
        dispatch(checkAuthTimeout(expires_at - new Date().getTime()));
    } catch (err) {
        dispatch(authFail(err));
    }
};

export const resendCode = hash => async dispatch => {
    dispatch(authStart());

    try {
        const formData = new FormData();
        formData.append('hash', hash);

        const res = await fetch(prefix + 'resend', {
            method: 'POST',
            body: formData,
        });

        const resData = await res.json();

        dispatch(resendCodeSuccess(resData.hash, resData.message));
    } catch (err) {
        dispatch(authFail());
    }
};

export const authLogout = () => async dispatch => {
    dispatch(authStart());
    const token = localStorage.getItem('token');

    try {
        const res = await fetch(prefix + 'logout', {
            method: 'GET',
            headers: {
                Authorization: token
            }
        });

        if (res.status !== 200) throw new ('Erreur lors de la récupération des informations.')

        const resData = await res.json();

        dispatch(authLogoutSuccess());
    } catch (err) {
        dispatch(authFail(err));
    }
};

export const setAuthRedirectPath = path => ({ type: actionTypes.SET_AUTH_REDIRECT_PATH, path });
export const setHash = hash => ({ type: actionTypes.SET_HASH, hash });

export const authCheckState = () => async dispatch => {
    dispatch(authStart());
    const token = localStorage.getItem('token');
    if (!token) dispatch(authLogoutSuccess());
    else {
        try {
            const res = await fetch(prefix + 'user', {
                method: 'GET',
                headers: {
                    'Authorization': token
                }
            });

            const resData = await res.json();

            if (res.status === 521) await dispatch(authLogoutSuccess());
            else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);

            const { data, role, language } = resData;

            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate > new Date()) {
                if (role === 'admin') dispatch(authAdminVerifySuccess(token, data));
                else if (role === 'user') dispatch(authUserLoginSuccess(token, data));
                localStorage.setItem('lang', data.language);
                dispatch(checkAuthTimeout(expirationDate.getTime() - new Date().getTime()));
            } else dispatch(authLogoutSuccess());
        } catch (err) {
            console.log(err);
            dispatch(authFail(err));
        }
    }
};