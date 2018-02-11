import {REQUEST_LOGIN} from '../actions/login';

const rolesPower = (state = {roles: ''}, action) => {
    switch (action.type) {
        case REQUEST_LOGIN:
            return {
                ...state,
                isFetching:true
            };
        default:
            return {
                ...state,
                isFetching: false
            };
    }
};

export default rolesPower