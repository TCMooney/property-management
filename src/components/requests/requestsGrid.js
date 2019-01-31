import React, {Component} from 'react'

import Button from '../button';
import RequestBoxes from './requestsBoxes';
import Requests from './requests';

class RequestsGrid extends Component {
   
    handleAddRequst = () => {
        this.props.history.push('/request/new');
    }
   
    render() {
       return (
           <div className="requests-grid">
               <Button className='requests-grid__button' icon='fas fa-plus' callback={() => this.handleAddRequst()}/>
               <RequestBoxes/>
               <Requests/>
           </div>
       );
   }
}

export default RequestsGrid;