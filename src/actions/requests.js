import { CHANGE_SELECETED_REQUEST_TYPE } from './types';

export function changeSelectedRequestType(boxType) {
    return (
        {
            type: CHANGE_SELECETED_REQUEST_TYPE,
            payload: boxType
        }
    )
};