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
import ErrorMessage from '../Components/ErrorMessage/ErrorMessage';
import categories from '../mocks/categories.json';
import employes from '../mocks/employes.json';

import '../style.css';

class CreateEventScreen extends React.Component {

    state = {
        titleValue: '',
        titleIsValid: true,
        titleErrMessage: 'Title can not be empty',

        descriptionValue: '',
        descriptionIsValid: true,
        descriptionErrMessage: 'Description can not be empty',

        categoryValue: '',
        categoryIsValid: false,
        categoryErrMessage: '',

        paidEvent: false,
        paymentValue: 0,
        paymentIsValid: true,
        paymentErrMessage: 'Can not be empty',

        rewardValue: 0,
        rewardIsValid: true,
        rewardErrMessage: 'This must be a number',

        responsibleValue: 0,

        emailValue: '',
        emailIsValid: true,
        emailErrMessage: 'This is not valid email',

        startsDayValue: '',
        isAM: true,
        startHourValue: '',
        startDate: '',

        durationValue: 0,
        durationIsValid: true,
        durationErrMessage: 'This must be a number',

        textAreaSignNumber: 0
    };

    onTitleValueChange = (event) => {
        this.setState({ titleValue: event.target.value, titleIsValid: event.target.checkValidity() });
    }
    onDescriptionValueChange = (event) => {
        this.setState({ descriptionValue: event.target.value, descriptionIsValid: event.target.checkValidity(),
        textAreaSignNumber: event.target.value.length });
    }
    onCategoryValueChange = (event) => {
        this.setState({ categoryValue: event.target.value });
    }
    changePayment = () => {
        this.setState({ paidEvent: !this.state.paidEvent });
    }
    onPaymentValueChange = (event) => {
        this.setState({ paymentValue: event.target.value, paymentIsValid: event.target.checkValidity() });
    }
    onRewardValueChange = (event) => {
        this.setState({ rewardValue: event.target.value, rewardIsValid: event.target.checkValidity() });
    }
    onEmailValueChange = (event) => {
        this.setState({ emailValue: event.target.value, emailIsValid: event.target.checkValidity() });
    }
    changeDayTime = () => {
        this.setState({ isAM: !this.state.isAM });
    }
    onDateValueChange = (event) => {
        this.setState({ startsDayValue: event.target.value});
        console.log(event.target.value)
    }
    onHourValueChange = (event) => {
        this.setState({ startHourValue: event.target.value});
        console.log(event.target.value)
    }
    onDurationValueChange = (event) => {
        this.setState({ durationValue: event.target.value, durationIsValid: event.target.checkValidity() });
    }

    checkForm = () => {
        
    }

    correctDateFormat = () => {
        if(this.state.isAM){
            return this.state.startsDayValue+this.state.startHourValue;
        }
        else{
            let hour = this.state.startHourValue;
            let hourArr = hour.split(':');
            hour = +hourArr[0] + 12 +":"+hourArr[1]
            return this.state.startsDayValue+hour;
        }
    }

    createDataOutput() {
        const date = this.correctDateFormat();
        const output = {
            title: this.state.titleValue,
            description: this.state.descriptionValue,
            category_id: this.state.categoryValue,
            paid_event: this.state.paidEvent,
            event_fee: this.state.paymentValue,
            reward: this.state.rewardValue,
            date: date, // YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
            duration: this.state.durationValue * 3600, // in seconds
            coordinator: {
                email: this.state.emailValue,
                id: this.state.responsibleValue,
            }
        }
        return output;
    }

    onSubmit = e => {
        e.preventDefault();
        
        // const form = e.target;
        // if (this.checkForm(form))
            console.log(this.createDataOutput())
    }

    render() {
        const titleErrorMessage = !this.state.titleIsValid ?
            <ErrorMessage text={this.state.titleErrMessage}></ErrorMessage> : '';
        const descriptionErrorMessage = !this.state.descriptionIsValid ?
            <ErrorMessage text={this.state.descriptionErrMessage}></ErrorMessage> : '';
        const paymentErrorMessage = !this.state.paymentIsValid && this.state.paidEvent ?
            <ErrorMessage text={this.state.paymentErrMessage}></ErrorMessage> : '';
        const rewardErrorMessage = !this.state.rewardIsValid ?
            <ErrorMessage text={this.state.rewardErrMessage}></ErrorMessage> : '';
        const emailErrorMessage = !this.state.emailIsValid ?
            <ErrorMessage text={this.state.emailErrMessage}></ErrorMessage> : '';
        const durationErrorMessage = !this.state.durationIsValid ?
            <ErrorMessage text={this.state.durationErrMessage}></ErrorMessage> : '';
        return (
            <div style={{ marginTop: '4em' }}>
                <Layout>
                    <form autoComplete="off" className='FormField' onSubmit={this.onSubmit}>
                        <Form formTitle={"About"}>
                            <FormRow>
                                <Col size={"S"}>
                                    <FormLabel error={!this.state.titleIsValid}>Title <span className='red-star'>*</span></FormLabel>
                                </Col>
                                <Col size={"B"}>
                                    <Input width={"big"} inputType={"text"}
                                        name={"title"}
                                        error={!this.state.titleIsValid}
                                        onChange={this.onTitleValueChange}
                                        placeholder={"Make it short and clear"} isRequired={true} />
                                </Col>
                                <Col size={"S"}>
                                    {titleErrorMessage}
                                </Col>
                            </FormRow>
                            <FormRow>
                                <Col size={"S"}>
                                    <FormLabel error={!this.state.descriptionIsValid}>Description <span className='red-star'>*</span></FormLabel>
                                </Col>
                                <Col size={"B"}><Textarea rows={"8"}
                                    onChange={this.onDescriptionValueChange}
                                    error={!this.state.descriptionIsValid}
                                    maxLength={"140"} currentSignNum={this.state.textAreaSignNumber}
                                    placeholder={"Write about your event, be creative"} /></Col>
                                <Col size={"S"}>
                                    {descriptionErrorMessage}
                                </Col>
                            </FormRow>
                            <FormRow>
                                <Col size={"S"}><FormLabel  >Category </FormLabel></Col>

                                <Col size={"B"}><Select categoriesName={categories}
                                    onChange={this.onCategoryValueChange}
                                    title={"Select category"}
                                    description={"Descibe topic and people who should be interested in this event"} /></Col>

                            </FormRow>
                            <FormRow>
                                <Col size={"S"}><FormLabel  >Payment </FormLabel></Col>

                                <Col size={"B"}>
                                    <RadioInput label={"Event free"} value={"eventFree"}
                                        onChange={this.changePayment} checked={!this.state.paidEvent} name={"eventPayment"} />
                                    <RadioInput label={"Event paid"} value={"eventPaid"}
                                        onChange={this.changePayment} checked={this.state.paidEvent} name={"eventPayment"} />
                                    {this.state.paidEvent ? <Input width={"small"} inputType={"number"}
                                        name={"title"}
                                        error={!this.state.paymentIsValid}
                                        onChange={this.onPaymentValueChange}
                                        placeholder={"Fee"} isRequired={true} /> : ''}
                                </Col>
                                <Col size={"S"}>
                                    {paymentErrorMessage}
                                </Col>
                            </FormRow>
                            <FormRow>
                                <Col size={"S"}><FormLabel error={!this.state.rewardIsValid}>Reward</FormLabel></Col>

                                <Col size={"B"}><div ><Input width={"small"}
                                    onChange={this.onRewardValueChange}
                                    error={!this.state.rewardIsValid}
                                    inputType={"number"} placeholder={"Number"} />
                                    <div className="additional-input-descpription-reward">reward points for attendance</div>
                                </div></Col>
                                <Col size={"S"}>
                                    {rewardErrorMessage}
                                </Col>
                            </FormRow>
                        </Form>

                        <Form formTitle={"Coordinator"}>
                            <FormRow>
                                <Col size={"S"}><FormLabel  >Responsible <span className='red-star'>*</span></FormLabel></Col>

                                <Col size={"B"}><SelectWithCat categoriesName={employes} /></Col>

                            </FormRow>
                            <FormRow>
                                <Col size={"S"}><FormLabel error={!this.state.emailIsValid} >Email</FormLabel></Col>

                                <Col size={"B"}><Input width={"big"} inputType={"email"}
                                    name={"email"}
                                    error={!this.state.emailIsValid}
                                    onChange={this.onEmailValueChange} placeholder={"Email"} /></Col>
                                <Col size={"S"}>
                                    {emailErrorMessage}
                                </Col>
                            </FormRow>
                        </Form>

                        <Form formTitle={"When"}>
                            <FormRow>
                                <Col size={"S"}><FormLabel  >Starts on <span className='red-star'>*</span></FormLabel></Col>

                                <Col size={"B"}> <InputDate isRequired={true} onChange={this.onDateValueChange}/>
                                    <Input width={"small"} inputType={"time"} 
                                    placeholder={"Number"} min={"00:00"} max={"12:00"} 
                                    onChange={this.onHourValueChange}
                                    isRequired={true} />
                                    <RadioInput label={"AM"} value={"AM"}
                                        onChange={this.changeDayTime} checked={this.state.isAM}
                                        name={"eventTime"} />
                                    <RadioInput label={"PM"} value={"PM"}
                                        onChange={this.changeDayTime} checked={!this.state.isAM}
                                        name={"eventTime"} />
                                </Col>

                            </FormRow>
                            <FormRow>
                                <Col size={"S"}><FormLabel error={!this.state.durationIsValid}>Duration</FormLabel>
                                </Col>

                                <Col size={"B"}>
                                    <Input width={"small"} inputType={"number"}
                                        error={!this.state.durationIsValid}
                                        onChange={this.onDurationValueChange} placeholder={"Number"} />
                                    <div className="additional-input-descpription-hour">hour</div>
                                </Col>
                                <Col size={"S"}>
                                    {durationErrorMessage}
                                </Col>
                            </FormRow>
                        </Form>
                        <Button buttonText={"Publish event"}></Button>
                    </form>
                </Layout>
            </div>
        );
    }
}

export default CreateEventScreen;