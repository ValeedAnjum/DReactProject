import React from 'react'
import './card.css'
export default function Item(props) {
    const {imgSrc,name,price,quantity,productId} = props.detials;
    return (
        <div className="Carditem">
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-md-2">
                        <div className="CardimgCon">
                            <img src={imgSrc} alt="some"/>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <p className="vm">{name}</p>
                    </div>
                    <div className="col-md-2">
                        <p className="vm">${price}</p>
                    </div>
                    <div className="col-md-2">
                        <div className='Quantitycon vm'>
                            <button
                            onClick={props.productIncrementHandler}
                            className="btn btn-outline-danger">+</button>
                            <button className="btn btn-outline-danger">{quantity}</button>
                            <button
                            onClick={props.productdecrementHandler}
                            className="btn btn-outline-danger">-</button>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className="vm">
                           <i
                           onClick={() => props.removeItemFromCardHandler(productId)} 
                           className="fas fa-trash"></i>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <p className="vm text-capitalize">total price : ${price*quantity}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
