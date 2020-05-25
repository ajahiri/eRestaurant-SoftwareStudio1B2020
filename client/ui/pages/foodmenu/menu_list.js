//librares
import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardGroup,
  MDBIcon,
  MDBCollapse,
  MDBCollapseHeader,
} from "mdbreact";
import MenuItem from "../../components/menuItem";
import { MenuCategory } from "../../../../imports/collections/MenuCategory";
import {withTracker} from 'meteor/react-meteor-data';

//component
class MenuList extends React.Component {


  renderMenu() {
    return this.props.wholemenu.map(menulist => {
      console.log(menulist);
      return (
        <>
          <h3 className="h1-responsive font-weight-bold text-center my-5">
            {menulist.category}
          </h3> 
          <MenuItem id={menulist.category} category={menulist.category} />
        </>
        
        );
    });
};

  render() {
    return (
      <div>
        {/*Fisrt Group of food starts*/}
        
          {this.renderMenu()}

      </div>
    );
  }
}

export default withTracker(() => {
  //Taken from https://guide.meteor.com/react.html#data
  Meteor.subscribe("menucategory");
  console.log(MenuCategory.find().fetch());
  return {
    wholemenu: MenuCategory.find().fetch(), //{ category: "arabian" }
  };
})(MenuList);

// export default MenuList;
