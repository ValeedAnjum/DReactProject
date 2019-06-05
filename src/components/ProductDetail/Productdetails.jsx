import React from 'react'
import './Productdetails.css'
export default function Productdetails(props) {
    const {title,imgSrc,MadeBy,price,Description} = props.productsDetails;
    // console.log(props.productsDetails);
    return (
        <React.Fragment>
            <div className="container-fluid Productdetails">
                <h1 className="text-capitalize text-center">{title}</h1>
                <div className="row">
                    <div className="col-md-6">
                        <img 
                        src={imgSrc} alt={title}
                        />
                    </div>
                    <div className="col-md-6 text-capitalize pt-5">
                        <h1>Model: {title}</h1>
                        <h3>Made by : {MadeBy}</h3>
                        <h5>Price : ${price}</h5>
                        <p>Some Info about product</p>
                        <p>
                        {Description}
                        </p>
                        <button
                        onClick={() => props.backToProduct(1)}
                        className="btn btn-danger text-capitalize">back to product</button>
                        <button
                        onClick={(e) => props.AddtocardHandler(e,props.productsDetails)}
                        className="btn btn-info text-capitalize">Add to card</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
