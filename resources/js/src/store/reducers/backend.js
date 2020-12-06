import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    admins: {
        loading: false,
        error: null
    },
    cms: {
        loading: false,
        error: null
    },
    dashboard: {
        loading: false,
        error: null
    },
    features: {
        loading: false,
        error: null
    },
    issues: {
        loading: false,
        error: null
    },
    languages: {
        loading: false,
        error: null
    },
    platforms: {
        loading: false,
        error: null
    },
    roles: {
        loading: false,
        error: null
    },
    users: {
        loading: false,
        error: null
    },
};

const adminsReset = (state, action) => updateObject(state, { admins: initialState.admins });
const adminsStart = (state, action) => updateObject(state, { admins: updateObject(state.admins, { loading: true, message: null }) });
const adminsSuccess = (state, action) => updateObject(state, { admins: updateObject(state.admins, { loading: false, error: null, ...action }) });
const adminsFail = (state, action) => updateObject(state, { admins: updateObject(state.admins, { loading: false, ...action }) });

const cmsReset = (state, action) => updateObject(state, { cms: initialState.cms });
const cmsStart = (state, action) => updateObject(state, { cms: updateObject(state.cms, { loading: true, message: null }) });
const cmsSuccess = (state, action) => updateObject(state, { cms: updateObject(state.cms, { loading: false, error: null, ...action }) });
const cmsFail = (state, action) => updateObject(state, { cms: updateObject(state.cms, { loading: false, ...action }) });

const dashboardReset = (state, action) => updateObject(state, { dashboard: initialState.dashboard });
const dashboardStart = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: true, message: null }) });
const dashboardSuccess = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: false, error: null, ...action }) });
const dashboardFail = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: false, ...action }) });

const featuresReset = (state, action) => updateObject(state, { features: initialState.features });
const featuresStart = (state, action) => updateObject(state, { features: updateObject(state.features, { loading: true, message: null }) });
const featuresSuccess = (state, action) => updateObject(state, { features: updateObject(state.features, { loading: false, error: null, ...action }) });
const featuresFail = (state, action) => updateObject(state, { features: updateObject(state.features, { loading: false, ...action }) });

const issuesReset = (state, action) => updateObject(state, { issues: initialState.issues });
const issuesStart = (state, action) => updateObject(state, { issues: updateObject(state.issues, { loading: true, message: null }) });
const issuesSuccess = (state, action) => updateObject(state, { issues: updateObject(state.issues, { loading: false, error: null, ...action }) });
const issuesFail = (state, action) => updateObject(state, { issues: updateObject(state.issues, { loading: false, ...action }) });

const languagesReset = (state, action) => updateObject(state, { languages: initialState.languages });
const languagesStart = (state, action) => updateObject(state, { languages: updateObject(state.languages, { loading: true, message: null }) });
const languagesSuccess = (state, action) => updateObject(state, { languages: updateObject(state.languages, { loading: false, error: null, ...action }) });
const languagesFail = (state, action) => updateObject(state, { languages: updateObject(state.languages, { loading: false, ...action }) });

const platformsReset = (state, action) => updateObject(state, { platforms: initialState.platforms });
const platformsStart = (state, action) => updateObject(state, { platforms: updateObject(state.platforms, { loading: true, message: null }) });
const platformsSuccess = (state, action) => updateObject(state, { platforms: updateObject(state.platforms, { loading: false, error: null, ...action }) });
const platformsFail = (state, action) => updateObject(state, { platforms: updateObject(state.platforms, { loading: false, ...action }) });

const rolesReset = (state, action) => updateObject(state, { roles: initialState.roles });
const rolesStart = (state, action) => updateObject(state, { roles: updateObject(state.roles, { loading: true, message: null }) });
const rolesSuccess = (state, action) => updateObject(state, { roles: updateObject(state.roles, { loading: false, error: null, ...action }) });
const rolesFail = (state, action) => updateObject(state, { roles: updateObject(state.roles, { loading: false, ...action }) });

const usersReset = (state, action) => updateObject(state, { users: initialState.users });
const usersStart = (state, action) => updateObject(state, { users: updateObject(state.users, { loading: true, message: null }) });
const usersSuccess = (state, action) => updateObject(state, { users: updateObject(state.users, { loading: false, error: null, ...action }) });
const usersFail = (state, action) => updateObject(state, { users: updateObject(state.users, { loading: false, ...action }) });

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADMINS_RESET: return adminsReset(state, action);
        case actionTypes.ADMINS_START: return adminsStart(state, action);
        case actionTypes.ADMINS_SUCCESS: return adminsSuccess(state, action);
        case actionTypes.ADMINS_FAIL: return adminsFail(state, action);

        case actionTypes.CMS_RESET: return cmsReset(state, action);
        case actionTypes.CMS_START: return cmsStart(state, action);
        case actionTypes.CMS_SUCCESS: return cmsSuccess(state, action);
        case actionTypes.CMS_FAIL: return cmsFail(state, action);

        case actionTypes.DASHBOARD_RESET: return dashboardReset(state, action);
        case actionTypes.DASHBOARD_START: return dashboardStart(state, action);
        case actionTypes.DASHBOARD_SUCCESS: return dashboardSuccess(state, action);
        case actionTypes.DASHBOARD_FAIL: return dashboardFail(state, action);

        case actionTypes.FEATURES_RESET: return featuresReset(state, action);
        case actionTypes.FEATURES_START: return featuresStart(state, action);
        case actionTypes.FEATURES_SUCCESS: return featuresSuccess(state, action);
        case actionTypes.FEATURES_FAIL: return featuresFail(state, action);

        case actionTypes.ISSUES_RESET: return issuesReset(state, action);
        case actionTypes.ISSUES_START: return issuesStart(state, action);
        case actionTypes.ISSUES_SUCCESS: return issuesSuccess(state, action);
        case actionTypes.ISSUES_FAIL: return issuesFail(state, action);

        case actionTypes.LANGUAGES_RESET: return languagesReset(state, action);
        case actionTypes.LANGUAGES_START: return languagesStart(state, action);
        case actionTypes.LANGUAGES_SUCCESS: return languagesSuccess(state, action);
        case actionTypes.LANGUAGES_FAIL: return languagesFail(state, action);

        case actionTypes.PLATFORMS_RESET: return platformsReset(state, action);
        case actionTypes.PLATFORMS_START: return platformsStart(state, action);
        case actionTypes.PLATFORMS_SUCCESS: return platformsSuccess(state, action);
        case actionTypes.PLATFORMS_FAIL: return platformsFail(state, action);

        case actionTypes.ROLES_RESET: return rolesReset(state, action);
        case actionTypes.ROLES_START: return rolesStart(state, action);
        case actionTypes.ROLES_SUCCESS: return rolesSuccess(state, action);
        case actionTypes.ROLES_FAIL: return rolesFail(state, action);

        case actionTypes.USERS_RESET: return usersReset(state, action);
        case actionTypes.USERS_START: return usersStart(state, action);
        case actionTypes.USERS_SUCCESS: return usersSuccess(state, action);
        case actionTypes.USERS_FAIL: return usersFail(state, action);

        default: return state;
    }
};