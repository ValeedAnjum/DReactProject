import React from 'react';
import './Shopingcardmodel.css';
export default function Shopingcardmodel(props) {
    const {title,imgSrc,price} = props.shopingcardmodelstate;
    return (
        <div className="Shopingcardmodel">
            <h6 className="text-capitalize text-slanted">Item Added To card</h6><br></br>
            <img
            src={imgSrc} alt="some" /><br></br>
            <h4 className="text-capitalize text-slanted">{title}</h4><br></br>
            <p className="text-capitalize text-slanted">price: ${price}</p><br></br>
            <button className="btn btn-outline-danger mb-2" onClick={props.backdropclickHandler}>continue shoping</button>
            <br></br>
            <button onClick={props.cardClickHandler} className="btn  btn-outline-info">Go to card</button>
        </div>
    )
}
