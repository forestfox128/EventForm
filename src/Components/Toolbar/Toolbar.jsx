import React from 'react';
import Layout from '../Layout/Layout';

import './Toolbar.css';

function Toolbar(props) {
    return (
        <span className="ToolbarStripe">
            <header className="Toolbar">
                <Layout>
                    <div className="ToolbarText">{props.headerText}</div>
                </Layout>
            </header>
        </span>
    );
}

export default Toolbar;