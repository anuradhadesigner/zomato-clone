import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
// import Header from './header';
import Footer from './footer';
import Home from './component/Home/Home';
import Listing from './component/Listing/listing';
import Details from './component/details/restDetails';
import ViewOrders from './component/bookings/viewOrder';
import PlaceOrder from './component/bookings/placeOrder';
import OrderDisplay from './component/bookings/orderDisplay';
import login from './component/login/login';
import register from './component/login/register';

const Router = () => {
    return(
        <BrowserRouter>
            <div>
                {/* <Header/> */}
                    <Route exact path="/" component={Home}/>
                    <Route path="/listing/:mealId" component={Listing}/>
                    <Route path="/details" component={Details}/>
                    <Route path="/viewBooking" component={ViewOrders}/>
                    <Route path="/orderDisplay" component={OrderDisplay}/>
                    <Route path="/placeOrder/:restName" component={PlaceOrder}/>
                    <Route path="/login" component={login}/>
                    <Route path="/register" component={register}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Router