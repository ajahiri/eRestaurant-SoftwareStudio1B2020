// libraries
import React from 'react';
import {
    MDBContainer, MDBRow, MDBCol, MDBBtn, MDBView,
    MDBMask, MDBCard, MDBCardBody, MDBCardGroup, MDBCardImage, MDBCardTitle, MDBCardText, MDBIcon,
} from "mdbreact";

import TopPost from './top_post_image';
import MenuList from './menu_list';
import AddMenuItem from './addMenuItem';

class MenuPage extends React.Component {
    render() {
        return (

            <div>
                <main role="main" className="inner cover">
                    <MDBContainer>
                        
                        <MDBCard>
                            <TopPost />
                            <br />
                            <MDBContainer>
                                <MenuList />
                                <AddMenuItem/>
                            </MDBContainer>
                        </MDBCard>
                        
                    </MDBContainer>
                </main>
            </div >

        );
    }
}

//export
export default MenuPage;
