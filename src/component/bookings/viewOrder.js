import React,{Component} from 'react';
import './placeOrder.css';
import Header from '../../header';
import axios from 'axios';
import OrderDisplay from './orderDisplay';

const url = "https://zomatonodejs.herokuapp.com/orders"
const updateUrl = "https://zomatonodejs.herokuapp.com/updateOrder"


class ViewOrder extends Component {
    constructor(props){
        super(props);

        this.state={
            orders:'',
        }
    }

    render() {

        if(sessionStorage.getItem('loginStatus') === 'loggedOut'){
            return(
                <>
                    <Header/>
                    <center>
                        <h2>Login First To Check Order</h2>
                    </center>
                </>

            )
        }
        return (
            <>
                <Header/>
                <OrderDisplay orderData={this.state.orders}/>
            </>
        )
    }

    componentDidMount(){
        if(this.props.location){
            let queryp = this.props.location.search;
            if(queryp){
                let data = {
                    "bank_status":queryp.split('&')[0].split('=')[1],
                    "date":queryp.split('&')[2].split('=')[1].split('%')[0],
                    "bank_name":queryp.split('&')[3].split('=')[1].split('%20')[0],
                }
                console.log(data)
                let id = queryp.split('&')[1].split('=')[1].split('_')[1];
                console.log(id)
                fetch(`${updateUrl}/${id}`,{
                    method: 'PATCH',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                    
                })
            }
        }
        let email = sessionStorage.getItem('userInfo').split(',')[1]
        // console.log(email)
        axios.get(`${url}?email=${email}`).then((res) => {this.setState({orders:res.data})})
    }
}
export default ViewOrder;