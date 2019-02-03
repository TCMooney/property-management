import { CHANGE_SELECETED_REQUEST_TYPE } from './types';

import axios from 'axios';
import { ROOT_URL } from '../config';

export function changeSelectedRequestType(boxType) {
    return (
        {
            type: CHANGE_SELECETED_REQUEST_TYPE,
            payload: boxType
        }
    )
};

export function createNewRequests(newRequest, success) {
    return function() {
        axios.post(`${ROOT_URL}/requests/new`)
            then(response => {
                console.log(response.data);
                success();
            })
            .catch(err => {
                console.log(err);
            })
    }
}