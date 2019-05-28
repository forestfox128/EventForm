import React from 'react';
import Grid from '@material-ui/core/Grid';

function Layout(props) {

    return (
        <div style={{ flexGrow: 1}}>
            <Grid container spacing={0}>
                <Grid item xs={2} sm={3}></Grid>
                <Grid item xs={8} sm={6}>
                    {props.children}
                </Grid>
                <Grid item xs={2} sm={3}></Grid>
            </Grid>
        </div>
    );
}

export default Layout;