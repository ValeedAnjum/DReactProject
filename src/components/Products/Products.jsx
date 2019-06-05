import React from 'react'
import Product from './product';
export default function Products(props) {
    const {products} = props;
    return (
        <React.Fragment>
            <div className='container-fluid' style={{backgroundColor:'#f3f3f3'}}>
                <h1 className="text-capitalize text-center" style={{userSelect:'none'}}>our <strong>products</strong></h1>
                <div className="container">
                    <div className="row">
                    {
                        products.map((product,index) => {
                            return (
                                <Product key={index}
                                shopingcardHandler={props.shopingcardHandler}
                                product={product} detailHanler={props.detailHanler}/>
                            );
                        })
                    }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
