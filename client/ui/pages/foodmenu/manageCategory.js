import React from 'react';
import { withTracker } from "meteor/react-meteor-data";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBTypography, MDBBtn, } from "mdbreact";
import { MenuCategory } from "../../../../imports/collections/MenuCategory";

var categorychanged = false, categoryRemovechanged = false;


class ManageCategory extends React.Component {
    constructor(props) {
        super(props);
        //state
        this.state = { category: '' ,removecategory: '' ,label: "Insert New Category",removelabel: "Remove Category"};
        //methods

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemoveSubmit = this.handleRemoveSubmit.bind(this);
        

    }

    renderCategories() {
        return this.props.menucategories.map((category) => {
            return (
                <option value={category._id} >{category.category}</option>
            );
        });

    }


    handleChange(event) {
        const target = event.target;

        const value = target.name === 'WhiteOne' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        if (name == 'category')
            categorychanged = true;


        if (name == 'removecategory')
            categoryRemovechanged = true;
    }

    handleSubmit(event) {
        // console.log();
        if (Meteor.user() && Roles.userIsInRole(Meteor.userId(), 'admin')) {
            if (categorychanged) {
                Meteor.call('menucategory.insert',
                    this.state.category,
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
                this.setState({ label: "Please Select a category" });
            }

        } else {
            this.setState({ label: "User Must Be logged in and Must Be Admin" });
        }
        event.preventDefault();
    }

    handleRemoveSubmit(event) {
        // console.log();
        if (Meteor.user() && Roles.userIsInRole(Meteor.userId(), 'admin')) {
            if (categoryRemovechanged) {
                var result = this.props.menucategories.find(obj => {
                    return obj._id == this.state.removecategory
                  });
                //   console.log("result nummmm");
                //   console.log(result);
                if(result.categoryitems == 0)
                {

                Meteor.call('menucategory.remove',
                this.state.removecategory,
                function(error) {
                    if (error) {
                        // this.setState({label: e.reason});
                        console.log(error);
                    } else {
                        
                        // this.setState({label: "success"});
                        console.log("Successfully removed category");
                    }
                }
                );

                // MenuCategory.remove(this.state.removecategory);

                this.setState({ removelabel: "Successfuly removed" });
            }else{
                this.setState({ removelabel: "Please Remove all items from category before removing" });

            }

            } else {
                this.setState({ removelabel: "Please Select a category to remove" });
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
                <MDBContainer>
                    <form onSubmit={this.handleSubmit} >
                        {/* <hr /> */}
                        <MDBRow center>
                            <MDBTypography tag="h2" className="page-heading" >Insert New Category</MDBTypography>
                        </MDBRow>

                        <MDBRow left>
                            <MDBCol className="form-inline" sm="12">
                                <MDBCol sm="6" md="3">
                                    <span style={{ fontSize: 'x-large' }} className="font-weight-bold"><strong className="badge badge-primary text-wrap ">Add New Category: </strong></span>
                                </MDBCol>
                                <MDBCol sm="6" md="3">
                                    <MDBInput label="New Title" size="lg" name='category' type="text" onChange={this.handleChange} />
                                </MDBCol>
                                <MDBCol sm="6">
                                    {categorychanged ? <span>New Category Name Is {this.state.category}</span> : <span></span>}
                                </MDBCol>
                            </MDBCol>
                        </MDBRow>

                        <br />

                        <MDBRow center>
                            <MDBRow className='btn-confirm-padding'>
                                <MDBCol sm="6" md="12">
                                    <div className="text-center">
                                        <MDBBtn color="primary" onClick={this.handleSubmit}>Confirm Change</MDBBtn>
                                        <br />
                                        <span className="badge badge-info font-weight-bold text-wrap" style={{ fontSize: 'large' }}>{this.state.label}</span>
                                        <br />

                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBRow>
                    </form>
                </MDBContainer>
                <br/>
                <br/>
                <MDBContainer>

                    <form onSubmit={this.handleSubmit} >
                        {/* <hr /> */}
                        <MDBRow center>
                            <MDBTypography tag="h2" className="page-heading" >Category to remove</MDBTypography>
                        </MDBRow>

                        <MDBRow left>
                            <MDBCol className="form-inline" sm="12">
                                <MDBCol sm="6" md="3">
                                    <span style={{ fontSize: 'xx-large' }} className="font-weight-bold"><strong className="badge badge-primary text-wrap ">Select Category To remove: </strong></span>
                                </MDBCol>
                                <MDBCol sm="6" md="3">
                                    <select onChange={this.handleChange} name="removecategory" size="lg" id="removecategory" class="browser-default custom-select">
                                        <option selected>Choose Category</option>
                                        {this.renderCategories()}
                                    </select>
                                </MDBCol>
                                {/* <MDBCol sm="6" md="3">
                                    {categoryRemovechanged ? <span>Category to remove {this.state.removecategory}</span> : <span></span>}
                                </MDBCol> */}
                            </MDBCol>
                        </MDBRow>

                        <MDBRow center>
                            <MDBRow className='btn-confirm-padding'>
                                <MDBCol sm="6" md="12">
                                    <div className="text-center">
                                        <MDBBtn color="danger" onClick={this.handleRemoveSubmit}>Confirm Change</MDBBtn>
                                        <br />
                                        <span className="badge badge-danger font-weight-bold text-wrap" style={{ fontSize: 'large' }}>{this.state.removelabel}</span>
                                        <br />

                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBRow>

                        <hr />
                    </form>
                </MDBContainer>
            </MDBContainer>

        );

    }
};

export default withTracker(() => {
    //   const sub1 = Meteor.subscribe("menu");
    const sub2 = Meteor.subscribe("menucategory");


    return {
        // wholemenu: Menu.find().fetch(), //{ category: "arabian" }
        menucategories: MenuCategory.find().fetch()
    };

})(ManageCategory);