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
                        
                        <MDBCol className="mb-2 d-flex col-md-4">
                            <MDBCard className="hoverable" >
                                <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                    />
                                <MDBCardBody >
                            <MDBCardTitle>Spagetti Napolitan</MDBCardTitle>
                                    <MDBContainer>
                                        <MDBRow>
                                            <MDBCardText>

                                                <strong className="font-weight-bold">Ingredients: </strong>
                                    spaghetti, tomato-paste, onion, button mushrooms,
                                    green peppers, sausage, bacon and Tabasco sauce.

                                            </MDBCardText>
                                            
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                            <MDBCardText>

                                                <span> <strong className="font-weight-bold">Cost: </strong>  $18.99</span >

                                            </MDBCardText>
                                        
                                        
                                        </MDBRow>
                                
                            
                                    </MDBContainer> 
                            
                                </MDBCardBody>
                                
                                <MDBBtn href="/cart" color="primary"> Add to Cart <MDBIcon icon="shopping-cart" />
                                </MDBBtn>
                    </MDBCard>
                </MDBCol>
                            
                       
                        <MDBCol className="mb-2 d-flex col-md-4">
                            <MDBCard className=" hoverable" >
                                <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                    />
                                <MDBCardBody >
                                    <MDBCardTitle>Spagetti Marinarar</MDBCardTitle>
                                    <MDBContainer>
                                        <MDBRow>
                                            <MDBCardText>


                                                <span><strong className="font-weight-bold">Ingredients: </strong> marinarar sauce, green prawns, chopped tomatoes, anchovy fillets,
                                              garlic, mussels, parsely leaves and jalapeno seasoning.
                                        </span>


                                            </MDBCardText>
                                       
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                        <MDBCardText>
                                            
                                                <span> <strong className="font-weight-bold">Cost: </strong>  $18.99</span >
                                            
                                        </MDBCardText>
                                        </MDBRow>
                                    </MDBContainer>
                            
                                </MDBCardBody>
                                <MDBBtn href="/cart" color="primary"> Add to Cart <MDBIcon icon="shopping-cart" />
                                </MDBBtn>
                            </MDBCard>
                        </MDBCol>
                            
                        <MDBCol className="mb-2 d-flex col-md-4">
                            <MDBCard className=" hoverable" >
                                <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                     />
                                <MDBCardBody >
                                    <MDBCardTitle>Spagetti Bolognaise</MDBCardTitle>
                                    <MDBContainer>
                                        <MDBRow>
                                        <MDBCardText>
                                            
                                                <span><strong className="font-weight-bold">Ingredients: </strong> Ground meat (beef) ,
                                              soffritto (celery, carrot, onion), tomato paste.
                                                </span>
                                           
                                        </MDBCardText>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                        <MDBCardText>
                                            
                                                <span> <strong className="font-weight-bold">Cost: </strong>  $18.99</span >
                                            
                                        </MDBCardText>
                                        </MDBRow>
                                    </MDBContainer>

                                </MDBCardBody>
                                <MDBBtn href="/cart" color="primary"> Add to Cart <MDBIcon icon="shopping-cart" />
                                </MDBBtn>
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

                        <MDBCol className="mb-2 d-flex col-md-4">
                            <MDBCard className="mb-2 hoverable"  >
                                <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                     />
                                <MDBCardBody >
                            <MDBCardTitle>Spagetti Napolitan</MDBCardTitle>
                                    <MDBContainer>
                                        <MDBRow>
                                        <MDBCardText>
                                            
                                                <strong className="font-weight-bold">Ingredients: </strong>
                                    spaghetti, tomato-paste, onion, button mushrooms,
                                    green peppers, sausage, bacon and Tabasco sauce.

                                           
                                        </MDBCardText>
                                            </MDBRow>
                                        <hr />
                                        <MDBRow>
                                        <MDBCardText>
                                           
                                                <span> <strong className="font-weight-bold">Cost: </strong>  $22.99</span >
                                            
                                        </MDBCardText>
                                        </MDBRow>
                                    </MDBContainer>
                            
                                </MDBCardBody>
                                <MDBBtn href="/cart" color="primary"> Add to Cart <MDBIcon icon="shopping-cart" />
                                </MDBBtn>
                    </MDBCard>
                </MDBCol>



                        <MDBCol className="mb-2 d-flex col-md-4">
                            <MDBCard className="mb-2 hoverable" >
                                <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                     />
                                <MDBCardBody >
                                    <MDBCardTitle>Spagetti Marinarar</MDBCardTitle>
                                    <MDBContainer>
                                        <MDBRow>
                                        <MDBCardText>
                                            
                                                <span><strong className="font-weight-bold">Ingredients: </strong> marinarar sauce, green prawns, chopped tomatoes, anchovy fillets,
                                              garlic, mussels, parsely leaves and jalapeno seasoning.
                                               </span>

                                        </MDBCardText>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                        <MDBCardText>
                                          
                                                <span> <strong className="font-weight-bold">Cost: </strong>  $22.99</span >
                                            
                                        </MDBCardText>
                                        </MDBRow>
                                    </MDBContainer>
                            
                                </MDBCardBody>
                                <MDBBtn href="/cart" color="primary"> Add to Cart <MDBIcon icon="shopping-cart" />
                                </MDBBtn>
                    </MDBCard>
                </MDBCol>



                        <MDBCol className="mb-2 d-flex col-md-4">
                            <MDBCard className="mb-2 hoverable" >
                                <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                    />
                                <MDBCardBody >
                                    <MDBCardTitle>Spagetti Bolognaise</MDBCardTitle>
                                    <MDBContainer>
                                        <MDBRow>
                                        <MDBCardText>
                                            
                                                <span><strong className="font-weight-bold">Ingredients: </strong> Ground meat (beef) ,
                                              soffritto (celery, carrot, onion), tomato paste.
                                                </span>
                                            
                                        </MDBCardText>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                        <MDBCardText>
                                            
                                                <span> <strong className="font-weight-bold">Cost: </strong>  $22.99</span >
                                            
                                        </MDBCardText>
                                        </MDBRow>
                                    </MDBContainer>


                                </MDBCardBody>
                                <MDBBtn href="/cart" color="primary"> Add to Cart <MDBIcon icon="shopping-cart" />
                                </MDBBtn>
                    </MDBCard>
                </MDBCol>



                        <MDBCol className="mb-2 d-flex col-md-4">
                            <MDBCard className="mb-2 hoverable" >
                                <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                    />
                                <MDBCardBody >
                                    <MDBCardTitle>Spagetti Bolognaise</MDBCardTitle>
                                    <MDBContainer>
                                        <MDBRow>
                                        <MDBCardText>
                                            
                                                <span><strong className="font-weight-bold">Ingredients: </strong> Ground meat (beef) ,
                                              soffritto (celery, carrot, onion), tomato paste.
                                        </span>
                                            
                                        </MDBCardText>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                        <MDBCardText>

                                                <span> <strong className="font-weight-bold">Cost: </strong>  $22.99</span >
                                            
                                        </MDBCardText>
                                        </MDBRow>
                                    </MDBContainer>


                                </MDBCardBody>
                                <MDBBtn href="/cart" color="primary"> Add to Cart <MDBIcon icon="shopping-cart" />
                                </MDBBtn>
                            </MDBCard>
                        </MDBCol>



                        <MDBCol className="mb-2 d-flex col-md-4">
                            <MDBCard className="mb-2 hoverable" >
                                <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                     />
                                <MDBCardBody >
                                    <MDBCardTitle>Spagetti Bolognaise</MDBCardTitle>
                                    <MDBContainer>
                                        <MDBRow>
                                        <MDBCardText>
                                        
                                                <span><strong className="font-weight-bold">Ingredients: </strong> Ground meat (beef) ,
                                              soffritto (celery, carrot, onion), tomato paste.
                                                 </span>
                                            
                                        </MDBCardText>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                        <MDBCardText>
                                        
                                                <span> <strong className="font-weight-bold">Cost: </strong>  $22.99</span >
                                            
                                        </MDBCardText>
                                        </MDBRow>
                                    </MDBContainer>

                                </MDBCardBody>
                                <MDBBtn href="/cart" color="primary"> Add to Cart <MDBIcon icon="shopping-cart" />
                                </MDBBtn>
                            </MDBCard>
                        </MDBCol>

                </MDBCardGroup>
                </section>

                {/*2nd Group of food finish here//////////////////////////////////////////////////////////////////////*/}


                {/*3rd Group of food starts here*/}

                <section>
                    <h3 className="h1-responsive font-weight-bold text-center my-5">
                        BEVERAGES
                    </h3>

                    <MDBCardGroup id="3">
                        
                        <MDBCol className="mb-2 d-flex col-md-4 ">
                            <MDBCard className="mb-2 hoverable"  >
                                <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1560508180-03f285f67ded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                     />
                                <MDBCardBody >
                                    <MDBCardTitle>Spagetti Napolitan</MDBCardTitle>
                                    <MDBContainer>
                                        <MDBRow>
                                            <MDBCardText>
                                                <strong className="font-weight-bold">Ingredients: </strong>
                                    spaghetti, tomato-paste, onion, button mushrooms,
                                    green peppers, sausage, bacon and Tabasco sauce.


                                            </MDBCardText>
                                        
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                        <MDBCardText>
                                            
                                                <span> <strong className="font-weight-bold">Cost: </strong>  $22.99</span >
                                            
                                        </MDBCardText>
                                        </MDBRow>
                                    
                                    </MDBContainer>

                                </MDBCardBody>
                                <MDBBtn href="/cart" color="primary"> Add to Cart <MDBIcon icon="shopping-cart" />
                                </MDBBtn>
                            </MDBCard>
                            </MDBCol>
                            


                        
                        <MDBCol className="mb-2 d-flex col-md-4 ">
                            <MDBCard className="mb-2 hoverable" >
                                <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1560508180-03f285f67ded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                     />
                                <MDBCardBody >
                                    <MDBCardTitle>Spagetti Marinarar</MDBCardTitle>
                                    <MDBContainer>
                                        <MDBRow>
                                        <MDBCardText>

                                                <span><strong className="font-weight-bold">Ingredients: </strong> marinarar sauce, green prawns, chopped tomatoes, anchovy fillets,
                                              garlic, mussels, parsely leaves and jalapeno seasoning.
                                                </span>
                                        </MDBCardText>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                        <MDBCardText>
                                            
                                                <span> <strong className="font-weight-bold">Cost: </strong>  $22.99</span >
                                        </MDBCardText>
                                        </MDBRow>
                                        
                                    </MDBContainer>


                                </MDBCardBody>
                                <MDBBtn href="/cart" color="primary"> Add to Cart <MDBIcon icon="shopping-cart" />
                                </MDBBtn>
                            </MDBCard>
                            </MDBCol>
                            

                        
                        <MDBCol className="mb-2 d-flex col-md-4 ">
                            <MDBCard className="mb-2 hoverable" >
                                <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1560508180-03f285f67ded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                     />
                                <MDBCardBody >
                                    <MDBCardTitle>Spagetti Bolognaise</MDBCardTitle>
                                    <MDBContainer>
                                        <MDBRow>
                                            <MDBCardText>


                                                <span><strong className="font-weight-bold">Ingredients: </strong> Ground meat (beef) ,
                                              soffritto (celery, carrot, onion), tomato paste.
                                                </span>

                                            </MDBCardText>
                                        
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                        <MDBCardText>
                                            

                                                <span> <strong className="font-weight-bold">Cost: </strong>  $22.99</span >
                                            
                                        </MDBCardText>
                                        </MDBRow>
                                    
                                    </MDBContainer>

                                </MDBCardBody>
                                <MDBBtn href="/cart" color="primary"> Add to Cart <MDBIcon icon="shopping-cart" />
                                </MDBBtn>
                            </MDBCard>
                            </MDBCol>
                        

                        
                        <MDBCol className="mb-2 d-flex col-md-4 ">
                            <MDBCard className="mb-2 hoverable"  >
                                <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1560508180-03f285f67ded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                     />
                                <MDBCardBody >
                                    <MDBCardTitle>Spagetti Bolognaise</MDBCardTitle>
                                    <MDBContainer>
                                        <MDBRow>
                                            <MDBCardText>


                                                <span><strong className="font-weight-bold">Ingredients: </strong> Ground meat (beef) ,
                                              soffritto (celery, carrot, onion), tomato paste.
                                        </span>

                                            </MDBCardText>
                                    
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                            <MDBCardText>
                                                <span> <strong className="font-weight-bold">Cost: </strong>  $7.55</span >

                                            </MDBCardText>
                                        
                                        </MDBRow>
                                    </MDBContainer>

                                </MDBCardBody>
                                <MDBBtn href="/cart" color="primary"> Add to Cart <MDBIcon icon="shopping-cart" />
                                </MDBBtn>
                            </MDBCard>
                            </MDBCol>
                        

                        
                        <MDBCol className="mb-2 d-flex col-md-4">
                            <MDBCard className="mb-2 hoverable" >
                                <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1560508180-03f285f67ded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                     />
                                <MDBCardBody >
                                    <MDBCardTitle>Lemon Lime Bitter</MDBCardTitle>
                                    <MDBContainer>
                                        <MDBRow>
                                            <MDBCardText>


                                            </MDBCardText>

                                        </MDBRow>
                                        

                                        <hr />
                                        <MDBRow>
                                        <MDBCardText>
                                            

                                                <span> <strong className="font-weight-bold">Cost: </strong>  $7.55</span >
                                            
                                            </MDBCardText>
                                        </MDBRow>
                                    
                                    </MDBContainer>
                                </MDBCardBody>
                                <MDBBtn href="/cart" color="primary"> Add to Cart <MDBIcon icon="shopping-cart" />
                                </MDBBtn>
                            </MDBCard>
                            </MDBCol>
                        
                    </MDBCardGroup>
                </section>

                {/*3rd Group of food finish here//////////////////////////////////////////////////////////////////////*/}

            </div>


        );
    }
}

export default MenuItems;