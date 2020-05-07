import React from 'react';
import {withTracker} from "meteor/react-meteor-data";
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBTypography, MDBBtn,} from  "mdbreact";
import { Accounts } from 'meteor/accounts-base';


var namechanged = false, phonechanged = false, changepassword = false ;
class UserAcount extends React.Component {
    constructor(props) {
        super(props);
        //state
        this.state = {fullname: '', passwordlabel: "Change Password Field Only if you want to update it", phone: "",oldpassword: "", newpassword: ""};
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

            const value = target.name === 'WhiteOne' ? target.checked : target.value;
            const name = target.name;

            this.setState({
                [name]: value
            });

            if(name == 'fullname')
                namechanged = true;
            if(name == 'phone')
                phonechanged = true;
            if(name == 'phone')
                phonechanged = true;

            if(name == "oldpassword")
            {
                changepassword = true;
            }

            // if(name == 'oldpassword' || name == 'newpassword')       
            // {
            //     if(this.state.oldpassword != this.state.newpassword)
            //     {
            //         if(this.state.newpassword != null && this.state.newpassword !="" && this.state.newpassword != " ")
            //         {
            //             let str = this.state.newpassword;
            //             if(str.length > 8)
            //             {
            //                 if(this.state.oldpassword != this.state.newpassword)
            //                 {
            //                     this.setState({
            //                         passwordlabel: ""
            //                     });
            //                     changepassword = true;
            //                 }else{
            //                     this.setState({
            //                         passwordlabel: "Please Choose Diffrent New Password as it matches with old one"
            //                     });
            //                 }
                            
            //             }else{
            //                 this.setState({
            //                     passwordlabel: "New Password must be more than 8 charachters"
            //                 });
            //             }
            //         }else{
            //             this.setState({
            //                 passwordlabel: "New Password is Empty"
            //             });
            //         }
            //     }else{
            //         if(this.state.oldpassword != null && this.state.oldpassword !="" && this.state.oldpassword != " ")
            //         {
            //             this.setState({
            //                 passwordlabel: "Please Choose Diffrent New Password as it matches with old one"
            //             });
            //         }else{
            //             this.setState({
            //                 passwordlabel: ""
            //             });
            //         }

            //     }
            // }

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
            console.log(changepassword);
            console.log(this.state.oldpassword);
            console.log(this.state.newpassword);
            if(changepassword)
            {
                Accounts.changePassword(this.state.oldpassword, this.state.newpassword,  (e) => {
                    if (e) {
                        console.log(e);
                        this.setState({passwordlabel: e.reason});
                    } else {
                        this.setState({passwordlabel: "success"});
                    }
                });
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
            <MDBTypography tag="h2" className="page-heading" >Welcome to Account details {Meteor.user().profile.name}</MDBTypography>
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
                    <MDBCol sm="6" md="4">
                    <span className="font-weight-bold" style={{fontSize: 'large'}}><strong className="badge badge-danger text-wrap ">Change Password:</strong></span>
                    </MDBCol>
                    <MDBCol  sm="6" md="4">
                        <MDBInput label="Old Password" size="lg" name='oldpassword' type="password" onChange={this.handleChange} />
                    </MDBCol>
                    <MDBCol  sm="6" md="4">
                        <MDBInput label="New Password" size="lg" name='newpassword' type="password" onChange={this.handleChange} />
                    </MDBCol>
                    <MDBCol center sm="6" md="12">
                        <span className="badge badge-danger text-capitalize font-weight-bold text-wrap" style={{fontSize: 'large'}}>{this.state.passwordlabel}</span>
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
        else{ 
            return( 
        <MDBCol center sm="6" md="12">
            <span className="badge badge-danger text-capitalize font-weight-bold text-wrap" style={{fontSize: 'xxx-large'}}>You Must Be Logged In TO View This Page</span>
        </MDBCol>
        );
        }
    }
};

export default withTracker(() => {
    return {
        currentUser: Meteor.user(),
        
    }
})(UserAcount);