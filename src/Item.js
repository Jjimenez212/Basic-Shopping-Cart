import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';
import { items } from './static-data';

const Item = ( { item, children } ) => (
    <div className="Item">
        <div className="Item-left">
            <div className="Item-image"/>
            <img src="images/X14.jpg"></img>
            <div className="Item-title">
                {item.name}
            </div>
            <div className="Item-description">
                {item.descriptions}
            </div>
        </div>
        <div className="Item-right">
            <div className="Item-price">
                ${item.price}
            </div>
            {children}
        </div>
    </div>
);

Item.propTypes = {
    item: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func.isRequired
};

export default Item;