import * as ActionTypes from './ActionTypes';

export const comments = (
    state = {
        isLoading: true,
        errMess: null,
        comments: []
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...stete, isLoading: false, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_LOADING:
            return {...stete, isLoading: true, errMess: null, comments: []};

        case ActionTypes.COMMENTS_FAILED:
            return {...stete, isLoading: false, errMess: action.payload, comments: []};

        default:
            return state;
    }
};