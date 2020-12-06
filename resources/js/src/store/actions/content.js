import * as actionTypes from './actionTypes';

const prefix = '/api/';

const contentStart = () => ({ type: actionTypes.CONTENT_START });
const contentSuccess = data => ({ type: actionTypes.CONTENT_SUCCESS, ...data });
const contentFail = error => ({ type: actionTypes.CONTENT_FAIL, error });
export const getContent = () => async dispatch => {
    dispatch(contentStart());

    try {
        let lang = localStorage.getItem('lang');
        if (!lang || lang === 'undefined') {
            lang = process.env.MIX_DEFAULT_LANG;
            localStorage.setItem('lang', lang);
        }
        const res = await fetch(`${prefix}content/${lang}`);
        const resData = await res.json();
        dispatch(contentSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(contentFail(error));
    }
};

export const setLanguage = id => async dispatch => {
    dispatch(contentStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix}content/language/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(contentSuccess(resData));
        localStorage.setItem('lang', resData.language.abbr);
    } catch (error) {
        console.log(error);
        dispatch(contentFail(error));
    }
};