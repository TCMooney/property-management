import React, {Component} from 'react'

class NewsletterLatest extends Component {
   render() {
       return (
           <div className='newsletter-latest'>
               <h1 className='newsletter-latest__title'>Title goes here</h1>
               <img className='newsletter-latest__image' src='http://via.placeholder.com/960x258'/>
               <div className='newsletter-latest__body'>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               </div>
           </div>
       );
   }
}
export default NewsletterLatest;