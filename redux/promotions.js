import * as ActionTypes from './ActionTypes';

export const promotions = (
    state = {
        isLoading: true,
        errMess: null,
        promotions: []
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMOS:
            return {...stete, isLoading: false, errMess: null, promotions: action.payload};

        case ActionTypes.PROMOS_LOADING:
            return {...stete, isLoading: true, errMess: null, promotions: []};

        case ActionTypes.PROMOS_FAILED:
            return {...stete, isLoading: false, errMess: action.payload, promotions: []};

        default:
            return state;
    }
};