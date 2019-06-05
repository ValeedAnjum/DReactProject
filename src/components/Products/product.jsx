import React from 'react'
import './Product.css'
export default function product(props) {
    const {imgSrc} = props.product;
    return (
        <React.Fragment>
            <div className="col-md-3 product p-2">
                <div className="w-100 bg-light h-100 procon">
                  <img
                  alt={props.product.name}
                  src={imgSrc} className="zoom" onClick={() => props.detailHanler(props.product)} />
                  <i
                  onClick={(e) => props.shopingcardHandler(e,props.product)}
                  className="fas fa-shopping-cart purbtn"></i>
                </div>
            </div>
        </React.Fragment>
    )
}
