import React from 'react';
import { withTracker } from "meteor/react-meteor-data";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBTypography, MDBBtn,MDBTable,MDBTableHead,MDBTableBody, } from "mdbreact";
import { Menu } from "../../../../imports/collections/Menu";
import { MenuCategory } from "../../../../imports/collections/MenuCategory";

var titlechanged = false, categorychanged = false, costchanged = false, ingrediantschanged = false, imagechanged = false;


class AddMenuItem extends React.Component {
    constructor(props) {
        super(props);
        //state
        this.state = { title: "", number: 0, category: '', label: "Insert New Menu item", cost: "", image: "", ingrediants: "" };
        //methods

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    renderCategories() {
        return this.props.menucategories.map((category) => {
            return (
                <option value={category._id} >{category.category}</option>
            );
        });

    }

    deleteItem(e){
        const menuitem = e.currentTarget.getAttribute('menuitem');
        const categoryitem = e.currentTarget.getAttribute('categoryitem');
        
        Meteor.call('menu.remove',
        menuitem,
        function(error) {
            if (error) {
                // this.setState({label: e.reason});
                console.log(error);
            } else {
                
                // this.setState({label: "success"});
                console.log("Successfully removed menu item");
            }
        }
        );

        var result = this.props.menucategories.find(obj => {
            return obj._id == categoryitem
        });
        Meteor.call('menucategory.updateplus',
        categoryitem,
        result.categoryitems -= 1,
        function (error) {
            if (error) {
                // this.setState({label: e.reason});
                console.log(error);
            } else {

                // this.setState({label: "success"});
                console.log("Successfully Updated category quantity");
            }
        }
    );
    }

    updateitem(e){
        const menuitemid = e.currentTarget.getAttribute('menuitem');
        const categoryitem = e.currentTarget.getAttribute('categoryitem');


        var menuitem = this.props.wholemenu.find(obj => {
            return obj._id == menuitemid
        });
        
        console.log("update");
        console.log(menuitem.title);

        this.setState({
            title: menuitem.title,
            category: menuitem.category,
            cost: menuitem.cost,
            image: menuitem.image,
            ingrediants: menuitem.ingrediants,
        });
        titlechanged = true;
        categorychanged = true;
        costchanged = true;
        imagechanged = true;
        ingrediantschanged = true;

        Meteor.call('menu.remove',
        menuitemid,
        function(error) {
            if (error) {
                // this.setState({label: e.reason});
                console.log(error);
            } else {
                
                // this.setState({label: "success"});
                console.log("Successfully removed menu item");
            }
        }
        );

        var result = this.props.menucategories.find(obj => {
            return obj._id == categoryitem
        });
        Meteor.call('menucategory.updateplus',
        categoryitem,
        result.categoryitems -= 1,
        function (error) {
            if (error) {
                // this.setState({label: e.reason});
                console.log(error);
            } else {

                // this.setState({label: "success"});
                console.log("Successfully Updated category quantity");
            }
        }
        );
    }


    handleChange(event) {
        const target = event.target;
        // console.log(target.name);
        // console.log(target.value);

        const value = target.name === 'WhiteOne' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        if (name == 'title')
            titlechanged = true;
        if (name == 'category') {
            categorychanged = true;
            // this.setState({
            //     [number]: value
            // });
        }
        if (name == 'cost')
            costchanged = true;
        if (name == 'ingrediants')
            ingrediantschanged = true;
        if (name == 'image')
            imagechanged = true;
    }

    renderMenuRows() {
        return this.props.wholemenu.map(menuitem => 
        {
            var result = this.props.menucategories.find( obj => {
                return obj._id == menuitem.category
              });
            if (typeof result !== 'undefined') {
                return (
                    <tr key={menuitem._id}  >
                        <td categoryitem={menuitem.category} menuitem={menuitem._id} onClick={e => this.deleteItem(e)}><p class="text-danger">Delete Item</p></td>
                        <td categoryitem={menuitem.category} menuitem={menuitem._id} onClick={e => this.updateitem(e)}><p class="text-primary">Update Item</p></td>
                        <td>{menuitem.title}</td>
                        <td>{menuitem.cost}</td>
                        <td>{result.category}</td>
                    </tr>
                );
            }else{
                return (
                        null
                );
            }

        });
    };

    handleSubmit(event) {
        // console.log("menucategories");
        // console.log(this.props.menucategories);
        if (Meteor.user() && Roles.userIsInRole(Meteor.userId(), 'admin')) {
            if (titlechanged) {
                if (categorychanged) {
                    var result = this.props.menucategories.find(obj => {
                        return obj._id == this.state.category
                    });
                    //   console.log("result");
                    //   console.log(result.categoryitems);
                    if (ingrediantschanged) {
                        if (costchanged && this.state.cost > 0) {
                            Meteor.call('menu.insert',
                                this.state.category,
                                this.state.cost,
                                this.state.title,
                                this.state.image,
                                this.state.ingrediants,
                                function (error) {
                                    if (error) {
                                        // this.setState({label: e.reason});
                                        console.log(error);
                                    } else {

                                        // this.setState({label: "success"});
                                        console.log("Successfully added branch");
                                    }
                                }
                            );

                            Meteor.call('menucategory.updateplus',
                                this.state.category,
                                result.categoryitems += 1,
                                function (error) {
                                    if (error) {
                                        // this.setState({label: e.reason});
                                        console.log(error);
                                    } else {

                                        // this.setState({label: "success"});
                                        console.log("Successfully added category");
                                    }
                                }
                            );

                            this.setState({ label: "Success" });
                        } else {
                            this.setState({ label: "Please check cost field" });
                        }

                    } else {
                        this.setState({ label: "Please enter ingrediants list" });
                    }
                } else {
                    this.setState({ label: "Please Select a category" });
                }

            } else {
                this.setState({ label: "Please Enter a valid Title" });
            }

        } else {
            this.setState({ label: "User Must Be logged in and Must Be Admin" });
        }
        event.preventDefault();
    }



    //this.setState({name: Meteor.user().profile.name});


    render() {

        return (

            <MDBContainer>
                <form onSubmit={this.handleSubmit} >
                    <hr />
                    <MDBRow center>
                        <MDBTypography tag="h2" className="page-heading" >Insert New Menu Item</MDBTypography>
                    </MDBRow>


                    {/* Input fields bellow */}

                    <MDBRow left>
                        <MDBCol className="form-inline" sm="12">
                            <MDBCol sm="6" md="3">
                                <span style={{ fontSize: 'xxx-large' }} className="font-weight-bold"><strong className="badge badge-primary text-wrap ">Item Title: </strong></span>
                            </MDBCol>
                            <MDBCol sm="6" md="3">
                                <MDBInput label="New Title" size="lg" value={this.state.title} name='title' type="text" onChange={this.handleChange} />
                            </MDBCol>
                            <MDBCol sm="6">
                                {titlechanged ? <span>selected Title Is {this.state.title}</span> : <span></span>}
                            </MDBCol>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow left>
                        <MDBCol className="form-inline" sm="12">
                            <MDBCol sm="6" md="3">
                                <span style={{ fontSize: 'xx-large' }} className="font-weight-bold"><strong className="badge badge-primary text-wrap ">Menu Item Cost: </strong></span>
                            </MDBCol>
                            <MDBCol sm="6" md="3">
                                <MDBInput label="Dish Cost" size="lg" name='cost' value={this.state.cost} type="number" onChange={this.handleChange} />
                            </MDBCol>
                            <MDBCol sm="6">
                                {costchanged ? <span>Total Cost is {this.state.cost}</span> : <span></span>}
                            </MDBCol>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow left>
                        <MDBCol className="form-inline" sm="12">
                            <MDBCol sm="6" md="3">
                                <span style={{ fontSize: 'xxx-large' }} className="font-weight-bold"><strong className="badge badge-primary text-wrap ">Ingrediants: </strong></span>
                            </MDBCol>
                            <MDBCol sm="6" md="6">
                                <div class="form-group purple-border ">
                                    <textarea placeholder="Ingrediants" name='ingrediants' value={this.state.ingrediants} class="purple-border md-textarea form-control exampleFormControlTextarea4" onChange={this.handleChange} rows="4" cols="50" ></textarea>
                                </div>
                            </MDBCol>
                            {/* <MDBCol sm="6">
                    {ingrediantschanged ? <span>New title Is {this.state.ingrediants}</span> : <span></span>}
                </MDBCol> */}
                        </MDBCol>
                    </MDBRow>

                    <MDBRow left>
                        <MDBCol className="form-inline" sm="12">
                            <MDBCol sm="6" md="3">
                                <span style={{ fontSize: 'xxx-large' }} className="font-weight-bold"><strong className="badge badge-primary text-wrap ">Item image: </strong></span>
                            </MDBCol>
                            <MDBCol sm="6" md="3">
                            <MDBInput label="New image" size="lg" name='image' type="text" value={this.state.image} onChange={this.handleChange} />
                            </MDBCol>
                            <MDBCol sm="6">
                                {imagechanged ? <span>selected image Is {this.state.image}</span> : <span></span>}
                            </MDBCol>
                        </MDBCol>
                    </MDBRow>

                    <br />

                    <MDBRow left>
                        <MDBCol className="form-inline" sm="12">
                            <MDBCol sm="6" md="3">
                                <span style={{ fontSize: 'xx-large' }} className="font-weight-bold"><strong className="badge badge-primary text-wrap ">Select Category: </strong></span>
                            </MDBCol>
                            <MDBCol sm="6" md="3">
                                <select onChange={this.handleChange} name="category" size="lg" id="category" class="browser-default custom-select">
                                    <option selected>Choose Category</option>
                                    {this.renderCategories()}
                                </select>
                            </MDBCol>
                            {/* <MDBCol sm="6" md="3">
                    {categorychanged ? <span>New Category Is {this.state.category}</span> : <span></span>}
                </MDBCol> */}
                        </MDBCol>
                    </MDBRow>

                    <br />

                    <MDBRow center>
                        <MDBRow className='btn-confirm-padding'>
                            <MDBCol sm="6" md="12">
                                <div className="text-center">
                                    <MDBBtn color="primary" onClick={this.handleSubmit}>Confirm Change</MDBBtn>
                                    <br />
                                    <span className="badge badge-primary font-weight-bold text-wrap" style={{ fontSize: 'large' }}>{this.state.label}</span>
                                    <br />

                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBRow>
                    <hr />
                </form>

                <form>
                    <MDBTable responsive striped>
                        <MDBTableHead color="primary-color" textWhite>
                            <tr>
                                <th>Delete Item</th>
                                <th>Update Item</th>
                                <th>Title</th>
                                <th>Cost</th>
                                <th>Category</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {this.props.isReady ? this.renderMenuRows() : null}
                        </MDBTableBody>
                    </MDBTable>
                </form>

            </MDBContainer>

        );

    }
};

export default withTracker(() => {
      const sub1 = Meteor.subscribe("menu");
    const sub2 = Meteor.subscribe("menucategory");


    return {
        wholemenu: Menu.find().fetch(), //{ category: "arabian" }
        menucategories: MenuCategory.find().fetch(),
        isReady: Meteor.subscribe('menucategory').ready()
        
    };

})(AddMenuItem);