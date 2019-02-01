import {
    CHANGE_SELECETED_REQUESTS_TYPE
} from '../actions/types';

const INITIAL_STATE = {
    requests: [],
    selectedRequests: 'pending'
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CHANGE_SELECETED_REQUESTS_TYPE:
            const boxType = action.payload
            return {
                ...state,
                selectedRequests: boxType
            }
        default: return state;
    }
}