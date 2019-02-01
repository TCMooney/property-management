import React, { Component } from 'react'

import Icon from '../icon';

export default class RequestsItem extends Component {
    render() {
        return (
            <div className="requests-item">
                <div>
                    <Icon icon='fas fa-exclamation-triangle'/>
                </div>
            </div>
        );
    }
}