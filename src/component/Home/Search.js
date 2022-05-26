import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom';

const lurl = "https://zomatonodejs.herokuapp.com/location"
const rurl = "https://zomatonodejs.herokuapp.com/restaurants?state_id="

class Search extends Component {

    constructor(props){
        super(props);
        console.log("inside constructor>>>")
        this.state = {
            location:'',
            restData:''
        }
    }

    renderCity = (data)=>{
        if(data){
            return data.map((item)=>{
                return (
                    <option value={item.state_id} key={item.state_id}>
                        {item.state}</option>
                )
            })
        } 
    }

    handleCity = (event)=>{
        let stateId = event.target.value;
        fetch(`${rurl}${stateId}`,{method: 'GET'})
        .then((res) =>res.json())
        .then((data) =>{
            this.setState({restData: data})
        })
    }

    handleRest = (event)=>{
        let restId = event.target.value;
        // console.log("inside Search>>>",this.props)
        this.props.history.push(`/details?restId=${restId}`)

    }

    renderRest = (data)=>{
        if(data){
            return data.map((item)=>{
                return (
                    <option value={item.restaurant_id} key={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        } 
    }
    

    render(){
        console.log("inside render>>>",this.state.location)
        return(
            <div className="banner">
                <div id="logo">
                    <span>Zomato</span>
                 </div>
                <div id="heading">
                     Discover the best food and drinks
                 </div>
                 <div className="dropdown">
                    <select id="city" onChange={this.handleCity}>
                        <option>---SELECT CITY---</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="restaurantSelect" id="hotels" onChange={this.handleRest}>
                        <option>---SELECT RESTAURANT---</option>
                        {this.renderRest(this.state.restData)}
                    </select>
                </div>
            </div>
        )
    }
        //call api on page load
        componentDidMount() {
        console.log("inside componentDidMount>>>")
        fetch(lurl,{method: 'GET'})
        .then((res)=> res.json())
        .then((data)=> {
            this.setState({location: data})
        })
    }

}

export default withRouter(Search)