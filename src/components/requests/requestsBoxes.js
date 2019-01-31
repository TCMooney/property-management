import React, { Component } from 'react'
import RequestsBox from './requestsBox';

export default class RequestBoxes extends Component {
    render() {
        return (
            <div className="request-boxes">
                <RequestsBox title={'pending'} count={'2'}/>
                <RequestsBox title={'in-progress'} count={'1'}/>
                <RequestsBox title={'complete'} count={'5'}/>
                
            </div>
        );
    }
}