import React from 'react';
import Layout from '../Components/Layout/Layout';
import Button from '../Components/Button/Button';
import Form from '../Components/Form/Form';
import Input from '../Components/Input/Input';
import Textarea from '../Components/Input/TextArea';
import RadioInput from '../Components/Input/RadioInput';
import InputDate from '../Components/Input/InputDate';
import Select from '../Components/Select/Select';
import SelectWithCat from '../Components/Select/SelectWithCat';
import FormRow from '../Components/FormRow/FormRow';
import Col from '../Components/FormRow/Col';
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
                            <Col size={"S"}>
                                <FormLabel>Title</FormLabel>
                            </Col>
                            <Col size={"B"}>
                                <Input width={"big"} type={"text"} placeholder={"Make it short and clear"} />
                            </Col>
                        </FormRow>
                        <FormRow>
                            <Col size={"S"}>
                                <FormLabel >Description</FormLabel>
                            </Col>
                            <Col size={"B"}><Textarea rows={"8"} placeholder={"Write about your event, be creative"} /></Col>

                        </FormRow>
                        <FormRow>
                            <Col size={"S"}><FormLabel  >Category</FormLabel></Col>

                            <Col size={"B"}><Select categoriesName={categories}
                                description={"Descibe topic and people who should be interested in this event"} /></Col>

                        </FormRow>
                        <FormRow>
                            <Col size={"S"}><FormLabel  >Payment</FormLabel></Col>

                            <Col size={"B"}><RadioInput label={"Event free"} /></Col>

                        </FormRow>
                        <FormRow>
                            <Col size={"S"}><FormLabel  >Reward</FormLabel></Col>

                            <Col size={"B"}><div ><Input width={"small"} type={"number"} placeholder={"Number"} />
                                <p style={{ marginLeft: '8em' }}>reward points for attendance</p>
                            </div></Col>

                        </FormRow>
                    </Form>

                    <Form formTitle={"Coordinator"}>
                        <FormRow>
                            <Col size={"S"}><FormLabel  >Responsible</FormLabel></Col>

                            <Col size={"B"}><SelectWithCat categoriesName={employes} /></Col>

                        </FormRow>
                        <FormRow>
                            <Col size={"S"}><FormLabel  >Email</FormLabel></Col>

                            <Col size={"B"}><Input width={"big"} type={"email"} placeholder={"Email"} /></Col>

                        </FormRow>
                    </Form>

                    <Form formTitle={"When"}>
                        <FormRow>
                            <Col size={"S"}><FormLabel  >Starts on</FormLabel></Col>

                            <Col size={"B"}> <InputDate /></Col>

                        </FormRow>
                        <FormRow>
                            <Col size={"S"}><FormLabel  >Duration</FormLabel></Col>

                            <Col size={"B"}><Input width={"small"} type={"number"} placeholder={"Number"} /></Col>

                        </FormRow>
                    </Form>
                    <Button buttonText={"Publish event"}></Button>
                </Layout>
            </div>
        );
    }
}

export default CreateEventScreen;