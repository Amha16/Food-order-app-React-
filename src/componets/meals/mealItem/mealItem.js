import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './mealItem.module.css'
import MealForm from './mealItemForm'
const MealItem = (props)=>{
    const cartCtx = useContext(CartContext);
   
    const addToCartHandler = amount =>{
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    }

    const price = `$${props.price.toFixed(2)}`
    return(
        <li className={classes.meal}>
        <div>
            <h3 className={classes.name}>{props.name}</h3>
            <div className={classes.description}>{props.descr}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealForm onAddtoCart={addToCartHandler}/>
        </div>
        </li>
    )
}

export default MealItem;