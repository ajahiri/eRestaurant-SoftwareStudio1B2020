import { Meteor } from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import React from "react";
import Select from 'react-select';
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBTypography, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from  "mdbreact";
import Flatpickr from "react-flatpickr";
import CustomDropdown from '../../components/CustomDropdown.js';
import { Bookings } from '../../../../imports/collections/Bookings.js';
import { Branches } from '../../../../imports/collections/Branches.js';
import "./custom-flatpickr-theme.css";
import '../../../main.scss';

{/* NOTE: Using MDBTypography tag produces a warning in the browser consol. Does not affect functionality -> Warning: Received `false` for a non-boolean attribute `abbr`. */}

class Booking extends React.Component {  
    constructor(props) {
        super(props);

        this.firstName = '';
        this.lastName = '';

        this.state = {
        btnFour: 'indigo',
        btnFour_thirty: 'indigo',
        btnFive: 'indigo',
        btnFive_thirty: 'indigo',
        btnSix: 'indigo',
        btnSix_thirty: 'indigo',
        btnSeven: 'indigo',
        btnSeven_thirty: 'indigo',
        btnEight: 'indigo',
        btnEight_thirty: 'indigo',
        btnNine: 'indigo',
        btnNine_thirty: 'indigo',
        btnTen: 'indigo',
        btnTen_thirty: 'indigo',
        
        // START Booking Details Attributes
        customerName: '',
        branch: null,
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

        this.handleBtnTest = this.handleBtnTest.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const state = this.state;
        const date = new Date(state.date).toDateString(); //state.date is array containing the date string. This line converts the array to a readable date string; eg: Fri May
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

        const btnFour_thirty = this.state.btnFour_thirty;
        if(selectedBtn == '4:30') {
            if(btnFour_thirty == 'indigo') {
                this.setState({btnFour_thirty: 'primary', time: selectedBtn});
                } else { this.setState({btnFour_thirty: 'indigo', time: ''}); }
        } else {
            this.setState({btnFour_thirty: 'indigo'});
        }

        const btnFive = this.state.btnFive;
        if(selectedBtn == '5:00') {
            if(btnFive == 'indigo') {
            this.setState({btnFive: 'primary', time: selectedBtn});
            } else { this.setState({btnFive: 'indigo', time: ''}); }
        } else {
            this.setState({btnFive: 'indigo'});
        }

        const btnFive_thirty = this.state.btnFive_thirty;
        if(selectedBtn == '5:30') {
            if(btnFive_thirty == 'indigo') {
                this.setState({btnFive_thirty: 'primary', time: selectedBtn});
                } else { this.setState({btnFive_thirty: 'indigo', time: ''}); }
        } else {
            this.setState({btnFive_thirty: 'indigo'});
        }

        const btnSix = this.state.btnSix;
        if(selectedBtn == '6:00') {
            if(btnSix == 'indigo') {
                this.setState({btnSix: 'primary', time: selectedBtn});
                } else { this.setState({btnSix: 'indigo', time: ''}); }
        } else {
            this.setState({btnSix: 'indigo'});
        }

        const btnSix_thirty = this.state.btnSix_thirty;
        if(selectedBtn == '6:30') {
            if(btnSix_thirty == 'indigo') {
                this.setState({btnSix_thirty: 'primary', time: selectedBtn});
                } else { this.setState({btnSix_thirty: 'indigo', time: ''}); }
        } else {
            this.setState({btnSix_thirty: 'indigo'});
        }

        const btnSeven = this.state.btnSeven;
        if(selectedBtn == '7:00') {
            if(btnSeven == 'indigo') {
                this.setState({btnSeven: 'primary', time: selectedBtn});
                } else { this.setState({btnSeven: 'indigo', time: ''}); }
        } else {
            this.setState({btnSeven: 'indigo'});
        }

        const btnSeven_thirty = this.state.btnSeven_thirty;
        if(selectedBtn == '7:30') {
            if(btnSeven_thirty == 'indigo') {
                this.setState({btnSeven_thirty: 'primary', time: selectedBtn});
                } else { this.setState({btnSeven_thirty: 'indigo', time: ''}); }
        } else {
            this.setState({btnSeven_thirty: 'indigo'});
        }

        const btnEight = this.state.btnEight;
        if(selectedBtn == '8:00') {
            if(btnEight == 'indigo') {
                this.setState({btnEight: 'primary', time: selectedBtn});
                } else { this.setState({btnEight: 'indigo', time: ''}); }
        } else {
            this.setState({btnEight: 'indigo'});
        }

        const btnEight_thirty = this.state.btnEight_thirty;
        if(selectedBtn == '8:30') {
            if(btnEight_thirty == 'indigo') {
                this.setState({btnEight_thirty: 'primary', time: selectedBtn});
                } else { this.setState({btnEight_thirty: 'indigo', time: ''}); }
        } else {
            this.setState({btnEight_thirty: 'indigo'});
        }

        const btnNine = this.state.btnNine;
        if(selectedBtn == '9:00') {
            if(btnNine == 'indigo') {
                this.setState({btnNine: 'primary', time: selectedBtn});
                } else { this.setState({btnNine: 'indigo', time: ''}); }
        } else {
            this.setState({btnNine: 'indigo'});
        }

        const btnNine_thirty = this.state.btnNine_thirty;
        if(selectedBtn == '9:30') {
            if(btnNine_thirty == 'indigo') {
                this.setState({btnNine_thirty: 'primary', time: selectedBtn});
                } else { this.setState({btnNine_thirty: 'indigo', time: ''}); }
        } else {
            this.setState({btnNine_thirty: 'indigo'});
        }

        const btnTen = this.state.btnTen;
        if(selectedBtn == '10:00') {
            if(btnTen == 'indigo') {
                this.setState({btnTen: 'primary', time: selectedBtn});
                } else { this.setState({btnTen: 'indigo', time: ''}); }
        } else {
            this.setState({btnTen: 'indigo'});
        }

        const btnTen_thirty = this.state.btnTen_thirty;
        if(selectedBtn == '10:30') {
            if(btnTen_thirty == 'indigo') {
                this.setState({btnTen_thirty: 'primary', time: selectedBtn});
                } else { this.setState({btnTen_thirty: 'indigo', time: ''}); }
        } else {
            this.setState({btnTen_thirty: 'indigo'});
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
    }

    handleBtnTest(event) {
        const test = this.props.branches.map( (branch) => { return branch.name})
        console.log(test);
    }

    branchNames() {
        let selectArray = [];
        let x;
        this.props.branch_names.forEach(function(branch) {
            selectArray.push({value: branch._id, label: branch.name});
        });
        return selectArray;
    }

    render() {
        const date = this.state.date;
        const defaultDateFormat = this.state.defaultDateFormat;

        const branch = this.state.branch;

        const btnFour = this.state.btnFour;
        const btnFive = this.state.btnFive;
        const btnSix = this.state.btnSix;
        const btnSeven = this.state.btnSeven;
        const btnEight = this.state.btnEight;
        const btnNine = this.state.btnNine;
        const btnTen = this.state.btnTen;
        const btnFour_thirty = this.state.btnFour_thirty;
        const btnFive_thirty = this.state.btnFive_thirty;
        const btnSix_thirty = this.state.btnSix_thirty;
        const btnSeven_thirty = this.state.btnSeven_thirty;
        const btnEight_thirty = this.state.btnEight_thirty;
        const btnNine_thirty = this.state.btnNine_thirty;
        const btnTen_thirty = this.state.btnTen_thirty;

        return (
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
                    <MDBRow center>
                            <MDBDropdown>
                                <MDBDropdownToggle caret color="primary">
                                    Select Restaurant Location...
                                </MDBDropdownToggle>
                                <MDBDropdownMenu right basic>
                                    <MDBDropdownItem> </MDBDropdownItem>
                                    <MDBDropdownItem>Example Branch 1</MDBDropdownItem>
                                    <MDBDropdownItem>Example Branch 3</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>

                            <Select
                                value={branch}
                                onChange={this.handleBranch}
                                options={
                                    this.branchNames()
                                }
                            />
                            
                    </MDBRow>
                    <MDBRow center>
                        <MDBCol sm="4" md="4" lg="4"><MDBInput type="number" label="Number of Guests" size="lg" hint="0" onChange={this.handleGuestNum} /></MDBCol>
                        {/* Flatpickr code START */}
                        {/*May include ability for Owner to disable certain dates (holidays)*/}
                        <MDBCol sm="4" md="4" lg="4" ><div className="md-form" > {/* this div changes the input field to the mdb input field */}
                        <Flatpickr
                            className="form-control-lg" //sets input field font size to lg
                            value={date}
                            onChange={date => {
                            this.setState({ date: date }); // return this.state.date for the selected Date String
                            console.log(date);  
                            }}
                            onOpen={() => {
                                this.setState({ defaultDateFormat: "F j, Y" });
                            }}  
                            onClose={() => {
                                // Bug Fix: If backspace is used when input field is selected input field is blank
                                if (date.length==0) {
                                    this.setState({ defaultDateFormat: "\\Se\\lect \\Date..." });
                                    this.setState({ date: Date() }) //resets date to Date() -> returns todays date
                                }
                            }}
                            options={{
                                altInput: true, // altInput is teh human friendly format (April 22, 2020)
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
                                <MDBTypography className="table-heading" tag="h5" >Time:</MDBTypography>
                                <table className="time-selector">
                                    <tbody>
                                        <tr>
                                            <td><MDBBtn id='4:00' color={btnFour} onClick={this.handleBtnSelect} disabled>4:00</MDBBtn></td>
                                            <td><MDBBtn id='5:00' color={btnFive} onClick={this.handleBtnSelect}>5:00</MDBBtn></td>
                                            <td><MDBBtn id='6:00' color={btnSix} onClick={this.handleBtnSelect}>6:00</MDBBtn></td>
                                            <td><MDBBtn id='7:00' color={btnSeven} onClick={this.handleBtnSelect}>7:00</MDBBtn></td>
                                            <td><MDBBtn id='8:00' color={btnEight} onClick={this.handleBtnSelect}>8:00</MDBBtn></td>
                                            <td><MDBBtn id='9:00' color={btnNine} onClick={this.handleBtnSelect}>9:00</MDBBtn></td>
                                            <td><MDBBtn id='10:00' color={btnTen} onClick={this.handleBtnSelect}>10:00</MDBBtn></td>
                                        </tr>
                                        <tr>
                                            <td><MDBBtn id='4:30' color={btnFour_thirty} onClick={this.handleBtnSelect}>4:30</MDBBtn></td>
                                            <td><MDBBtn id='5:30' color={btnFive_thirty} onClick={this.handleBtnSelect}>5:30</MDBBtn></td>
                                            <td><MDBBtn id='6:30' color={btnSix_thirty} onClick={this.handleBtnSelect}>6:30</MDBBtn></td>
                                            <td><MDBBtn id='7:30' color={btnSeven_thirty} onClick={this.handleBtnSelect}>7:30</MDBBtn></td>
                                            <td><MDBBtn id='8:30' color={btnEight_thirty} onClick={this.handleBtnSelect}>8:30</MDBBtn></td>
                                            <td><MDBBtn id='9:30' color={btnNine_thirty} onClick={this.handleBtnSelect}>9:30</MDBBtn></td>
                                            <td><MDBBtn id='10:30' color={btnTen_thirty} onClick={this.handleBtnSelect}>10:30</MDBBtn></td>
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