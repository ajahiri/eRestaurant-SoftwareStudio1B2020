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

class MenuPage extends React.Component {
    render() {
        if (Meteor.user() && Roles.userIsInRole(Meteor.userId(), 'admin')) 
        {
            return (

                <div>
                    <main role="main" className="inner cover">
                        <MDBContainer>

                            <MDBCard>
                                <TopPost />
                                <br />
                                <MDBContainer>
                                    <MenuList />
                                    <AddMenuItem />
                                    <ManageCategory />
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
export default MenuPage;
