import classes from './mealItem.module.css'
import MealForm from './mealItemForm'
const MealItem = (props)=>{
    const price = `$${props.price.toFixed(2)}`
    return(
        <li className={classes.meal}>
        <div>
            <h3 className={classes.name}>{props.name}</h3>
            <div className={classes.description}>{props.descr}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealForm />
        </div>
        </li>
    )
}

export default MealItem;