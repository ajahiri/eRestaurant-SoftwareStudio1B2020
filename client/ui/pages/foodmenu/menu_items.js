//librares
import React, { Component} from 'react';
import {
    MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardGroup, MDBIcon, MDBCollapse, MDBCollapseHeader
} from "mdbreact";

//component
class MenuItems extends React.Component {


    render() {


        return (
            <div>

                {/*Fisrt Group of food starts*/}
                <section className="my-5">

                    <h3 className="h1-responsive font-weight-bold text-center my-5">
                        SPAGETTI
                    </h3>
                    
            <MDBCardGroup id="1">
                <MDBCol md="4">
                        <MDBCard className="mb-2 hoverable" style={{ width: "22rem", height: "33rem" }}>
                        <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        <MDBCardBody>
                            <MDBCardTitle>Spagetti Napolitan</MDBCardTitle>
                            
                            <MDBCardText>
                                <MDBContainer>
                                <MDBRow>
                                <p><strong className="font-weight-bold">Ingredients: </strong> 
                                    spaghetti, tomato-paste, onion, button mushrooms,
                                    green peppers, sausage, bacon and Tabasco sauce.
                                </p>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                
                                   <p><span> <strong className="font-weight-bold">Cost: </strong>  $18.99</span ></p>
                                </MDBRow>
                                </MDBContainer>
                            </MDBCardText>

                            <MDBBtn href="/cart" color="primary"> Add to Cart <MDBIcon icon="shopping-cart" />
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md="4">
                            <MDBCard className="mb-2 hoverable" style={{ width: "22rem", height: "33rem" }}>
                        <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        <MDBCardBody>
                            <MDBCardTitle>Spagetti Marinarar</MDBCardTitle>
                            <MDBCardText>
                                <MDBContainer>
                                    <MDBRow>
                                        <span><strong className="font-weight-bold">Ingredients: </strong> marinarar sauce, green prawns, chopped tomatoes, anchovy fillets,
                                              garlic, mussels, parsely leaves and jalapeno seasoning.
                                        </span>
                                
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                    
                                        <p><span> <strong className="font-weight-bold">Cost: </strong>  $18.99</span ></p>
                                    </MDBRow>
                                </MDBContainer>
                            </MDBCardText>

                            <MDBBtn href="/cart" color="primary"> Add to Cart <MDBIcon icon="shopping-cart" />
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md="4">
                        <MDBCard className="mb-2 hoverable" style={{ width: "22rem", height: "33rem" }}>
                        <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        <MDBCardBody>
                            <MDBCardTitle>Spagetti Bolognaise</MDBCardTitle>
                            <MDBCardText>
                                <MDBContainer>
                                    <MDBRow>
                                        <span><strong className="font-weight-bold">Ingredients: </strong> Ground meat (beef) ,
                                              soffritto (celery, carrot, onion), tomato paste.
                                        </span>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        
                                        <p><span> <strong className="font-weight-bold">Cost: </strong>  $18.99</span ></p>
                                    </MDBRow>
                                </MDBContainer>
                            </MDBCardText>



                            <MDBBtn href="/cart" color="primary"> Add to Cart <MDBIcon icon="shopping-cart" />
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>


                </MDBCardGroup>
                </section>

                {/*Fisrt Group of food finish//////////////////////////////////////////////////////////////////////*/}

                {/*Second Group of food starts*/}

                <section className="my-5">

                    <h3 className="h1-responsive font-weight-bold text-center my-5">
                        PIZZAS
                    </h3>
                     
                    <MDBCardGroup id="2">

                    <MDBCol md="4">
                            <MDBCard className="mb-2 hoverable" style={{ width: "22rem", height: "33rem" }} >
                        <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        <MDBCardBody>
                            <MDBCardTitle>Spagetti Napolitan</MDBCardTitle>

                            <MDBCardText>
                                <MDBContainer>
                                    <MDBRow>
                                        <p><strong className="font-weight-bold">Ingredients: </strong>
                                    spaghetti, tomato-paste, onion, button mushrooms,
                                    green peppers, sausage, bacon and Tabasco sauce.
                                </p>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>

                                        <p><span> <strong className="font-weight-bold">Cost: </strong>  $18.99</span ></p>
                                    </MDBRow>
                                </MDBContainer>
                            </MDBCardText>

                            <MDBBtn href="/cart" color="primary"> Add to Cart <MDBIcon icon="shopping-cart" />
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md="4">
                            <MDBCard className="mb-2 hoverable" style={{ width: "22rem", height: "33rem" }}>
                        <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        <MDBCardBody>
                            <MDBCardTitle>Spagetti Marinarar</MDBCardTitle>
                            <MDBCardText>
                                <MDBContainer>
                                    <MDBRow>
                                        <span><strong className="font-weight-bold">Ingredients: </strong> marinarar sauce, green prawns, chopped tomatoes, anchovy fillets,
                                              garlic, mussels, parsely leaves and jalapeno seasoning.
                                        </span>

                                    </MDBRow>
                                    <hr />
                                    <MDBRow>

                                        <p><span> <strong className="font-weight-bold">Cost: </strong>  $18.99</span ></p>
                                    </MDBRow>
                                </MDBContainer>
                            </MDBCardText>

                            <MDBBtn href="/cart" color="primary"> Add to Cart <MDBIcon icon="shopping-cart" />
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md="4">
                            <MDBCard className="mb-2 hoverable" style={{ width: "22rem", height: "33rem" }}>
                        <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        <MDBCardBody>
                            <MDBCardTitle>Spagetti Bolognaise</MDBCardTitle>
                            <MDBCardText>
                                <MDBContainer>
                                    <MDBRow>
                                        <span><strong className="font-weight-bold">Ingredients: </strong> Ground meat (beef) ,
                                              soffritto (celery, carrot, onion), tomato paste.
                                        </span>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>

                                        <p><span> <strong className="font-weight-bold">Cost: </strong>  $18.99</span ></p>
                                    </MDBRow>
                                </MDBContainer>
                            </MDBCardText>



                            <MDBBtn href="/cart" color="primary"> Add to Cart <MDBIcon icon="shopping-cart" />
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>


                </MDBCardGroup>
                </section>
            </div>


        );
    }
}

export default MenuItems;