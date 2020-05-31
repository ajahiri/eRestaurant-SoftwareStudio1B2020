//librares
import React, { Component } from "react";
import MenuItem from "../../components/menuItemdisplay";
import { MenuCategory } from "../../../../imports/collections/MenuCategory";
import {withTracker} from 'meteor/react-meteor-data';

class MenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {category: "arabian"};
    // console.log(props.category);
  }

  renderMenu() {
    return this.props.menucategories.map(categoryarr => {
      // console.log("categoryarr");
      // console.log(categoryarr);
      return (
        <>
          <h3 className="h1-responsive font-weight-bold text-center my-5">
            {categoryarr.category}
          </h3> 
          <MenuItem id={categoryarr._id} category={categoryarr._id} />
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
    menucategories: MenuCategory.find().fetch(), //{ category: "arabian" }
  };
})(MenuList);

// export default MenuList;