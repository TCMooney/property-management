import React, { Component } from 'react'

import { connect } from 'react-redux';

import RequestsBox from './requestsBox';

class RequestBoxes extends Component {
    render() {
        return (
            <div className="request-boxes">
                <RequestsBox title={'pending'} count={this.props.pendingCount}/>
                <RequestsBox title={'in-progress'} count={this.props.progressCount}/>
                <RequestsBox title={'complete'} count={this.props.completeCount}/>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { requests }= state.requests;
    var pendingCount = 0;
    var progressCount = 0;
    var completeCount = 0;
    requests.map(request => {
        if (request.status == 'pending') {
            pendingCount += 1;
        } else if (requests.status == 'progress'){
            progressCount += 1;
        } else if(requests.status == 'complete'){
            completeCount += 1;
        }
    })
    return {
        pendingCount,
        progressCount,
        completeCount
    }
}

RequestBoxes = connect(mapStateToProps)(RequestBoxes);

export default RequestBoxes;