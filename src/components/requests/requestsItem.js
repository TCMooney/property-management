import React, { Component } from 'react'

import Icon from '../icon';
import Button from '../button';

export default class RequestsItem extends Component {
    render() {
        return (
            <div className="requests-item">
                <Icon className="requests-item__icon" icon='fas fa-exclamation-triangle'/>
                <div className="requests-item__title">
                    Yo my sink stinks
                </div>
                <div className="requests-item__tenant-unit">
                    Tom - Unit 666
                </div>
                <Icon className="requests-item__arrow" icon="fas fa-sort-down"/>
                <div className="requests-item__date">
                    06/26/1988
                </div>
                <Button className="requests-item__move" icon="fas fa-wrench" callback={console.log('change request item status')}/>
            </div>
        );
    }
}