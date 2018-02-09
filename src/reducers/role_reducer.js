import {REQUEST_LOGIN, RECEIVE_LOGIN, CHECKOUT_ROLES, REQUEST_LOGOUT, RECEIVE_LOGOUT, ERROR_LOGIN} from '../actions/login';

const rolesPower = (state = {roles: ''}, action) => {
    switch (action.type) {
        case REQUEST_LOGIN:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_LOGIN:
            return {
                ...state,
                isFetching: false
            };
        case ERROR_LOGIN:
            return {
                ...state,
                isFetching: false
            };
        case CHECKOUT_ROLES:
            return {
                ...state,
                roles: action.roles
            };
        case REQUEST_LOGOUT:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_LOGOUT:
            return {
                ...state,
                isFetching: false
            };
        default:
            return {
                ...state,
                isFetching: false
            };
    }
};

export default rolesPower