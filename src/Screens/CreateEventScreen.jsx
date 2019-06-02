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
import InfoBoard from '../Components/InfoBoard/InfoBoard';
import categories from '../mocks/categories.json';
import employes from '../mocks/employes.json';

import '../style.css';

const elemProperties = {
    value: '',
    isValid: true
}

class CreateEventScreen extends React.Component {

    state = {
        title : {...elemProperties, errMessage: 'Title can not be empty'},
        description: { ...elemProperties, errMessage: 'Descpription can not be empty'},
        payment: {...elemProperties, errMessage: 'Can not be empty'},
        reward: {...elemProperties, errMessage: 'This must be a number'},
        email: {...elemProperties, errMessage: 'This is not valid email'},
        duration: {...elemProperties, errMessage: 'This must be a number'},
        hour: {...elemProperties, errMessage: "Hour can not be empty"},
        date: {...elemProperties, errMessage: "Date can not be empty"},
        responsible: {...elemProperties, errMessage: "You have to choose person"},
        categoryValue: 0,
        responsibleValue: -1,
        responsibleIsValid: true,
        responsibleErrMessage: "You have to choose person",
        isAM: true,
        paidEvent: false,
        textAreaSignNumber: 0,
        isFormSend: false,
        currentYear: '',
        currentMonth: '',
        currentDay: ''
    };

    componentDidMount() {
        var today = new Date()
        this.setState({currentYear: today.getFullYear(),
            currentMonth: (today.getMonth() + 1),
            currentDay: today.getDate()});
    }

    onValueChange = (event) => {
        const {errMessage} = this.state[event.target.name];
        this.setState({[event.target.name]: {
            errMessage: errMessage,
            value: event.target.value,
            isValid: event.target.checkValidity()}});

        if(event.target.name === 'date' ){
            if(this.checkDate(event.target.value)){
                this.setState({[event.target.name]: {
                    errMessage: "Event can not be prior",
                    value: event.target.value,
                    isValid: false}});
            }
            
        }
    }
    onDescriptionValueChange = (event) => {
        this.setState({[event.target.name]:{value: event.target.value,
            isValid: event.target.checkValidity(), errMessage: 'Descpription can not be empty',
            textAreaSignNumber: event.target.value.length }});
    }
    onCategoryValueChange = (event) => {
        this.setState({categoryValue: parseInt(event.target.value)});
    }
    changePayment = () => {
        this.setState({ paidEvent: !this.state.paidEvent });
    }

    changeDayTime = () => {
        this.setState({ isAM: !this.state.isAM });
    }

    checkDate(date) {
        const dateArr = date.split('-');
        if(dateArr[0] < this.state.currentYear) {
            return true;
        }else if (dateArr[1] < this.state.currentMonth){
            return true;
        }else if (dateArr[2] < this.state.currentDay){
            return true;
        }
        return false;
    }


    checkForm = (formElements) => {
        let formValid = true;
        const arrElements = Array.prototype.slice.call(formElements);
        arrElements.filter(elem => elem.name.length > 0 && elem.type !== 'radio')
            .map(input => {
                const currName = input.name
                const {errMessage, value} = this.state[currName];
                if(!input.checkValidity()){
                    formValid = false;
                }
                this.setState({[currName]: {
                    value: value,
                    errMessage: errMessage,
                    isValid: input.checkValidity()
                }});
                if(input.name === 'responsible' && value === ""){
                    formValid = false;
                    this.setState({[currName]: {
                        value: value,
                        errMessage: errMessage,
                        isValid: false
                    }});
                }
               
                return currName;
            })
        
        return formValid;
    }

    correctDateFormat = () => {
        if (this.state.isAM) {
            return this.state.date.value + this.state.hour.value;
        }
        else {
            let hour = this.state.hour.value;
            let hourArr = hour.split(':');
            hour = +hourArr[0] + 12 + ":" + hourArr[1]
            return this.state.date.value + hour;
        }
    }

    getIntegerValue(value){
        return Number.isInteger(parseInt(value)) ? parseInt(value) : "";
    }

    createDataOutput() {
        const date = this.correctDateFormat();
        const categoryId = this.getIntegerValue(this.state.categoryValue);
        const eventFee = this.getIntegerValue(this.state.payment.value);
        const reward = this.getIntegerValue(this.state.reward.value);
        const duration = this.getIntegerValue(this.state.duration.value);
        const coordId = this.getIntegerValue(this.state.responsible.value);
        const output = {
            title: this.state.title.value,
            description: this.state.description.value,
            category_id: categoryId,
            paid_event: this.state.paidEvent,
            event_fee: eventFee,
            reward: reward,
            date: date, 
            duration: duration * 3600,
            coordinator: {
                email: this.state.email.value,
                id: coordId,
            }
        }
        return output;
    }

    onSubmit = e => {
        e.preventDefault();
        const form = e.target;
        if(this.checkForm(form)){
            this.setState({isFormSend: true});
            console.log(this.createDataOutput())
        }
            
    }

    render() {
        
        const {title, description, payment , reward, email, duration} = this.state;
        const titleErrorMessage = !title.isValid ?
            <ErrorMessage text={title.errMessage}></ErrorMessage> : '';
        const descriptionErrorMessage = !description.isValid ?
            <ErrorMessage text={description.errMessage}></ErrorMessage> : '';
        const paymentErrorMessage = !payment.isValid && this.state.paidEvent ?
            <ErrorMessage text={payment.errMessage}></ErrorMessage> : '';
        const rewardErrorMessage = !reward.isValid ?
            <ErrorMessage text={reward.errMessage}></ErrorMessage> : '';
        const emailErrorMessage = !email.isValid ?
            <ErrorMessage text={email.errMessage}></ErrorMessage> : '';
        const hourErrorMessage = !this.state.hour.isValid ?
            <ErrorMessage text={this.state.hour.errMessage}></ErrorMessage> : '';
        const dateErrorMessage = !this.state.date.isValid ?
            <ErrorMessage text={this.state.date.errMessage}></ErrorMessage> : '';
        const durationErrorMessage = !duration.isValid ?
            <ErrorMessage text={duration.errMessage}></ErrorMessage> : '';
        const responsibleErrorMessage = !this.state.responsible.isValid ?
            <ErrorMessage text={this.state.responsible.errMessage}></ErrorMessage> : '';

        const form = (
            <form autoComplete="off" className='FormField' onSubmit={this.onSubmit} noValidate>
                        <Form formTitle={"About"}>
                            <FormRow>
                                <Col size={"S"}>
                                    <FormLabel error={!this.state.title.isValid}>Title <span className='red-star'>*</span></FormLabel>
                                </Col>

                                <Col size={"B"}>
                                    <Input width={"big"} inputType={"text"}
                                        name={"title"}
                                        error={!this.state.title.isValid}
                                        onChange={this.onValueChange}
                                        placeholder={"Make it short and clear"} isRequired={true} />
                                </Col>

                                <Col size={"S"}>
                                    {titleErrorMessage}
                                </Col>
                            </FormRow>
                            <FormRow>
                                <Col size={"S"}>
                                    <FormLabel error={!this.state.description.isValid}>Description <span className='red-star'>*</span></FormLabel>
                                </Col>

                                <Col size={"B"}><Textarea rows={"8"}
                                    name = {"description"}
                                    onChange={this.onDescriptionValueChange}
                                    error={!this.state.description.isValid}
                                    maxLength={"140"} currentSignNum={this.state.textAreaSignNumber}
                                    placeholder={"Write about your event, be creative"} /></Col>

                                <Col size={"S"}>
                                    {descriptionErrorMessage}
                                </Col>
                            </FormRow>
                            <FormRow>
                                <Col size={"S"}><FormLabel > Category </FormLabel></Col>

                                <Col size={"B"}><Select categoriesName={categories}
                                    onChange={this.onCategoryValueChange}
                                    title={"Select category"}
                                    description={"Descibe topic and people who should be interested in this event"} />
                                </Col>

                            </FormRow>
                            <FormRow>
                                <Col size={"S"}><FormLabel> Payment </FormLabel></Col>

                                <Col size={"B"}>
                                    <RadioInput label={"Event free"} value={"eventFree"}
                                        onChange={this.changePayment} checked={!this.state.paidEvent} name={"eventPayment"} />
                                    <RadioInput label={"Event paid"} value={"eventPaid"}
                                        onChange={this.changePayment} checked={this.state.paidEvent} name={"eventPayment"} />

                                    {this.state.paidEvent ? <div><Input width={"small"} inputType={"number"}
                                        name={"payment"} error={!this.state.payment.isValid}
                                        onChange={this.onValueChange} placeholder={"Fee"} isRequired={true} />
                                        <div className="additional-input-descpription">$</div></div> : ''}
                                </Col>

                                <Col size={"S"}>
                                    {paymentErrorMessage}
                                </Col>
                            </FormRow>
                            <FormRow>
                                <Col size={"S"}><FormLabel error={!this.state.reward.isValid}>Reward</FormLabel></Col>

                                <Col size={"B"}>
                                    <div><Input width={"small"}
                                        name={"reward"}
                                        onChange={this.onValueChange}
                                        error={!this.state.reward.isValid}
                                        inputType={"number"} placeholder={"Number"} />
                                        <div className="additional-input-descpription">reward points for attendance</div>
                                    </div>
                                </Col>

                                <Col size={"S"}>
                                    {rewardErrorMessage}
                                </Col>
                            </FormRow>
                        </Form>

                        <Form formTitle={"Coordinator"}>
                            <FormRow>
                                <Col size={"S"}><FormLabel>Responsible <span className='red-star'>*</span></FormLabel></Col>

                                <Col size={"B"}>
                                    <SelectWithCat name={"responsible"} onChange={this.onValueChange} categoriesName={employes} />
                                </Col>
                                <Col size={"S"}>
                                    {responsibleErrorMessage}
                                </Col>
                            </FormRow>
                            <FormRow>
                                <Col size={"S"}><FormLabel error={!this.state.email.isValid} >Email</FormLabel></Col>

                                <Col size={"B"}><Input width={"big"} inputType={"email"}
                                    name={"email"}
                                    error={!this.state.email.isValid}
                                    onChange={this.onValueChange} placeholder={"Email"} />
                                </Col>

                                <Col size={"S"}>
                                    {emailErrorMessage}
                                </Col>
                            </FormRow>
                        </Form>

                        <Form formTitle={"When"}>
                            <FormRow>
                                <Col size={"S"}><FormLabel  >Starts on <span className='red-star'>*</span></FormLabel></Col>

                                <Col size={"B"}>
                                    <InputDate isRequired={true} name={"date"} onChange={this.onValueChange} />

                                    <div className="additional-input-descpription">at</div>

                                    <Input width={"small"} inputType={"time"} name={"hour"}
                                        placeholder={"Number"} min={"00:00"} max={"12:00"}
                                        onChange={this.onValueChange}
                                        isRequired={true} />

                                    <RadioInput label={"AM"} value={"AM"}
                                        onChange={this.changeDayTime} checked={this.state.isAM}
                                        name={"eventTime"} />
                                    <RadioInput label={"PM"} value={"PM"}
                                        onChange={this.changeDayTime} checked={!this.state.isAM}
                                        name={"eventTime"} />
                                </Col>
                                <Col size={"S"}>
                                    {dateErrorMessage}
                                    {hourErrorMessage}
                                </Col>

                            </FormRow>
                            <FormRow>
                                <Col size={"S"}><FormLabel error={!this.state.duration.isValid}>Duration</FormLabel>
                                </Col>

                                <Col size={"B"}>
                                    <Input width={"small"} inputType={"number"}
                                        name={"duration"}
                                        error={!this.state.duration.isValid}
                                        onChange={this.onValueChange} placeholder={"Number"} />
                                    <div className="additional-input-descpription">hour</div>
                                </Col>

                                <Col size={"S"}>
                                    {durationErrorMessage}
                                </Col>
                            </FormRow>
                        </Form>
                        <Button buttonText={"Publish event"}></Button>
                    </form>
        )
        return (
            <div className="layoutHelper">
                <Layout>
                    {!this.state.isFormSend ? form : <InfoBoard infoType={"success"} boardTitle={"Success"} infoText={"Event has been created."}></InfoBoard>}
                </Layout>
            </div>
        );
    }
}

export default CreateEventScreen;