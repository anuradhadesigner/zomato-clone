import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './listing.css'
import Header from '../../header';
import ListingDisplay from './listingDisplay';
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/costFilter';
import SortFilter from '../filters/sortFilter';

const restUrl = "https://zomatonodejs.herokuapp.com/restaurants?meal_id="

class Listing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurantList: ''
        };
    }

    setDataPerFilter = (data) => {
        this.setState({restaurantList: data})
    }

    render() {
        return (
            <>
                <Header/>
                <div id="bannerHead">
                    <span className="bannerSubHeading1">Sizzling</span>
                    <span className="bannerSubHeading2">More than 3000 Restaurants</span>
                    <span className="bannerSubHeading3">Order your food at the best price</span>
                </div>
                <div id="listingContainer">
                <div id="filter">
                            <center>
                                <h3>Filter</h3>
                            </center>
                            <CuisineFilter mealId={this.props.match.params.mealId}
                            restPerCuisine={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                            <CostFilter  mealId={this.props.match.params.mealId}
                            restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                            <SortFilter mealId={this.props.match.params.mealId}
                            restPerSort={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                        </div>
                    {/* <div id="filter">
                        <span id="filterHeading">- Filter -</span>
                        <span id="filterSubHeading">Select Location</span>
                        <span id="filterDropdown">
                            <select style={{height:'35px',width:'80%'}}>
                                <option>---SELECT CITY---</option>
                                <option>Delhi</option>
                                <option>Pune</option>
                                <option>Mumbai</option>
                                <option>Nagpur</option>
                            </select>
                        </span>
                        <hr />
                        <div id="cuisine">
                            <span id="cuisineHeading">- Cuisine -</span>
                            <span id="cuisineSubHeading">
                                <input type="checkbox" name="Cuisine" style={{marginRight:'2%'}}></input>North Indian
                            </span>
                            <span id="cuisineSubHeading">
                            <input type="checkbox" name="Cuisine" style={{marginRight:'2%'}}></input>South Indian
                            </span>
                            <span id="cuisineSubHeading">
                            <input type="checkbox" name="Cuisine" style={{marginRight:'2%'}}></input>Chinese
                            </span>
                            <span id="cuisineSubHeading">
                            <input type="checkbox" name="Cuisine" style={{marginRight:'2%'}}></input>Fast Food
                            </span>
                            <span id="cuisineSubHeading">
                            <input type="checkbox" name="Cuisine" style={{marginRight:'2%'}}></input>Street Food
                            </span>
                        </div>
                        <hr />
                        <div id="cost">
                            <span id="costHeading">- Cost -</span>
                            <span id="costSubHeading">
                            <input type="radio" name="Cuisine" style={{marginRight:'1%'}}></input>Less Than 500
                            </span>
                            <span id="costSubHeading">
                            <input type="radio" name="Cuisine" style={{marginRight:'1%'}}></input>500 to 1000
                            </span>
                            <span id="costSubHeading">
                            <input type="radio" name="Cuisine" style={{marginRight:'1%'}}></input>1000 to 1500
                            </span>
                            <span id="costSubHeading">
                            <input type="radio" name="Cuisine" style={{marginRight:'1%'}}></input>1500 to 2000
                            </span>
                            <span id="costSubHeading">
                            <input type="radio" name="Cuisine" style={{marginRight:'1%'}}></input>2000+
                            </span>
                        </div>
                        <hr />
                        <div id="sort">
                            <span id="sortHeading">- Sort -</span>
                            <span id="sortSubHeading">
                            <input type="radio" name="Cuisine" style={{marginRight:'1%'}}></input>Price low to high
                            </span>
                            <span id="sortSubHeading">
                            <input type="radio" name="Cuisine" style={{marginRight:'1%'}}></input>Price high to low
                            </span>
                        </div>
                    </div> */}
                    <ListingDisplay listData={this.state.restaurantList}/>  
                </div>
            </>
        )
    }

    ///
    componentDidMount(){
        let mealid = this.props.match.params.mealId;
        sessionStorage.setItem('mealId',mealid)
        axios.get(`${restUrl}${mealid}`)
        .then((res) => {this.setState({restaurantList:res.data})})
    }
}

export default Listing