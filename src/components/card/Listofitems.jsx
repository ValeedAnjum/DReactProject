import React from 'react'
import './card.css'
import Item from './item';
export default function Card(props) {
    return (
        <div className="Listofitems" style={{backgroundColor:'#f3f3f3'}}>
            <div className="container-fluid">
               <h1 className="text-uppercase text-slanted text-center text-danger">Your card</h1>
                <div className="row text-uppercase cardhcon">
                    <div className="col-md-2">products</div>
                    <div className="col-md-2">name of product</div>
                    <div className="col-md-2">price</div>
                    <div className="col-md-2">quantity</div>
                    <div className="col-md-2">remove</div>
                    <div className="col-md-2">total</div>
                </div>
            </div>
            {
                props.orderList.map( (item,index) => {
                    return (
                        <Item
                        removeItemFromCardHandler={props.removeItemFromCardHandler}
                        productdecrementHandler = {() => props.productdecrementHandler(index)}
                        productIncrementHandler={() => props.productIncrementHandler(index)}
                        detials={item} key={index}/>
                    );
                })
            }
        </div>
    )
}
