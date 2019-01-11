import React from 'react';
import {Link} from 'gatsby';
const LINKS=[
    {name:'Our Story', url:'/'},
    {name:'The Weekend', url:'/weekend'},
    {name:'Explore',url:'/explore'},
    {name:'Registry', url:'/registry/'},
    {name:'RSVP',url:'/RSVP'}
];

class Navigation extends React.Component {
    constructor(){
        super();
    }
    
    render() {
        
        return (
            <div
            className="title-navbar-wrapper">
                <Link to="/">
                    <h1>
                        Danielle x Brandon
                    </h1>
                </Link>
                <nav>
                    <ul>
                        {LINKS.map(({name,url})=>
                        <li>
                            <Link 
                                onClick={()=>this.selectTab(url)} 
                                to={url}
                                activeClassName={'active'}>
                                    {name}
                            </Link>
                        </li>
                    )}
                    </ul> 
                </nav>
            </div>
        )
    }
}

export default Navigation

