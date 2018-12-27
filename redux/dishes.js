import * as ActionTypes from './ActionTypes';

export const dishes = (
    state = {
        isLoading: true,
        errMess: null,
        dishes: []
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...stete, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...stete, isLoading: true, errMess: null, dishes: []};

        case ActionTypes.DISHES_FAILED:
            return {...stete, isLoading: false, errMess: action.payload, dishes: []};

        default:
            return state;
    }
};