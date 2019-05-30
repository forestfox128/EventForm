import React from 'react';
import Layout from '../Components/Layout/Layout';
import InfoBoard from '../Components/InfoBoard/InfoBoard';
class SuccessScreen extends React.Component {

    state = {

    }
    render(){
        return(
            <div style={{ marginTop: '4em' }}>
            <Layout>
                <InfoBoard infoType={"success"} boardTitle={"Success"} infoText={"Event has been created."}></InfoBoard>
            </Layout>
            </div>
        );
    }
}

export default SuccessScreen;