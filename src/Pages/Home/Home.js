import React from 'react'
import Categories from '../../components/Categories/Categories';
import Sort from '../../components/Sort/Sort';
import styled from 'styled-components'
import Pizzas from '../../components/Pizzas/Pizzas';

import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSortBy } from '../../redux/actions/filters';
import { fetchPizzas } from '../../redux/actions/pizzas';
import { addPizza } from '../../redux/actions/cart';

const categoryNames = ["Вегетарианская", "Гриль", "Острые", 'Закрытые'];
const sortNames = [
    {name: "популярности", type: "popular", order:"desc"},
    {name: "по цене", type:"price", order:"desc"}, 
    {name: "по алфавиту", type: "alphabet", order:"asc"}
];


export default function Home() {
    const dispatch= useDispatch();
    const {items, isLoading} = useSelector(({pizzas}) => (pizzas)); // eslint-disable-next-line
    const {category, sortBy} = useSelector(({filters}) => (filters));

    React.useEffect(() => {
      dispatch(fetchPizzas(sortBy, category)) //eslint-disable-next-line
    }, [category, sortBy]); 
  
    
    const getSelectedCategory = React.useCallback((index) => {
        dispatch(setCategory(index)); // eslint-disable-next-line
    }, []);

    // working with sort type...
    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type)); // eslint-disable-next-line
      }, []);

    const onClickAddPizza = (pizzaData) => {
        // console.log(pizzaData);
        dispatch(addPizza(pizzaData))
    }

    return (
        <React.StrictMode>
            <Row>
                <Categories getCategory={getSelectedCategory} items={categoryNames} activeCategory={category} />
                <Sort 
                    items= { sortNames }
                    sortType={sortBy.type}
                    sortNames={sortNames}
                    getSelectedSortType={onSelectSortType}
                />
            </Row>
            <Pizzas pizzas={ items ? items : null } isLoading={isLoading} onClickAddPizza={onClickAddPizza}/>
        </React.StrictMode>
    )
};

const Row = styled.div`
    display: flex;
    margin-top: 53px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
`;

