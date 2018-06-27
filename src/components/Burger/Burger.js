import React from 'react';
import classes from './Burger';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = () => {
    return (
        <div className={classes.Burger}> 
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="salad"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="bacon"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
};

export default burger;