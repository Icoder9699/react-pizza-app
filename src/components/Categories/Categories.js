import React from 'react';
import classes from "./Categories.module.css";
import PropTypes from "prop-types";


const Categories = React.memo(function Categories({activeCategory, getCategory, items}) {
    
    const onClickCategory = (index) => {
        getCategory(index);
    }
    
    return (
        <div className={classes.Categories}>
            <ul>
                <li
                    className={activeCategory === null ? classes.CategoriesActive  : ''}
                    onClick={() => onClickCategory(null)}
                >
                    Все
                </li>
               {items ? items.map((item, index) => (
                   <li 
                        className={activeCategory === index ? classes.CategoriesActive : ''} 
                        onClick={() => onClickCategory(index)} 
                        key={index}
                    >
                       {item}
                   </li>
               )): null}
            </ul>
        </div>
    )
});


Categories.propTypes = {
    activeCategory: PropTypes.number || PropTypes.null ,
    getCategory: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.string).isRequired
}

Categories.defaultProps = {
    activeCategory: 2,
    // getCategory: PropTypes.func,
    items: []
}

export default Categories;