import React, { Component } from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay';

const url = "https://zomatonodejs.herokuapp.com/mealtype"

class QuickSearch extends Component {
    constructor() {
        super()

        this.state = {
            mealType:''
        }
    }

    render() {
        return (
            <>
                <section id="quickSearch">
                    <div className="quickSearchHeading">
                        Quick Search
                    </div>
                    <div className="quickSearchSubHeading">
                        Discover Restaurants By Meal
                    </div>
                </section>
                <QuickDisplay mealData={this.state.mealType}/>
            </>
        )
    }
        //api on pageLoad
        componentDidMount() {
        fetch(url,{method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}

export default QuickSearch