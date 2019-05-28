import React from 'react';

import './Layout.css';

function Layout(props) {

    return (
        <div className="Container">
            <div className="Wrapper">
                <div className="ItemS"></div>
                <div className="ItemB">
                    {props.children}
                </div>
                <div className="ItemS"></div>
            </div>
        </div>
    );
}

export default Layout;