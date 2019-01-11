import React from 'react';
import '../assets/scss/main.scss';

import Header from './Header';
import Navigation from './Navigation';
class Template extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <div>
                <Navigation/>
                {children}
            </div>
        )
    }
}

export default Template
