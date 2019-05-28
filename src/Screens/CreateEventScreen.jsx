import React from 'react';
import Layout from '../Components/Layout/Layout';
import Button from '../Components/Button/Button';
import Form from '../Components/Form/Form';
import Input from '../Components/Input/Input';
import InputDate from '../Components/Input/InputDate';
import FormRow from '../Components/FormRow/FormRow';
import FormLabel from '../Components/FormLabel/FormLabel';

class CreateEventScreen extends React.Component {

    state = {

    }

    render() {
        return (
            <div style={{ marginTop: '4em' }}>
                <Layout>
                    <Form formTitle={"About"}>
                        <FormRow>
                            <FormLabel key={0} >Title</FormLabel>
                            <Input key={1} width={"big"} type={"text"} placeholder={"Make it short and clear"} />
                        </FormRow>
                        <FormRow>
                            <FormLabel key={0} >Description</FormLabel>
                            <Input key={1} width={"big"} />
                        </FormRow>
                        <FormRow>
                            <FormLabel key={0} >Category</FormLabel>
                            <Input key={1} width={"big"} />
                        </FormRow>
                        <FormRow>
                            <FormLabel key={0} >Payment</FormLabel>
                            <Input key={1} width={"big"} />
                        </FormRow>
                        <FormRow>
                            <FormLabel key={0} >Reward</FormLabel>
                            <div key={1}><Input width={"small"} type={"number"} placeholder={"Number"}/>
                                <p style={{marginLeft: '8em'}}>reward points for attendance</p>
                            </div>
                        </FormRow>
                    </Form>
                    <Form formTitle={"Coordinator"}>
                        <FormRow>
                            <FormLabel key={0} >Responsible</FormLabel>
                            <Input key={1} width={"big"} />
                        </FormRow>
                        <FormRow>
                            <FormLabel key={0} >Email</FormLabel>
                            <Input key={1} width={"big"} type={"email"} placeholder={"Email"}/>
                        </FormRow>
                    </Form>
                    <Form formTitle={"When"}>
                        <FormRow>
                            <FormLabel key={0} >Starts on</FormLabel>
                            <InputDate key={1}/>
                        </FormRow>
                        <FormRow>
                            <FormLabel key={0} >Duration</FormLabel>
                            <Input key={1} width={"small"} type={"number"} placeholder={"Number"}/>
                        </FormRow>
                    </Form>
                    <Button buttonText={"Publish event"}></Button>
                </Layout>
            </div>
        );
    }
}

export default CreateEventScreen;