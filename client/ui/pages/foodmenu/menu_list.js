//librares
import React, { Component } from "react";
import {
  MDBCol,
  MDBBtn,
  MDBTable, 
  MDBTableHead, 
  MDBTableBody,
  MDBContainer 
} from "mdbreact";
import MenuItem from "../../components/menuItem";
import { MenuCategory } from "../../../../imports/collections/MenuCategory";
import { withTracker } from 'meteor/react-meteor-data';

//component
class MenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: "arabian" };
    // console.log(props.category);
  }

  deleteItem(e) {
    const menuitem = e.currentTarget.getAttribute('menuitem');
    this.props.removeItem(menuitem);
  }


  renderMenuRows() {
    return this.props.itemArray.map(menuitem => {
      return (
        <tr key={menuitem.item_id}  >
           <td menuitem={menuitem.item_id} onClick={e => this.deleteItem(e)}><p className="text-danger">Remove</p></td>
          <td>{menuitem.title}</td>
          <td>{menuitem.cost}</td>
          <td>{menuitem.quantity}</td>
        </tr>
      );
    });

  };

  renderMenu() {
    return this.props.menucategories.map(menuitem => {
      // console.log("menuitem");
      // console.log(menuitem);

      return (
        <div key={menuitem._id}>
          <h3 className="h1-responsive font-weight-bold text-center my-5">
            {menuitem.category}
          </h3>
          <MenuItem id={menuitem.title} category={menuitem._id} add_Item={this.props.addItem} />
        </div>

      );
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBTable responsive striped>
          <MDBTableHead color="primary-color" textWhite>
            <tr>
              <th>Remove Item From Cart</th>
              <th>Title</th>
              <th>Cost</th>
              <th>quantity</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {this.renderMenuRows()}
          </MDBTableBody>
        </MDBTable>

        {this.renderMenu()}
        {/*<MDBBtn onClick={this.props.Test}>Test</MDBBtn>*/}
        {this.props.cartSize > 0 ?
          <MDBCol><MDBBtn color="indigo" size='lg' onClick={this.props.NextView}>Next</MDBBtn></MDBCol>
          :
          <MDBCol><MDBBtn color="indigo" size='lg' disabled >Next</MDBBtn></MDBCol>
        }
      </MDBContainer>
    );
  }
}

export default withTracker(() => {
  //Taken from https://guide.meteor.com/react.html#data
  Meteor.subscribe("menucategory");
  // console.log(MenuCategory.find().fetch());
  return {
    menucategories: MenuCategory.find().fetch(), //{ category: "arabian" }
  };
})(MenuList);

// export default MenuList;
