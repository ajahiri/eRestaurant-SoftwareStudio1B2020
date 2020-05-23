import { Meteor } from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import React from "react";
import Select from 'react-select';
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBTypography, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from  "mdbreact";
import Flatpickr from "react-flatpickr";
import { Bookings } from '../../../../imports/collections/Bookings.js';
import { Branches } from '../../../../imports/collections/Branches.js';
import "./custom-flatpickr-theme.css";
import '../../../main.scss';
import Hello_world from '../../components/helloWorld.js';

/* NOTE: Using MDBTypography tag produces a warning in the browser consol. Does not affect functionality -> Warning: Received `false` for a non-boolean attribute `abbr`. */

class Booking extends React.Component {  
    constructor(props) {
        super(props);

        
        this.firstName = '';
        this.lastName = '';

        this.state = {
        activeView: 'booking',
        // Time btns START
        btnFour: 'indigo',
        btnFive: 'indigo',
        btnSix: 'indigo',
        btnSeven: 'indigo',
        btnEight: 'indigo',
        btnNine: 'indigo',
        btnTen: 'indigo',
        //Time btns END
        
        // Input disables START
        disableDate: "md-form disabled", //this.setState({"md-form"}); to enable input field.
            //Time Btns START
        disableFour: true,  //this.setState({disableFour: "true"}); to disable
        disableFive: true,
        disableSix: true,
        disableSeven: true,
        disableEight: true,
        disableNine: true,
        disableTen: true,
            //Time Btns END
        // Input disables END

        // START Booking Details Attributes
        customerName: '',
        branch: '',
        email: '',
        phone: '',
        guestNum: '',
        time: '',
        date: new Date(),
        specialRequest: '',
        // END Booking Details Attributes
        defaultDateFormat: "\\Se\\lect \\Date...", //Workaround: Used to display placeholder in date picker input field.
        };                                                    // altFormat is then set to the proper date format using the Flatpickr onOpen function.
        
        this.handleBtnSelect = this.handleBtnSelect.bind(this);
        this.handleCustomerName = this.handleCustomerName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleGuestNum = this.handleGuestNum.bind(this);
        this.handleSpecialRequest = this.handleSpecialRequest.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBranch = this.handleBranch.bind(this);
        this.branchNames = this.branchNames.bind(this);
        this.availabilityCheck = this.availabilityCheck.bind(this);
        this.handleTimeDisables = this.handleTimeDisables.bind(this);
        this.enableDatePicker = this.enableDatePicker.bind(this);

        this.handleBtnTest = this.handleBtnTest.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const state = this.state;
        const date = new Date(this.state.date).toDateString(); //state.date is array containing the date string. This line converts the array to a readable date string; eg: Fri May
        Meteor.call('bookings.insert', state.branch.value, state.customerName, state.email,
            state.phone, state.guestNum, date, state.time, state.specialRequest,
            function(error) {
                if (error) {
                    console.log(error);
                }
            }
        );
    }

 // START handleBtnSelect /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 handleBtnSelect(event) {
        const selectedBtn = event.target.id; // id of the button that was clicked

        const btnFour = this.state.btnFour;
        if(selectedBtn == '4:00') {
            if(btnFour == 'indigo') { //deselect: toggle between primary and indigo
                this.setState({btnFour: 'primary', time: selectedBtn}); //selected
                } else { this.setState({btnFour: 'indigo', time: ''}); } //deselected
        } else {
            this.setState({btnFour: 'indigo'}); //change all non-selected btns to indigo
        }

        const btnFive = this.state.btnFive;
        if(selectedBtn == '5:00') {
            if(btnFive == 'indigo') {
            this.setState({btnFive: 'primary', time: selectedBtn});
            } else { this.setState({btnFive: 'indigo', time: ''}); }
        } else {
            this.setState({btnFive: 'indigo'});
        }

        const btnSix = this.state.btnSix;
        if(selectedBtn == '6:00') {
            if(btnSix == 'indigo') {
                this.setState({btnSix: 'primary', time: selectedBtn});
                } else { this.setState({btnSix: 'indigo', time: ''}); }
        } else {
            this.setState({btnSix: 'indigo'});
        }

        const btnSeven = this.state.btnSeven;
        if(selectedBtn == '7:00') {
            if(btnSeven == 'indigo') {
                this.setState({btnSeven: 'primary', time: selectedBtn});
                } else { this.setState({btnSeven: 'indigo', time: ''}); }
        } else {
            this.setState({btnSeven: 'indigo'});
        }

        const btnEight = this.state.btnEight;
        if(selectedBtn == '8:00') {
            if(btnEight == 'indigo') {
                this.setState({btnEight: 'primary', time: selectedBtn});
                } else { this.setState({btnEight: 'indigo', time: ''}); }
        } else {
            this.setState({btnEight: 'indigo'});
        }

        const btnNine = this.state.btnNine;
        if(selectedBtn == '9:00') {
            if(btnNine == 'indigo') {
                this.setState({btnNine: 'primary', time: selectedBtn});
                } else { this.setState({btnNine: 'indigo', time: ''}); }
        } else {
            this.setState({btnNine: 'indigo'});
        }

        const btnTen = this.state.btnTen;
        if(selectedBtn == '10:00') {
            if(btnTen == 'indigo') {
                this.setState({btnTen: 'primary', time: selectedBtn});
                } else { this.setState({btnTen: 'indigo', time: ''}); }
        } else {
            this.setState({btnTen: 'indigo'});
        }
    }
// END handleBtnSelect /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    handleCustomerName(event) {
        const target = event.target;

        if (target.name == 'firstName'){
            this.firstName = target.value;
        } else if (target.name == 'lastName') {
            this.lastName = target.value;
        }

        const fullName = this.firstName + ' ' + this.lastName;
        this.setState({customerName: fullName});     
    }
    handleEmail(event) {
        this.setState({email: event.target.value});
    }
    handlePhone(event) {
        this.setState({phone: event.target.value});
    }
    handleGuestNum(event) {
        this.setState({guestNum: event.target.value});
    }
    handleSpecialRequest(event) {
        this.setState({specialRequest: event.target.value});
    }
    handleBranch(branch) {
        this.setState({branch});
        this.enableDatePicker(branch);
    }
    branchNames() { //builds an array of each branch name and id to be passed to the Selector component
        let selectArray = [];
        this.props.branch_names.forEach(function(branch) {
            selectArray.push({value: branch._id, label: branch.name});
        });
        return selectArray;
    }
    enableDatePicker(branch) {
        console.log('called');
        if (branch != null) {
            this.setState({disableDate: 'md-form'});
        }
    }
    enableTimePicker(defaultDateFormat){
        if (defaultDateFormat != '\\Se\\lect \\Date...') {
            console.log('called');
            this.setState({
                disableFour: false,
                disableFive: false,
                disableSix: false,
                disableSeven: false,
                disableEight: false,
                disableNine: false,
                disableTen: false,
            })
        }
    }
    availabilityCheck(date, branch) {

        let unavailable_times = [];
        Meteor.call('date_time_branch.check', date, branch,
            function(error, unavailableTimes) {
                if (error) {
                    console.log(error);
                }
                unavailableTimes.forEach((time) => {
                    unavailable_times.push(time);
                });
            }
        );
        unavailable_times.forEach((time) => {
            console.log(time);
            if (time == '4:00') {
                this.setState({disableFour: true})
            }
            if (time == '5:00') {
                this.setState({disableFive: true})
                console.log('yay');
            }
            if (time == '6:00') {
                this.setState({disableSix: true})
            }
            if (time == '7:00') {
                this.setState({disableSeven: true})
            }
            if (time == '8:00') {
                this.setState({disableEight: true})
            }
            if (time == '9:00') {
                this.setState({disableNine: true})
            }
            if (time == '10:00') {
                this.setState({disableTen: true})
            }
        });
    }
    handleTimeDisables(unavailable_times) {
        
    }
    
    handleBtnTest(event) {
        this.setState({activeView: 'helloWorld'});
    }

    render() {
        const { 
            activeView,
            date, defaultDateFormat,
            branch,
            btnFour, btnFive, btnSix, btnSeven, btnEight, btnNine, btnTen,
            disableFour, disableFive, disableSix, disableSeven, disableEight, disableNine, disableTen,
        } = this.state;

        return (
            <div>
            {activeView == 'booking' ?
            <form onSubmit={this.handleSubmit} >
                <MDBContainer> 
                    
                    <MDBRow>
                        <MDBTypography tag="h2" className="page-heading" >Create Booking</MDBTypography>
                    </MDBRow>
                    <MDBRow center>
                        <MDBCol sm="4" md="4" lg="4"><MDBInput label="First Name" size="lg" value={this.state.value} onChange={this.handleCustomerName} name='firstName' /> </MDBCol> { /* value={this.state.value} is already the default value */}
                        <MDBCol sm="4" md="4" lg="4"><MDBInput label="Last Name" size="lg" onChange={this.handleCustomerName} name='lastName' /> </MDBCol>
                    </MDBRow>
                    <MDBRow center>
                        <MDBCol sm="4" md="4" lg="4"><MDBInput label="Email" size="lg" onChange={this.handleEmail} /> </MDBCol>
                        <MDBCol sm="4" md="4" lg="4"><MDBInput label="Phone" size="lg" onChange={this.handlePhone} /> </MDBCol>
                    </MDBRow>
                    <MDBRow center >
                        <MDBCol sm="8" md="8" lg="8">
                        <MDBTypography className="element-heading" tag="h6" >Location:</MDBTypography>
                            <Select
                                className="branch-selector"
                                placeholder="Select Location..."
                                value={branch}
                                onChange={this.handleBranch}
                                options={
                                    this.branchNames()
                                }
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow center>
                        <MDBCol sm="4" md="4" lg="4"><MDBInput type="number" label="Number of Guests" size="lg" hint="0" onChange={this.handleGuestNum} /></MDBCol>
                        {/* Flatpickr code START */}
                        {/*May include ability for Owner to disable certain dates (holidays)*/}
                        <MDBCol sm="4" md="4" lg="4" ><div className={this.state.disableDate} > {/* this div changes the input field to the mdb input field */}
                        <Flatpickr
                            className="form-control-lg" //sets input field font size to lg
                            value={date}
                            onChange={date => {
                            this.setState({ date: date }); // return this.state.date for the selected Date
                            this.enableTimePicker(defaultDateFormat);
                            this.availabilityCheck(new Date(this.state.date).toDateString(), branch.value);
                            console.log(date);
                            }}
                            onOpen={() => {
                                this.setState({ defaultDateFormat: "F j, Y" });
                            }}  
                            onClose={() => {
                                // Bug Fix: If backspace is used when input field is selected input field is blank
                                if (date.length==0) {
                                    this.setState({ defaultDateFormat: "\\Se\\lect \\Date..." }); //resets placeholder value
                                    this.setState({ date: new Date() }) //resets date to Date() -> returns todays date
                                }
                            }}
                            options={{
                                altInput: true, // altInput is a "human friendly" format (April 22, 2020)
                                altFormat: defaultDateFormat,
                                dateFormat: "Y-m-d", //set altInput to false to use this format
                                minDate:"today",
                            }}
                        />
                        </div></MDBCol>
                        {/* Flatpickr code END */}
                    </MDBRow>
                    <MDBContainer>
                        <MDBRow center>
                            <MDBCol sm="8" md="8" lg="8">
                                <MDBTypography className="element-heading" tag="h5" >Time:</MDBTypography>
                                <table className="time-selector">
                                    <tbody>
                                        <tr>
                                            <td><MDBBtn id='4:00' color={btnFour} onClick={this.handleBtnSelect} disabled={disableFour.valueOf()} >4:00</MDBBtn></td>
                                            <td><MDBBtn id='6:00' color={btnSix} onClick={this.handleBtnSelect} disabled={disableSix.valueOf()}>6:00</MDBBtn></td>
                                            <td><MDBBtn id='8:00' color={btnEight} onClick={this.handleBtnSelect} disabled={disableEight.valueOf()}>8:00</MDBBtn></td>
                                            <td><MDBBtn id='10:00' color={btnTen} onClick={this.handleBtnSelect} disabled={disableTen.valueOf()}>10:00</MDBBtn></td>
                                        </tr>
                                        <tr>
                                            <td><MDBBtn id='5:00' color={btnFive} onClick={this.handleBtnSelect} disabled={disableFive.valueOf()}>5:00</MDBBtn></td>
                                            <td><MDBBtn id='7:00' color={btnSeven} onClick={this.handleBtnSelect} disabled={disableSeven.valueOf()}>7:00</MDBBtn></td>
                                            <td><MDBBtn id='9:00' color={btnNine} onClick={this.handleBtnSelect} disabled={disableNine.valueOf()}>9:00</MDBBtn></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <MDBRow center>
                        <MDBCol sm="8" md="8" lg="8" className="text-area-padding">
                            <MDBInput type="textarea" label="Special Request" hint="Let us know if you have any special event requests!" outline size="lg" onChange={this.handleSpecialRequest}/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='btn-confirm-padding'>
                    <MDBCol><MDBBtn color="indigo" size='lg' type='submit'>Confirm Booking</MDBBtn></MDBCol>
                    <MDBCol><MDBBtn onClick={this.handleBtnTest}>Test btn</MDBBtn></MDBCol>
                    </MDBRow>
                </MDBContainer>
            </form>
            : null
            }
            {activeView == 'helloWorld' ? <Hello_world /> : null}
            </div>
        );
    }
}

export default withTracker(() => {
    //Meteor.subscribe('branches');
    Meteor.subscribe('branch_names');
    return {
        branch_names: Branches.find().fetch(),
    }
})(Booking);