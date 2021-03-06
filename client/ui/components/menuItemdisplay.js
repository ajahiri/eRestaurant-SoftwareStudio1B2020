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
       
        <MDBCol key={menu.item_id} id={menu.title} className="d-flex p-3  col-sm-6 col-md-4">
          <MDBCard className="hoverable" style={{height: '40rem', width: '100%'}}>
              <MDBCardImage className="img-fluid" style={{height: '20rem', width: '100%'}} src={menu.image} />
            <MDBCardBody style={{height: '20rem'}}>
              <MDBCardTitle style={{height: '4rem'}}>{menu.title}</MDBCardTitle>
              <MDBContainer style={{height: '15rem'}}>
                <MDBRow className="overflow-hidden" style={{height: '10rem', width:'100%', display: 'block'}}>
                  <MDBCardText className="text-wrap  text-justify">
                    <strong className="text-dark">Ingredients: </strong>
                    {menu.ingrediants}
                  </MDBCardText>
                </MDBRow>
                <hr />
                <MDBRow style={{height: '5rem'}}>
                  <MDBCardText>
                    <span>
                      <strong className="text-dark">Cost: </strong>
                      <span class="text-success">${menu.cost}</span> 
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