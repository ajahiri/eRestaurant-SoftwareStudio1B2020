import React from 'react';
import {withTracker} from "meteor/react-meteor-data";
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBTypography, MDBBtn,} from  "mdbreact";
import { Accounts } from 'meteor/accounts-base';


var namechanged = false, addresschanged = false, emailchanged = false, phonechanged = false, changepassword = false ;
class UserAcount extends React.Component {
    constructor(props) {
        super(props);
        //state
        this.state = {fullname: '', email: "",address: "", phone: "",oldpassword: "", newpassword: ""};
        //methods
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        }
        //s
        handleChange(event) 
        {
            const target = event.target;
            console.log(target.name);
            console.log(target.value);

            const value = target.name === 'abdul' ? target.checked : target.value;
            const name = target.name;

            this.setState({
                [name]: value
            });

            if(name == 'fullname')
                namechanged = true;
            if(name == 'phone')
                phonechanged = true;

        }
        
          handleSubmit(event) 
          {
            if(namechanged)
            {
                Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.name": this.state.fullname}});
                namechanged = false;
            }
            if(phonechanged)
            {
                Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.phone": this.state.phone}});
                phonechanged = false;
            }
            if(changepassword)
            {
                    Accounts.changePassword(oldPassword, newPassword, [callback])
                    changepassword = false;
            }
            
            event.preventDefault();
          }
          

          //this.setState({name: Meteor.user().profile.name});
          

    render() {
        if(Meteor.user())
            return ( 
            
    <MDBContainer>
        <form onSubmit={this.handleSubmit} >
            <MDBRow center>
            <MDBTypography tag="h2" className="page-heading" >Welcome to Account details User {Meteor.user().profile.name}</MDBTypography>
            </MDBRow>
            <MDBRow left>
            <MDBCol className="form-inline" sm="12">
                <MDBCol sm="6" md="3">
                    <span className="font-weight-bold"><strong className="badge badge-primary text-wrap ">Name:</strong> {Meteor.user().profile.name}</span>
                </MDBCol>
                <MDBCol sm="6" md="3">
                    <MDBInput label="Full Name" size="lg" name='fullname' type="text" onChange={this.handleChange} />
                </MDBCol>
                <MDBCol sm="6">
                    {namechanged ? <span>Change Fullname to {this.state.fullname}</span> : <span></span>}
                </MDBCol>       
            </MDBCol>
            </MDBRow>
            
            <MDBRow left>
                <MDBCol  className="form-inline" sm="12">
                    <MDBCol sm="6" md="3">
                    <span className="font-weight-bold"><strong className="badge badge-primary text-wrap ">Phone: </strong> {Meteor.user().profile.phone}</span>
                    </MDBCol>
                    <MDBCol sm="6" md="3">
                        <MDBInput label="PhoneNumber" size="lg" name='phone' type="number" onChange={this.handleChange} />
                    </MDBCol>
                    <MDBCol sm="6" md="3">
                        {phonechanged ? <span>Change Phone Number to {this.state.phone}</span> : <span></span>}
                    </MDBCol>
                </MDBCol>
            </MDBRow>
            <MDBRow left>
                <MDBCol  className="form-inline" sm="12">
                    <MDBCol sm="6" md="3">
                    <span className="font-weight-bold"><strong className="badge badge-primary text-wrap ">Phone: </strong> {Meteor.user().profile.phone}</span>
                    </MDBCol>
                    <MDBCol sm="6" md="3">
                        <MDBInput label="PhoneNumber" size="lg" name='phone' type="number" onChange={this.handleChange} />
                    </MDBCol>
                    <MDBCol sm="6" md="3">
                        {phonechanged ? <span>Change Phone Number to {this.state.phone}</span> : <span></span>}
                    </MDBCol>
                </MDBCol>
            </MDBRow>
            <MDBRow center>
                <MDBRow className='btn-confirm-padding'>
                        <MDBCol><MDBBtn onClick={this.handleSubmit}>Confirm Change</MDBBtn></MDBCol>
                    </MDBRow>
            </MDBRow>
        </form>
    </MDBContainer>
            
            );
        else
            return <div>hi</div>;
    }
};

export default withTracker(() => {
    return {
        currentUser: Meteor.user(),
        
    }
})(UserAcount);