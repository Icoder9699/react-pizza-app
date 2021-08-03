import React from 'react'
import LoadingBlock from '../LoadingBlock/LoadingBlock';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import classes from "./Pizzas.module.css";

export default function Pizzas({pizzas, isLoading, onClickAddPizza}) {
    return (
        <div className={classes.Pizzas}>
            <h2>Все пиццы</h2>
            <div className={classes.PizzasRow}>
                {pizzas && !isLoading ? 
                    pizzas.map(pizza => (
                        <PizzaBlock {...pizza} key={pizza.id} onClickAddPizza={onClickAddPizza}/>
                    )) : Array(10).fill(0).map((item, index) => {
                        return <LoadingBlock key={item + index}/>
                    })
                }
            </div>
        </div>
    )
}
