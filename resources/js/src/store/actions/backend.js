import * as actionTypes from './actionTypes';

const prefix = '/api/';



export const resetAdmins = () => ({ type: actionTypes.ADMINS_RESET });
const adminsStart = () => ({ type: actionTypes.ADMINS_START });
const adminsSuccess = data => ({ type: actionTypes.ADMINS_SUCCESS, ...data });
const adminsFail = error => ({ type: actionTypes.ADMINS_FAIL, error });
export const getAdmins = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(adminsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/admins?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(adminsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(adminsFail(error));
    }
};

export const getAdmin = id => async (dispatch, getState) => {
    dispatch(adminsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/admins/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(adminsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(adminsFail(error));
    }
};

export const postAdmins = data => async (dispatch, getState) => {
    dispatch(adminsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/admins`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(adminsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(adminsFail(error));
    }
};

export const patchAdmins = (id, data) => async (dispatch, getState) => {
    dispatch(adminsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/admins/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(adminsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(adminsFail(error));
    }
};

export const deleteAdmins = id => async (dispatch, getState) => {
    dispatch(adminsStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/admins/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(adminsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(adminsFail(error));
    }
};



export const resetCms = () => ({ type: actionTypes.CMS_RESET });
const cmsStart = () => ({ type: actionTypes.CMS_START });
const cmsSuccess = data => ({ type: actionTypes.CMS_SUCCESS, ...data });
const cmsFail = error => ({ type: actionTypes.CMS_FAIL, error });
export const getCms = () => async (dispatch, getState) => {
    dispatch(cmsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/cms`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(cmsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(cmsFail(error));
    }
};

export const postCms = data => async (dispatch, getState) => {
    dispatch(cmsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/cms`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(cmsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(cmsFail(error));
    }
};

export const patchCms = (id, data) => async (dispatch, getState) => {
    dispatch(cmsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/cms/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(cmsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(cmsFail(error));
    }
};

export const deleteCms = id => async (dispatch, getState) => {
    dispatch(cmsStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/cms/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(cmsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(cmsFail(error));
    }
};



export const resetDashboard = () => ({ type: actionTypes.DASHBOARD_RESET });
const dashboardStart = () => ({ type: actionTypes.DASHBOARD_START });
const dashboardSuccess = data => ({ type: actionTypes.DASHBOARD_SUCCESS, ...data });
const dashboardFail = error => ({ type: actionTypes.DASHBOARD_FAIL, error });
export const getDashboard = () => async (dispatch, getState) => {
    dispatch(dashboardStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/dashboard`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(dashboardSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(dashboardFail(error));
    }
};

export const postDashboardIssuesMark = id => async (dispatch, getState) => {
    dispatch(dashboardStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/issues/${id}/mark`, {
            method: 'POST',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(dashboardSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(dashboardFail(error));
    }
};



export const resetFeatures = () => ({ type: actionTypes.FEATURES_RESET });
const featuresStart = () => ({ type: actionTypes.FEATURES_START });
const featuresSuccess = data => ({ type: actionTypes.FEATURES_SUCCESS, ...data });
const featuresFail = error => ({ type: actionTypes.FEATURES_FAIL, error });
export const getFeatures = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(featuresStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/features?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(featuresSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(featuresFail(error));
    }
};

export const getFeature = id => async (dispatch, getState) => {
    dispatch(featuresStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/features/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(featuresSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(featuresFail(error));
    }
};

export const postFeatures = data => async (dispatch, getState) => {
    dispatch(featuresStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/features`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(featuresSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(featuresFail(error));
    }
};

export const patchFeatures = (id, data) => async (dispatch, getState) => {
    dispatch(featuresStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/features/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(featuresSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(featuresFail(error));
    }
};

export const deleteFeatures = id => async (dispatch, getState) => {
    dispatch(featuresStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/features/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(featuresSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(featuresFail(error));
    }
};



export const resetIssues = () => ({ type: actionTypes.ISSUES_RESET });
const issuesStart = () => ({ type: actionTypes.ISSUES_START });
const issuesSuccess = data => ({ type: actionTypes.ISSUES_SUCCESS, ...data });
const issuesFail = error => ({ type: actionTypes.ISSUES_FAIL, error });
export const getIssues = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(issuesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/issues?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(issuesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(issuesFail(error));
    }
};

export const getIssuesInfo = () => async (dispatch, getState) => {
    dispatch(issuesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/issues/info`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(issuesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(issuesFail(error));
    }
};

export const postIssuesMark = id => async (dispatch, getState) => {
    dispatch(issuesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/issues/${id}/mark`, {
            method: 'POST',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(issuesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(issuesFail(error));
    }
};

export const getIssue = id => async (dispatch, getState) => {
    dispatch(issuesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/issues/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(issuesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(issuesFail(error));
    }
};

export const postIssues = data => async (dispatch, getState) => {
    dispatch(issuesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/issues`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(issuesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(issuesFail(error));
    }
};

export const patchIssues = (id, data) => async (dispatch, getState) => {
    dispatch(issuesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/issues/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(issuesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(issuesFail(error));
    }
};

export const deleteIssues = id => async (dispatch, getState) => {
    dispatch(issuesStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/issues/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(issuesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(issuesFail(error));
    }
};



export const resetLanguages = () => ({ type: actionTypes.LANGUAGES_RESET });
const languagesStart = () => ({ type: actionTypes.LANGUAGES_START });
const languagesSuccess = data => ({ type: actionTypes.LANGUAGES_SUCCESS, ...data });
const languagesFail = error => ({ type: actionTypes.LANGUAGES_FAIL, error });
export const getLanguages = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(languagesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/languages?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(languagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(languagesFail(error));
    }
};

export const getLanguage = id => async (dispatch, getState) => {
    dispatch(languagesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/languages/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(languagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(languagesFail(error));
    }
};

export const postLanguages = data => async (dispatch, getState) => {
    dispatch(languagesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/languages`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(languagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(languagesFail(error));
    }
};

export const patchLanguages = (id, data) => async (dispatch, getState) => {
    dispatch(languagesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/languages/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(languagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(languagesFail(error));
    }
};

export const deleteLanguages = id => async (dispatch, getState) => {
    dispatch(languagesStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/languages/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(languagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(languagesFail(error));
    }
};



export const resetPlatforms = () => ({ type: actionTypes.PLATFORMS_RESET });
const platformsStart = () => ({ type: actionTypes.PLATFORMS_START });
const platformsSuccess = data => ({ type: actionTypes.PLATFORMS_SUCCESS, ...data });
const platformsFail = error => ({ type: actionTypes.PLATFORMS_FAIL, error });
export const getPlatforms = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(platformsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/platforms?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(platformsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(platformsFail(error));
    }
};

export const getPlatform = id => async (dispatch, getState) => {
    dispatch(platformsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/platforms/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(platformsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(platformsFail(error));
    }
};

export const postPlatforms = data => async (dispatch, getState) => {
    dispatch(platformsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/platforms`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(platformsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(platformsFail(error));
    }
};

export const patchPlatforms = (id, data) => async (dispatch, getState) => {
    dispatch(platformsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/platforms/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(platformsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(platformsFail(error));
    }
};

export const deletePlatforms = id => async (dispatch, getState) => {
    dispatch(platformsStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/platforms/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(platformsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(platformsFail(error));
    }
};



export const resetRoles = () => ({ type: actionTypes.ROLES_RESET });
const rolesStart = () => ({ type: actionTypes.ROLES_START });
const rolesSuccess = data => ({ type: actionTypes.ROLES_SUCCESS, ...data });
const rolesFail = error => ({ type: actionTypes.ROLES_FAIL, error });
export const getRoles = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(rolesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/roles?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(rolesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(rolesFail(error));
    }
};

export const getRole = id => async (dispatch, getState) => {
    dispatch(rolesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/roles/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(rolesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(rolesFail(error));
    }
};

export const getRolesInfo = () => async (dispatch, getState) => {
    dispatch(rolesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/roles/info`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(rolesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(rolesFail(error));
    }
};

export const postRoles = data => async (dispatch, getState) => {
    dispatch(rolesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/roles`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(rolesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(rolesFail(error));
    }
};

export const patchRoles = (id, data) => async (dispatch, getState) => {
    dispatch(rolesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/roles/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(rolesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(rolesFail(error));
    }
};

export const deleteRoles = id => async (dispatch, getState) => {
    dispatch(rolesStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/roles/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(rolesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(rolesFail(error));
    }
};



export const resetUsers = () => ({ type: actionTypes.USERS_RESET });
const usersStart = () => ({ type: actionTypes.USERS_START });
const usersSuccess = data => ({ type: actionTypes.USERS_SUCCESS, ...data });
const usersFail = error => ({ type: actionTypes.USERS_FAIL, error });
export const getUsers = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(usersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/users?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(usersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(usersFail(error));
    }
};

export const getUser = id => async (dispatch, getState) => {
    dispatch(usersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/users/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(usersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(usersFail(error));
    }
};

export const getUsersInfo = () => async (dispatch, getState) => {
    dispatch(usersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/users/info`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(usersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(usersFail(error));
    }
};

export const postUsers = data => async (dispatch, getState) => {
    dispatch(usersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/users`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(usersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(usersFail(error));
    }
};

export const patchUsers = (id, data) => async (dispatch, getState) => {
    dispatch(usersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/users/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(usersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(usersFail(error));
    }
};

export const deleteUsers = id => async (dispatch, getState) => {
    dispatch(usersStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/users/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(usersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(usersFail(error));
    }
};