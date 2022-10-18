import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className='headerBar'>
                <div className='appName'>To Ferrado</div>
                <div className='badge warning'>
                    <span id="state">0</span>
                </div>
            </header>
        );
    }
}

export default Header;