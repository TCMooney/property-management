import React, { Component } from 'react'
import AnimateHeight from 'react-animate-height';

import Icon from '../icon';
import Button from '../button';
import { throws } from 'assert';

export default class RequestsItem extends Component {
    constructor() {
        super()

        this.state = {
            height: 0
        }
    }

    toggleDropdown = () => {
        if(this.state.height == 0) {
            this.setState({height: 'auto'})
        } else {
            this.setState({height: 0})
        }
    }

    render() {
        return (
            <div className="requests-item">
                <Icon className="requests-item__icon" icon='fas fa-exclamation-triangle' />
                <div className="requests-item__title">
                    <div className="requests-item__title__text">Yo my sink stinks</div>
                    <Icon callback={() => this.toggleDropdown()} className="requests-item__title__arrow" icon="fas fa-sort-down" />
                </div>
                <div className="requests-item__tenant-unit">
                    Tom - Unit 666
                </div>
                <div className="requests-item__date">
                    06/26/1988
                </div>
                <Button className="requests-item__move" icon="fas fa-wrench" callback={console.log('change request item status')} />
                <div className="requests-item__description">
                    <AnimateHeight duration={300} height={this.state.height}>
                        <div className="requests-item__description">
                            <img className="requests-item__description-img" src="http://via.placeholder.com/160x94" />
                            <p className="requests-item__description-text">
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            </p>
                        </div>
                    </AnimateHeight>
                </div>
            </div>
        );
    }
}