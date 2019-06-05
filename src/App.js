import React, {Component} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {products} from './tempList';
import Menu from './components/Menu/Menu';
import Products from "./components/Products/Products";
import Productdetails from "./components/ProductDetail/Productdetails";
import Backdrop from "./components/BackdropModel/Backdrop";
import Shopingcardmodel from "./components/ShopingCardModel/Shopingcardmodel";
import Card from "./components/card/Listofitems";
class App extends Component {
    state = {
        products: products,
        productDisplayStatus: 1,
        productsDetails: {
            id: "",
            title: "",
            imgSrc: "",
            MadeBy: "",
            price: "",
            Description: products[0].des,
            desplayStatus: 0
        },
        shopingcardmodelstate: {
            title: "",
            imgSrc: "",
            price: ""
        },
        orderList: []
    }
    AddtocardHandler = (e,detail) => {
        let copyoforderList = [...this.state.orderList];
        let order;
        for (let i = 0; i < copyoforderList.length; i++) {
            if (copyoforderList[i].productId === detail.productId) {
                e.target.innerHTML = 'In Card';
                return;
            }
        }
        order = {
            productId: detail.productId,
            imgSrc: detail.imgSrc,
            name: detail.title,
            price: detail.price,
            quantity: 1
        };
        copyoforderList.push(order);
        this.setState({
            productDisplayStatus:4,
            shopingcardmodelstate:{
                title:detail.title,
                imgSrc:detail.imgSrc,
                price:detail.price
            },
            orderList:copyoforderList
        })
    }
    detailHanler = product => {
        this.setState({
            productDisplayStatus: 0,
            productsDetails: {
                productId: product.id,
                title: product.name,
                imgSrc: product.imgSrc,
                MadeBy: product.madeby,
                price: product.price,
                Description: products[0].des
            }
        })
    }
    shopingcardHandler = (e, detail) => {
        const copyoforderList = [...this.state.orderList];
        for (let i = 0; i < copyoforderList.length; i++) {
            if (copyoforderList[i].productId === detail.id) {
                e.target.className = "purbtn";
                e.target.innerHTML = "Already In Card";
                return;
            }
        }

        let order;
        order = {
            productId: detail.id,
            imgSrc: detail.imgSrc,
            name: detail.name,
            price: detail.price,
            quantity: 1
        };
        copyoforderList.push(order);
        this.setState({
            productDisplayStatus: 2,
            shopingcardmodelstate: {
                title: detail.name,
                imgSrc: detail.imgSrc,
                price: detail.price
            },
            orderList: copyoforderList
        });
    }
    productIncrementHandler = index => {
        let copyoforderList = [...this.state.orderList];
        let OrderToIncrease = copyoforderList[index];
        OrderToIncrease.quantity = copyoforderList[index].quantity + 1;
        copyoforderList[index] = OrderToIncrease;
        this.setState({orderList: copyoforderList})
    }
    productdecrementHandler = index => {
        let copyoforderList = [...this.state.orderList];
        let OrderToDecrease = copyoforderList[index];
        OrderToDecrease.quantity = copyoforderList[index].quantity - 1;
        if (OrderToDecrease.quantity <= 0) {
            copyoforderList.splice(index, 1);
        } else {
            copyoforderList[index] = OrderToDecrease;
        }
        this.setState({orderList: copyoforderList})
    }
    removeItemFromCardHandler = productid => {
        let copyoforderList = [...this.state.orderList];
        for (let i = 0; i < copyoforderList.length; i++) {
            if (copyoforderList[i].productId === productid) {
                copyoforderList.splice(i, 1);
                this.setState({orderList: copyoforderList})
                return;
            }
        }
    }
    detailbackdropclickHandler = () => {
        this.setState({productDisplayStatus:0});
    }
    backdropclickHandler = () => {
        this.setState({productDisplayStatus: 1});
    }
    backToProduct = index => {
        this.setState({productDisplayStatus: index});
    }
    cardClickHandler = () => {
        this.setState({productDisplayStatus: 3})
    }
    productClickHandler = () => {
        this.setState({productDisplayStatus: 1})
    }
    displayPage = index => {
        switch (index) {
            default:
            case 1:
                return (<Products
                    shopingcardHandler={this.shopingcardHandler}
                    detailHanler={this.detailHanler}
                    products={this.state.products}/>);
            case 0:
                return (<Productdetails
                    AddtocardHandler={this.AddtocardHandler}
                    backToProduct={this.backToProduct}
                    productsDetails={this.state.productsDetails}/>);
            case 2:
                return (
                    <React.Fragment>
                        <Products detailHanler={this.detailHanler} products={this.state.products}/>
                        <Backdrop backdropclickHandler={this.backdropclickHandler}>
                            <Shopingcardmodel
                                cardClickHandler={this.cardClickHandler}
                                backdropclickHandler={this.backdropclickHandler}
                                shopingcardmodelstate={this.state.shopingcardmodelstate}/>
                        </Backdrop>
                    </React.Fragment>
                );
            case 3:
                return (<Card
                    removeItemFromCardHandler={this.removeItemFromCardHandler}
                    productdecrementHandler={this.productdecrementHandler}
                    productIncrementHandler={this.productIncrementHandler}
                    orderList={this.state.orderList}/>);
            case 4:
                return (
                    <React.Fragment>
                        <Productdetails
                         AddtocardHandler={this.AddtocardHandler}
                         backToProduct={this.backToProduct}
                         productsDetails={this.state.productsDetails}/>
                         <Backdrop backdropclickHandler={this.detailbackdropclickHandler}>
                            <Shopingcardmodel
                                cardClickHandler={this.cardClickHandler}
                                backdropclickHandler={this.backdropclickHandler}
                                shopingcardmodelstate={this.state.shopingcardmodelstate}/>
                        </Backdrop>
                    </React.Fragment>
                );
        }
    }
    render() {
        return (
            <React.Fragment>
                <Menu
                    productClickHandler={this.productClickHandler}
                    cardClickHandler={this.cardClickHandler}/> {this.displayPage(this.state.productDisplayStatus)}

            </React.Fragment>
        );
    }
}

export default App;
