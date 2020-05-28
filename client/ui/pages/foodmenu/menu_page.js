// libraries
import React from 'react';
import {
    MDBContainer, MDBRow, MDBCol, MDBBtn, MDBView,
    MDBMask, MDBCard, MDBCardBody, MDBCardGroup, MDBCardImage, MDBCardTitle, MDBCardText, MDBIcon,
} from "mdbreact";

import TopPost from './top_post_image';
import MenuList from './menu_list';
import AddMenuItem from './addMenuItem';
import ManageCategory from './manageCategory';
import {withTracker} from 'meteor/react-meteor-data';


class MenuPage extends React.Component {
    render() {
        if (this.props.user && this.props.role) 
        {
            return (

                <div>
                    <main role="main" className="inner cover">
                        <MDBContainer>

                            <MDBCard>
                                <TopPost />
                                <br />
                                <MDBContainer>
                                    <MenuList id="23456789"/>
                                    <AddMenuItem id="9876567876545678"/>
                                    <ManageCategory id="432179643121648329"/>
                                </MDBContainer>
                            </MDBCard>

                        </MDBContainer>
                    </main>
                </div >

            );
        }else {
            return (

                <div>
                    <main role="main" className="inner cover">
                        <MDBContainer>

                            <MDBCard>
                                <TopPost />
                                <br />
                                <MDBContainer>
                                    <MenuList id="923197321793219" />
                                </MDBContainer>
                            </MDBCard>

                        </MDBContainer>
                    </main>
                </div >

            );
        }
    }
}

//export
export default withTracker(() => {
    //Taken from https://guide.meteor.com/react.html#data
    Meteor.subscribe("menucategory");
    return {
        user: Meteor.user(),
        role: Roles.userIsInRole(Meteor.userId(), 'admin')
    };
  })(MenuPage);
