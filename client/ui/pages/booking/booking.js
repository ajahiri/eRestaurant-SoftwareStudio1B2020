import { Meteor } from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import React from "react";
import Select from 'react-select';
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBTooltip,} from  "mdbreact";
import Flatpickr from "react-flatpickr";
import { Bookings } from '../../../../imports/collections/Bookings.js';
import { Branches } from '../../../../imports/collections/Branches.js';
import "./custom-flatpickr-theme.css";
import '../../../main.scss';
import ModalMakeOrder from '../../components/modal_make_order.js';
import BookingSummary from '../../components/booking_summary.js';
import MenuList from '../foodmenu/menu_list.js';
import BookingOrderConfirm from '../../components/bookingOrder_confirm.js';
import BookingOrderSummary from '../../components/bookingOrder_summary.js';
import Invoice from '../../components/invoice.js';
import ReactToPrint from "react-to-print";
import PrintButton from "../../components/PrintButton";

/* NOTE: Using MDBTypography tag produces a warning in the browser consol. Does not affect functionality -> Warning: Received `false` for a non-boolean attribute `abbr`. */

class Booking extends React.Component {  
    constructor(props) {
        super(props);

        this.state = {
            activeView: 'Booking_Form', //other views are 'Booking_Summary', 'Menu', 'Order/Booking_Confirm', 'Order/Booking_Confirmed', 'Invoice/Order/Booking_Confirm'
            order_online: true,
            submittedBookingID: '',
            branchAddressNice: '',
            branchPhone: '',
            onlineOrder_Size: 0,

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
            disableGuestNum: true,
            disableBtnNext: true,
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
            branch: '',
            guestNum: 0,
            time: '',
            date: new Date(),
            specialRequest: '',
            onlineOrder: [],
            payNow: false,
            payed: false,
            // END Booking Details Attributes
            defaultDateFormat: "\\Se\\lect \\Date...", //Workaround: Used to display placeholder in date picker input field.
        };                                                    // altFormat is then set to the proper date format using the Flatpickr onOpen function.
        
        this.handleBtnSelect = this.handleBtnSelect.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleGuestNum = this.handleGuestNum.bind(this);
        this.handleSpecialRequest = this.handleSpecialRequest.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBranch = this.handleBranch.bind(this);
        this.branchNames = this.branchNames.bind(this);
        this.availabilityCheck = this.availabilityCheck.bind(this);
        this.enableDatePicker = this.enableDatePicker.bind(this);
        this.enableTimePicker = this.enableTimePicker.bind(this);
        this.disableTimePicker = this.disableTimePicker.bind(this);
        this.handleModal_Result = this.handleModal_Result.bind(this);
        this.handleBooking_Next = this.handleBooking_Next.bind(this);
        this.handleMenu_Next = this.handleMenu_Next.bind(this);
        this.handleConfirm_BookingOrder = this.handleConfirm_BookingOrder.bind(this);
        this.handleConfirmPayment = this.handleConfirmPayment.bind(this);
        this.addItemToBooking = this.addItemToBooking.bind(this);
//s
        this.removeItemFromBooking = this.removeItemFromBooking.bind(this);

        this.handle_orderNow = this.handle_orderNow.bind(this);
        this.handle_payNow = this.handle_payNow.bind(this);
        this.handlePayment = this.handlePayment.bind(this);


        this.handleBtnTest = this.handleBtnTest.bind(this);
    }
    async handleSubmit() {
        const {order_online, payNow, payed, branch, guestNum, time, specialRequest, onlineOrder} = this.state;
        const date = new Date(this.state.date); //state.date is array containing the date string. This line converts the array to a readable date string; eg: Fri May
        const dateNice = date.toDateString();
        this.setState({submittedBookingID: await Meteor.callPromise('bookings.insert', branch.value, this.props.user.profile.name, this.props.user.emails[0].address,
                this.props.user.profile.phone, guestNum, date, dateNice, time, specialRequest, onlineOrder, payNow, payed,
            function(error) {
                if (error) {
                    console.log(error);
                }
            }
        )});
        // this.setState({branchAddressNice: await Meteor.callPromise('getBranches.AddressNice', branch.value)});
        // this.setState({branchPhone: await Meteor.callPromise('getBranches.Phone', branch.value)});
        //console.log(order_online + ' ' + payed);
        if (order_online && payNow){    // finish user jounrey at Invoice with Order & Booking Summary
            //console.log('go to invoice')
            this.handleConfirmPayment();
        } else if (order_online && !payNow) { // finish user jounrey at Order & Booking Confirmed
            //console.log('go to menu')
            this.handleConfirm_BookingOrder();
        } else {    // finish user journey at Booking Summary        
            this.handleBooking_Next();
            //console.log('go to booking_summary')
        }
    }


 // START handleBtnSelect /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 handleBtnSelect(event) {
        const selectedBtn = event.target.id; // id of the button that was clicked

        const btnFour = this.state.btnFour;
        if(selectedBtn == '4:00') {
            if(btnFour == 'indigo') { //deselect: toggle between primary and indigo
                this.setState({btnFour: 'primary', time: selectedBtn, disableBtnNext: false}); //selected
                } else { this.setState({btnFour: 'indigo', time: '', disableBtnNext: true}); } //deselected
        } else {
            this.setState({btnFour: 'indigo'}); //change all non-selected btns to indigo
        }

        const btnFive = this.state.btnFive;
        if(selectedBtn == '5:00') {
            if(btnFive == 'indigo') {
            this.setState({btnFive: 'primary', time: selectedBtn, disableBtnNext: false});
            } else { this.setState({btnFive: 'indigo', time: '', disableBtnNext: true}); }
        } else {
            this.setState({btnFive: 'indigo'});
        }

        const btnSix = this.state.btnSix;
        if(selectedBtn == '6:00') {
            if(btnSix == 'indigo') {
                this.setState({btnSix: 'primary', time: selectedBtn, disableBtnNext: false});
                } else { this.setState({btnSix: 'indigo', time: '', disableBtnNext: true}); }
        } else {
            this.setState({btnSix: 'indigo'});
        }

        const btnSeven = this.state.btnSeven;
        if(selectedBtn == '7:00') {
            if(btnSeven == 'indigo') {
                this.setState({btnSeven: 'primary', time: selectedBtn, disableBtnNext: false});
                } else { this.setState({btnSeven: 'indigo', time: '', disableBtnNext: true}); }
        } else {
            this.setState({btnSeven: 'indigo'});
        }

        const btnEight = this.state.btnEight;
        if(selectedBtn == '8:00') {
            if(btnEight == 'indigo') {
                this.setState({btnEight: 'primary', time: selectedBtn, disableBtnNext: false});
                } else { this.setState({btnEight: 'indigo', time: '', disableBtnNext: true}); }
        } else {
            this.setState({btnEight: 'indigo'});
        }

        const btnNine = this.state.btnNine;
        if(selectedBtn == '9:00') {
            if(btnNine == 'indigo') {
                this.setState({btnNine: 'primary', time: selectedBtn, disableBtnNext: false});
                } else { this.setState({btnNine: 'indigo', time: '', disableBtnNext: true}); }
        } else {
            this.setState({btnNine: 'indigo'});
        }

        const btnTen = this.state.btnTen;
        if(selectedBtn == '10:00') {
            if(btnTen == 'indigo') {
                this.setState({btnTen: 'primary', time: selectedBtn, disableBtnNext: false});
                } else { this.setState({btnTen: 'indigo', time: '', disableBtnNext: true}); }
        } else {
            this.setState({btnTen: 'indigo'});
        }
    }
    // END handleBtnSelect /////////////////////////////////////////////////////////////////////////////////////////
    
    handleDateChange(date){
        this.setState({ date: date, disableGuestNum: false});
    }

    handleGuestNum(event) {
        this.setState({guestNum: Number(event.target.value)});
    }

    handleSpecialRequest(event) {
        this.setState({specialRequest: event.target.value});
    }

    async handleBranch(branch) {
        this.setState({branch});
        this.setState({branchAddressNice: await Meteor.callPromise('getBranches.AddressNice', branch.value)});
        this.setState({branchPhone: await Meteor.callPromise('getBranches.Phone', branch.value)});
    }

    branchNames() { //builds an array of each branch name and id to be passed to the Selector component
        let selectArray = [];
        this.props.branch_names.forEach(function(branch) {
            selectArray.push({value: branch._id, label: branch.name});
        });
        return selectArray;
    }

    enableDatePicker() {
        this.setState({disableDate: 'md-form'});
    }

    enableTimePicker(){
        if (this.state.guestNum > 0) {
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

    disableTimePicker(){
        this.setState({
            disableFour: true,
            disableFive: true,
            disableSix: true,
            disableSeven: true,
            disableEight: true,
            disableNine: true,
            disableTen: true,
        })
    }

    async availabilityCheck(date, branch, guestNum) {
        if (this.state.defaultDateFormat != '\\Se\\lect \\Date...' && guestNum > 0) {
            let unavailable_times = await Meteor.callPromise('date_time_branch.check', date, branch, guestNum,
                function(error) {
                    if (error) {
                        console.log(error);
                    }
                }
            );
            this.enableTimePicker();
            if (unavailable_times.length > 0) {
                unavailable_times.map((time) => {
                    if (time == "4:00") {
                        this.setState({disableFour: true})
                    }
                    if (time == "5:00") {
                        this.setState({disableFive: true})
                    }
                    if (time == "6:00") {
                        this.setState({disableSix: true})
                    }
                    if (time == "7:00") {
                        this.setState({disableSeven: true})
                    }
                    if (time == "8:00") {
                        this.setState({disableEight: true})
                    }
                    if (time == "9:00") {
                        this.setState({disableNine: true})
                    }
                    if (time == "10:00") {
                        this.setState({disableTen: true})
                    }
                    if (time == "All Times") {
                        this.disableTimePicker();
                    }
                });
            }
        } else {
            this.disableTimePicker();
        }
    }

    handleModal_Result(result) {
        this.setState({order_online: result});
    }

    handleBooking_Next() {
        if (this.state.order_online) {
            this.setState({activeView: 'Menu'});
        } else {
            this.setState({activeView: 'Booking_Summary'});
        }
    }
    handleMenu_Next() {
        if (this.state.onlineOrder_Size > 0) {
            this.setState({activeView: 'Order/Booking_Confirm'});
        }
    }
    handleConfirm_BookingOrder(){
        this.setState({activeView: 'Order/Booking_Summary'});
    }
    handleConfirmPayment() {
        this.setState({activeView: 'Invoice/Order/Booking_Confirm'})
    }

    addItemToBooking(item) {
        let newArray = this.state.onlineOrder;

        var result = newArray.find(obj => {
            return obj.item_id == item._id;
        });

        if(typeof result == 'undefined')
        {
            newArray.push({item_id: item._id, cost: item.cost, title: item.title, quantity: 1});
            this.setState({onlineOrder: newArray, onlineOrder_Size: newArray.length});
        } else{
            result.quantity += 1;
            this.setState({onlineOrder: newArray, onlineOrder_Size: newArray.length});
        }
    }

    removeItemFromBooking(itemID) 
    {
        // let newArray = this.state.onlineOrder;
        // var filteredArray = newArray.filter(x => {
        //     return x.item_id != itemID;
        // })

        // this.setState({onlineOrder: filteredArray, onlineOrder_Size: filteredArray.length});

//jj
        let newArray = this.state.onlineOrder;

        var result = newArray.find(obj => {
            return obj.item_id == itemID;
        });

        if(result.quantity == 1)
        {
            var filteredArray = newArray.filter(x => {
                return x.item_id != itemID;
            })
            this.setState({onlineOrder: filteredArray, onlineOrder_Size: filteredArray.length});
        } else{
            result.quantity -= 1;
            this.setState({onlineOrder: newArray, onlineOrder_Size: newArray.length});
        }
    }

    handle_orderNow() {
        this.setState({order_online: !this.state.order_online})
    }

    handle_payNow() {
        this.setState({payNow: !this.state.payNow})
    }

    handlePayment () {
        this.setState({payed: true}); //this.findRoutes waits for the state change before continuing.
        this.handleSubmit();
    }

    handleBtnTest(event) {
        console.log("disableFour: " + this.state.disableFour);
    }

    render() {
        const {
            activeView,
            date, defaultDateFormat,
            time,
            branch, guestNum,
            disableGuestNum, disableBtnNext,
            btnFour, btnFive, btnSix, btnSeven, btnEight, btnNine, btnTen,
            disableFour, disableFive, disableSix, disableSeven, disableEight, disableNine, disableTen,
            order_online,
        } = this.state;

        if (!this.props.userID) {
            return (
                <MDBCol center sm="6" md="12">
                    <span className="badge badge-danger text-capitalize font-weight-bold text-wrap"
                          style={{fontSize: 'xxx-large'}}>
                        You must be logged in to make a booking.
                    </span>
                </MDBCol>
            );
        } else if (!this.props.isReady || !this.props.user) {
            return (
                <MDBContainer>
                    <MDBRow>
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </MDBRow>
                </MDBContainer>
            );
        } else if (activeView == 'Booking_Form') {
            return (
                /////////////////////////////////////////////////// **Booking_Form START** ////////////////////////////////////
                <div>
                    {/* <ModalMakeOrder Modal_Result={this.handleModal_Result}/> */}
                    <MDBContainer>
                        <MDBRow>
                            <h2>Make a Booking</h2>
                        </MDBRow>
                        <MDBRow center>
                            <MDBCol sm="8"><MDBInput label="Full Name" size="lg" value={this.props.user.profile.name} name='fullName' disabled /> </MDBCol>
                        </MDBRow>
                        <MDBRow center>
                            <MDBCol sm="4" md="4" lg="4"><MDBInput label="Email" size="lg" value={this.props.user.emails[0].address} disabled /> </MDBCol>
                            <MDBCol sm="4" md="4" lg="4"><MDBInput label="Phone" size="lg" value={this.props.user.profile.phone} disabled /> </MDBCol>
                        </MDBRow>
                        <MDBRow center >
                            <MDBCol sm="8" md="8" lg="8">
                                <h6>Location:</h6>
                                <Select
                                    className="branch-selector"
                                    placeholder="Select Location..."
                                    value={branch}
                                    onChange={(branch) => {
                                        this.handleBranch(branch);
                                        this.enableDatePicker();
                                        this.availabilityCheck(new Date(date).toDateString(), branch.value, guestNum)
                                    }}
                                    options={
                                        this.branchNames()
                                    }
                                />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow center>
                            {/* Flatpickr code START */}
                            {/*May include ability for Owner to disable certain dates (holidays)*/}
                            <MDBCol sm="4" md="4" lg="4" ><div className={this.state.disableDate} > {/* this div changes the input field to the mdb input field */}
                                <Flatpickr
                                    className="form-control-lg" //sets input field font size to lg
                                    value={date}
                                    onChange={date => {
                                        this.handleDateChange(date);
                                        this.availabilityCheck(new Date(date).toDateString(), branch.value, guestNum);
                                    }}
                                    onOpen={() => {
                                        this.setState({ defaultDateFormat: "F j, Y", disableGuestNum: false});
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
                            <MDBCol sm="4" md="4" lg="4">
                                <MDBInput type="number" label="Number of Guests" size="lg" hint="0" disabled={disableGuestNum.valueOf()}
                                            onChange={ () => {
                                                this.handleGuestNum(event);
                                                this.availabilityCheck(new Date(date).toDateString(), branch.value, Number(event.target.value) /*guestNum*/);
                                            }} />
                            </MDBCol>
                        </MDBRow>
                        <MDBContainer>
                            <MDBRow center>
                                <MDBCol sm="8" md="8" lg="8">
                                    <h5>Time:</h5>
                                    <table className="time-selector">
                                        <tbody>
                                        <tr>
                                            <td><MDBBtn id='4:00' color={btnFour} onClick={this.handleBtnSelect} disabled={disableFour.valueOf()} >4:00</MDBBtn></td>
                                            <td><MDBBtn id='5:00' color={btnFive} onClick={this.handleBtnSelect} disabled={disableFive.valueOf()}>5:00</MDBBtn></td>
                                            <td><MDBBtn id='6:00' color={btnSix} onClick={this.handleBtnSelect} disabled={disableSix.valueOf()}>6:00</MDBBtn></td>
                                            <td><MDBBtn id='7:00' color={btnSeven} onClick={this.handleBtnSelect} disabled={disableSeven.valueOf()}>7:00</MDBBtn></td>
                                            <td><MDBBtn id='8:00' color={btnEight} onClick={this.handleBtnSelect} disabled={disableEight.valueOf()}>8:00</MDBBtn></td>
                                            <td><MDBBtn id='9:00' color={btnNine} onClick={this.handleBtnSelect} disabled={disableNine.valueOf()}>9:00</MDBBtn></td>
                                            <td><MDBBtn id='10:00' color={btnTen} onClick={this.handleBtnSelect} disabled={disableTen.valueOf()}>10:00</MDBBtn></td>
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
                        <MDBRow>
                            <MDBCol className="text-left">
                                <div>
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            id="defaultChecked"
                                            type="checkbox"
                                            className = 'custome-control-input'
                                            onChange={this.handle_orderNow}
                                            defaultChecked
                                        />
                                        <MDBTooltip
                                            domElement
                                            placement="top"
                                            tag="label"
                                        >
                                            <strong className='bold' htmlFor="defaultChecked"> &nbsp; Order Now!</strong>
                                            <label>Order you Meal's now so they are ready when you arrive!</label>
                                        </MDBTooltip>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <hr/>
                        <MDBRow className='btn-confirm-padding'>
                            {order_online ?
                                <MDBCol><MDBBtn color="indigo" onClick={this.handleBooking_Next} disabled={disableBtnNext.valueOf()} >Next</MDBBtn></MDBCol>
                                :
                                <MDBCol><MDBBtn color="indigo" onClick={this.handleSubmit} disabled={disableBtnNext.valueOf()} >Confirm Booking</MDBBtn></MDBCol>
                            }
                            {/* <MDBCol><MDBBtn onClick={this.handleBtnTest}>Test</MDBBtn></MDBCol> */}
                        </MDBRow>
                    </MDBContainer>
                </div>
            /////////////////////////////////////////////////// **Booking_Form END** ////////////////////////////////////
            );
        } else if (activeView == 'Booking_Summary') {
            return (
                <>
                <BookingSummary
                        bookingID = {this.state.submittedBookingID}
                        guests = {guestNum}
                        date = {new Date(date).toDateString()}
                        time = {time}
                        fullName = {this.props.user.profile.name}
                        branchName = {branch.label}
                        branchAddressNice = {this.state.branchAddressNice}
                        branchPhone = {this.state.branchPhone}
                        ref={el => (this.summaryRef = el)}
                />
                <div className="container">
                    <ReactToPrint
                        trigger={() => {
                            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                            // to the root node of the returned component as it will be overwritten.
                            return <a href="#"><PrintButton context="Summary" /></a>;
                        }}
                        content={() => this.summaryRef}
                    />
                </div>
                </>
            );
        } else if (activeView == 'Menu') {
            return (
                <MenuList 
                        addItem = {this.addItemToBooking}
                        Test = {this.handleBtnTest}
                        cartSize = {this.state.onlineOrder_Size}
                        NextView = {this.handleMenu_Next}
                        itemArray = {this.state.onlineOrder}
                        removeItem = {this.removeItemFromBooking} 
    /> 
            );
        } else if (activeView == 'Order/Booking_Confirm') {
            return (
                <BookingOrderConfirm 
                    Cart = {this.state.onlineOrder}
                    payNow = {this.state.payNow}
                    handle_payNow = {this.handle_payNow}
                    handle_Submit = {this.handleSubmit}
                    handlePayment = {this.handlePayment}
                    bookingID = {this.state.submittedBookingID}
                    guests = {guestNum}
                    date = {new Date(date).toDateString()}
                    time = {time}
                    fullName = {this.props.user.profile.name}
                    branchName = {branch.label}
                    branchAddressNice = {this.state.branchAddressNice}
                    branchPhone = {this.state.branchPhone}
                />
            );
        } else if (activeView == 'Order/Booking_Summary') { 
            return (
                <>
                <BookingOrderSummary
                    Cart = {this.state.onlineOrder}
                    bookingID = {this.state.submittedBookingID}
                    guests = {guestNum}
                    date = {new Date(date).toDateString()}
                    time = {time}
                    fullName = {this.props.user.profile.name}
                    branchName = {branch.label}
                    branchAddressNice = {this.state.branchAddressNice}
                    branchPhone = {this.state.branchPhone}
                    ref={el => (this.orderSummaryRef = el)}
                />
                <div className="container">
                    <ReactToPrint
                        trigger={() => {
                            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                            // to the root node of the returned component as it will be overwritten.
                            return <a href="#"><PrintButton context="Summary" /></a>;
                        }}
                        content={() => this.orderSummaryRef}
                    />
                </div>
                </>
            );
        } else if (activeView == 'Invoice/Order/Booking_Confirm') {
            return (
                <>
                <Invoice
                    Cart = {this.state.onlineOrder}
                    bookingID = {this.state.submittedBookingID}
                    guests = {guestNum}
                    date = {new Date(date).toDateString()}
                    time = {time}
                    fullName = {this.props.user.profile.name}
                    branchName = {branch.label}
                    branchAddressNice = {this.state.branchAddressNice}
                    branchPhone = {this.state.branchPhone}
                    ref={el => (this.invoiceRef = el)}
                />
                <div className="container">
                    <ReactToPrint
                        trigger={() => {
                            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                            // to the root node of the returned component as it will be overwritten.
                            return <a href="#"><PrintButton context="Invoice" /></a>;
                        }}
                        content={() => this.invoiceRef}
                    />
                </div>
                </>
            );
        }
    }
}

export default withTracker(() => {
    Meteor.subscribe('branch_names');
    return {
        branch_names: Branches.find().fetch(),
        user: Meteor.user(),
        isReady: Meteor.subscribe('branch_names').ready(),
        userID: Meteor.userId(),
    }
})(Booking);