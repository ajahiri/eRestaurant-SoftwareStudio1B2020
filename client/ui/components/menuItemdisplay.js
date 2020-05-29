//librares
import React, { Component } from "react";
import {
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
} from "mdbreact";
import { Menu } from "../../../imports/collections/Menu";
import {withTracker} from 'meteor/react-meteor-data';

var currentcategory = "FR62qpdmvYNLFnT6B";
var length = 0;

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {category: "arabian"};
    // console.log("props.category");
    // console.log(props.category);
  }

  renderRows() {
    currentcategory = this.props.category;
    //   console.log(this.props.wholemenu);
    var filtered = this.props.wholemenu.filter(function (item) {
        return item.category == currentcategory;
      });
    length = filtered.length;
    return filtered.map((menu) => {
      return (
       
        <MDBCol id={menu.title} className="mb-2 d-flex col-md-4">
        <MDBCard className="hoverable">
          <MDBCardImage className="img-fluid" src={menu.image} />
          <MDBCardBody>
            <MDBCardTitle>{menu.title}</MDBCardTitle>
            <MDBContainer>
              <MDBRow>
                <MDBCardText>
                  <strong className="font-weight-bold">Ingredients: </strong>
                  {menu.ingrediants}
                </MDBCardText>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCardText>
                  <span>
                    {" "}
                    <strong className="font-weight-bold">Cost: </strong>
                    {menu.cost}
                  </span>
                </MDBCardText>
              </MDBRow>
            </MDBContainer>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      );
    });
  }

  /*
   * Note: Need to work on getting list of staff belonging to every branch.
   * */
  render() {
    return(

        <section id={this.props.wholemenu._id} className="my-5">
            <MDBCardGroup>
                {this.renderRows()}
            </MDBCardGroup>
        </section>
    );
  }
}

export default withTracker(() => {
  //Taken from https://guide.meteor.com/react.html#data
  Meteor.subscribe("menu");
  return {
    wholemenu: Menu.find().fetch(), //{ category: "arabian" }
  };
})(MenuItem);