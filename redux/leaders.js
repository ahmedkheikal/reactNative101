import * as ActionTypes from './ActionTypes';

export const leaders = (
    state = {
        isLoading: true,
        errMess: null,
        leaders: []
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return {...stete, isLoading: false, errMess: null, leaders: action.payload};

        case ActionTypes.LEADERS_LOADING:
            return {...stete, isLoading: true, errMess: null, leaders: []};

        case ActionTypes.LEADERS_FAILED:
            return {...stete, isLoading: false, errMess: action.payload, leaders: []};

        default:
            return state;
    }
};