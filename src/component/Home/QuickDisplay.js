import React from 'react';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                    <Link to={`/listing/${item.mealtype_id}`} key={item.mealtype_id}>
                        <div className="middle">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
                                <div id="card">
                                    <div className="card-image">
                                    <img src={item.meal_image} alt="snacks"/>
                                    </div>
                                    <div className="card-component">
                                            <div className="card-title">
                                            {item.mealtype}
                                            </div>
                                            <div className="card-subtitle">
                                                {item.content}
                                            </div>
                                            <div className="option">
                                                <h6 style={{color:'green',fontSize:'15px'}}>View details &gt;&gt;&gt;</h6>
                                                
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }

    }

    return(
        <>
            {listMeal(props)}
        </>
    )
}

export default QuickDisplay