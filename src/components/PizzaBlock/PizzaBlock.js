import classNames from 'classnames';
import React, { useState } from 'react';
import './PizzaBlock.css';
import PropTypes from 'prop-types';


export default function PizzaBlock({id, imageUrl, name, types, sizes, price, onClickAddPizza}){
    const pizzaTypes = ['тонкое', "традиционное"];
    const aviableSizes = [26, 30, 40];

    const [activeType, setActiveType] = useState(types[0]);
    const [activeSize, setActiveSize] = useState(sizes[0]);
    // const [activeSize, setActiveSize] = useState(0);

    const selectType = (index) => {
        setActiveType(index)
    };

    const onAddToCart = () => {
        const obj = {
            id, 
            imageUrl, 
            name, 
            price,
            size: activeSize,
            type: pizzaTypes[activeType]
        };
        onClickAddPizza(obj);
    };
    
    return (
        <div className="Pizza">
            <div className="PizzaImg">
                <img src={imageUrl} alt="img"/>
            </div>
            <h3>{name}</h3>
            <div className="PizzaInfo">
                <div className="PizzaType">
                    <ul className="PizzaTop">
                        {pizzaTypes.map((type, index) => (
                            <li 
                                onClick={() => selectType(index)}
                                key={type+index} 
                                className={classNames({
                                    "active": activeType === index,
                                    "disabled": !types.includes(index)
                                })}
                            >
                                {type}
                            </li>
                        ))}
                    </ul>
                    <ul className="PizzaBottom">
                        {aviableSizes.map((size, index) => (
                            <li 
                                onClick={() => setActiveSize(size)} 
                                // onClick={() => setActiveSize(index)} 
                                key={index} 
                                className={classNames({
                                    "active": activeSize === size,
                                    // "active": activeSize === index,
                                    "disabled": !sizes.includes(size)
                                })}
                            >
                                {size} см.
                            </li>
                        ))}
                    </ul>
                    </div>
                </div>
                <div className="PizzaPrice">
                    <h3>от {price} ₽</h3>
                    <button 
                        className="PizzaAdd"
                        onClick={() => onAddToCart()}
                    >
                        Добавить
                    </button>
            </div>
        </div>
    )
};


// работа с типизацией ...
PizzaBlock.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
}

PizzaBlock.defaultProps = {
    name: '---',
    price: 0,
    types: [],
    sizes: [],
};