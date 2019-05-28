import React from 'react';
import Layout from '../Components/Layout/Layout';
import Button from '../Components/Button/Button';
import FormCard from '../Components/FormCard/FormCard';
class CreateEventScreen extends React.Component {

    state = {

    }

    render(){
        return(
            <div style={{marginTop: '6em'}}>
            <Layout>
                <FormCard>
                    <Button buttonText={"Publish event"}></Button>
                </FormCard>
                
            </Layout>
            </div>
        );
    }
}

export default CreateEventScreen;