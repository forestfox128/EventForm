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

import '../style.css';

const txtFieldState = {
    value: "",
    valid: true,
    typeMismatch: false,
    
  };

  const ErrorValidationLabel = ({ txtLbl }) => (
    <label htmlFor="" style={{ color: "red" }}>
      {txtLbl}
    </label>
  );

class CreateEventScreen extends React.Component {

    state = {
        title: {
          ...txtFieldState,
          fieldName: "Email",
          required: true,
          requiredTxt: "Title is required"
        },
        description: {
          ...txtFieldState,
          fieldName: "First Name",
          required: true,
          requiredTxt: "Desciption is required"
        },
        reward: {
          ...txtFieldState,
          fieldName: "Last Name",
          required: false,
          requiredTxt: "Desciption"
        },
        email: {
            ...txtFieldState,
          fieldName: "Email",
          required: true,
          requiredTxt: "Desciption",
          formatErrorTxt: "Incorrect email format"
        },
        startsOn: {
            ...txtFieldState,
          fieldName: "Last Name",
          required: true,
          requiredTxt: "Start time is required"
        },
        startsHour: {
            ...txtFieldState,
          fieldName: "Last Name",
          required: true,
          requiredTxt: "Start time is required"
        },
        duration: {
            ...txtFieldState,
          fieldName: "Last Name",
          required: false,
          requiredTxt: "Desciption"
        },
        allFieldsValid: false
      };

      reduceFormValues = formElements => {
        const arrElements = Array.prototype.slice.call(formElements); //we convert elements/inputs into an array found inside form element
        console.log(arrElements)
        //we need to extract specific properties in Constraint Validation API using this code snippet
        const formValues = arrElements
          .filter(elem => (elem.name.length > 0 && elem.type !== 'radio'))
          .map(x => {
            const { typeMismatch } = x.validity;
            const { name, value } = x;
            console.log(x.checkValidity())
            return {
              name,
              typeMismatch, //we use typeMismatch when format is incorrect(e.g. incorrect email)
              value,
              valid: x.checkValidity()
            };
          })
          .reduce((acc, currVal) => {
            //then we finally use reduce, ready to put it in our state
            const { value, valid, typeMismatch } = currVal;
            const { fieldName, requiredTxt, formatErrorTxt } = this.state[
              currVal.name
            ]; 
            console.log(currVal.name)//get the rest of properties inside the state object
            //we'll need to map these properties back to state so we use reducer...
            acc[currVal.name] = {
              value,
              valid,
              typeMismatch,
              fieldName,
              requiredTxt,
              formatErrorTxt
            };
    
            return acc;
          }, {});
    
        return formValues;
      };
    checkAllFieldsValid = formValues => {
    return !Object.keys(formValues)
        .map(x => formValues[x])
        .some(field => !field.valid);
      };

    onSubmit = e => {
        e.preventDefault();
        const form = e.target;

    //bieżemy konkretne elementy z form
    const formValues = this.reduceFormValues(form.elements);
    //sprawdzamy czy wszytskie pola są valid
    const allFieldsValid = this.checkAllFieldsValid(formValues);
    this.setState({ ...formValues, allFieldsValid });
    console.log(allFieldsValid)
    if(this.state.allFieldsValid)
        console.log(this.state.email.value)
    };


    render() {
        const { email, firstname, lastname, allFieldsValid } = this.state;
        const renderEmailValidationError = email.valid ? ("") : (
            <ErrorValidationLabel
              txtLbl={email.typeMismatch ? email.formatErrorTxt : email.requiredTxt}
            />);

        return (
            <div style={{ marginTop: '4em' }}>
                <Layout>
                <form autoComplete="off" className='FormField'
            onSubmit={this.onSubmit} noValidate>
                    <Form formTitle={"About"} onSubmit={this.onSubmit}>
                    {/* <input type="email" name="emailXX" placeholder="Email" required />
            <br />
            {renderEmailValidationError} */}
            
                        <FormRow>
                            <Col size={"S"}>
                                <FormLabel>Title <span className='red-star'>*</span></FormLabel>
                            </Col>
                            <Col size={"B"}>
                                <Input width={"big"} name={"title"} type={"text"} placeholder={"Make it short and clear"} />
                            </Col>
                        </FormRow>
                        <FormRow>
                            <Col size={"S"}>
                                <FormLabel >Description <span className='red-star'>*</span></FormLabel>
                            </Col>
                            <Col size={"B"}><Textarea rows={"8"} name={"description"} placeholder={"Write about your event, be creative"} /></Col>

                        </FormRow>
                        <FormRow>
                            <Col size={"S"}><FormLabel  >Category </FormLabel></Col>

                            <Col size={"B"}><Select categoriesName={categories} name={""}
                                description={"Descibe topic and people who should be interested in this event"} /></Col>

                        </FormRow>
                        <FormRow>
                            <Col size={"S"}><FormLabel  >Payment </FormLabel></Col>

                            <Col size={"B"}>
                                <RadioInput label={"Event free"} value={"eventFree"} name={"eventPayment"} />
                                <RadioInput label={"Event paid"} value={"eventPaid"} name={"eventPayment"}/>
                            </Col>

                        </FormRow>
                        <FormRow>
                            <Col size={"S"}><FormLabel>Reward</FormLabel></Col>

                            <Col size={"B"}><div ><Input width={"small"} name={"reward"} type={"number"} placeholder={"Number"} />
                                <div className="additional-input-descpription-reward">reward points for attendance</div>
                            </div></Col>

                        </FormRow>
                    </Form>

                    <Form formTitle={"Coordinator"}>
                        <FormRow>
                            <Col size={"S"}><FormLabel  >Responsible <span className='red-star'>*</span></FormLabel></Col>

                            <Col size={"B"}><SelectWithCat categoriesName={employes} /></Col>

                        </FormRow>
                        <FormRow>
                            <Col size={"S"}><FormLabel  >Email</FormLabel></Col>

                            <Col size={"B"}><Input width={"big"} name={"email"} type={"email"} placeholder={"Email"} /></Col>

                        </FormRow>
                    </Form>

                    <Form formTitle={"When"}>
                        <FormRow>
                            <Col size={"S"}><FormLabel  >Starts on <span className='red-star'>*</span></FormLabel></Col>

                            <Col size={"B"}> <InputDate name={"startsOn"} />
                            <Input width={"small"} type={"time"} name={"startsHour"} placeholder={"Number"} />
                            <RadioInput label={"AM"} value={"AM"} name={"eventTime"} />
                            <RadioInput label={"PM"} value={"PM"} name={"eventTime"}/>
                            </Col>

                        </FormRow>
                        <FormRow>
                            <Col size={"S"}><FormLabel>Duration</FormLabel>
                            
                            </Col>

                            <Col size={"B"}>
                            <Input width={"small"} name={"duration"} type={"number"} placeholder={"Number"} />
                            <div className="additional-input-descpription-hour">hour</div>
                            </Col>

                        </FormRow>
                        <Button style={{align: 'center'}} buttonText={"Publish event"}></Button>
                    </Form>
                    </form>
                </Layout>
            </div>
        );
    }
}

export default CreateEventScreen;