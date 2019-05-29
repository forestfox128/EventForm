import React from 'react';
import Layout from '../Components/Layout/Layout';
import Button from '../Components/Button/Button';
import Form from '../Components/Form/Form';
import Input from '../Components/Input/Input';
import Textarea from '../Components/Input/TextArea';
import RadioInput from '../Components/Input/RadioInput';
import InputDate from '../Components/Input/InputDate';
import Select from '../Components/Select/Select';
import FormRow from '../Components/FormRow/FormRow';
import FormLabel from '../Components/FormLabel/FormLabel';
import categories from '../mocks/categories.json';
import employes from '../mocks/employes.json';
class CreateEventScreen extends React.Component {

    state = {
        processedEmployes: ''
    };

    
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
                            <Textarea key={1} rows={"8"} placeholder={"Write about your event, be creative"} />
                        </FormRow>
                        <FormRow>
                            <FormLabel key={0} >Category</FormLabel>
                            <Select key={1} categories={false} categoriesName={categories} 
                            description={"Descibe topic and people who should be interested in this event"}/>
                        </FormRow>
                        <FormRow>
                            <FormLabel key={0} >Payment</FormLabel>
                            <RadioInput key={1} label={"Event free"} />
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
                            <Select key={1} categories={true} categoriesName={employes} />
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