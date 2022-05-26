import React from 'react';
import {Link} from 'react-router-dom'

const ListingDisplay = (props) => {

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length > 0 ){
                return listData.map((item) => {
                    return(
                        <div className="content" key={item.restaurant_id}>
                            <div className="firstContainer">
                                <div className="tileComponent1">
                                    <img src={item.restaurant_thumb} className="Image"
                                    alt={item.restaurant_name}/>
                                </div>
                                <div className="tileComponent2">
                                    <div className="componentHeading">
                                        <Link to={`/details?restId=${item.restaurant_id}`}>{item.restaurant_name}</Link>
                                        <div className="city_name componentSubHeading">{item.address}</div>
                                        <div className="city_name componentSubHeading">{item.rating}</div>
                                        <div className="city_name componentSubHeading0">Rs. {item.cost}</div>
                                        <div className="labelDiv">
                                            <span className="label label-primary">
                                                {item.mealTypes[0].mealtype_name}
                                            </span>&nbsp;
                                            <span className="label label-success">
                                                {item.mealTypes[1].mealtype_name}
                                            </span>
                                            
                                        </div>
                                        <div className="labelDiv">
                                        <span className="label label-danger">
                                                {item.cuisines[0].cuisine_name}
                                            </span>&nbsp;
                                            <span className="label label-warning">
                                                {item.cuisines[1].cuisine_name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })
            }else{
                return(
                    <>
                        <h2>No Data For Filter</h2>
                    </>
                )
            }
        }else{
            return(
                <>
                    {/* <img src="/images/Neon-Loading.gif" alt="loader"/> */}
                    <h1>Loading.....</h1>
                </>
                
            )
        }
    }

    return(
        <div id="content">
            {renderData(props)}
        </div>
    )

}

export default ListingDisplay