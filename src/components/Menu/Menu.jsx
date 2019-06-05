import React from 'react'
import './Menu.css'
export default function Menu(props) {
  const {cardClickHandler,productClickHandler} = props;
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark Menu">
             <a className="navbar-brand" href="#">
             <img
             onClick={productClickHandler}
             alt="Logo"
             src="https://react-phone-e-commerce-project.netlify.com/static/media/logo.9f7e506d.svg" />
             </a>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={productClickHandler}>Products</a>
                </li>
                <li className="nav-item">
                  <a
                  onClick={cardClickHandler} 
                  className="nav-link" href="#">Card</a>
                </li>
              </ul>
            </nav>
        </React.Fragment>
    )
}
