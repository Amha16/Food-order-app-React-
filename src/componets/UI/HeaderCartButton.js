import classes from './HeaderCartButton.module.css'
import CartIcon from './Carticon'
const HeaderCartButtton = ()=>{
    return(
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                3
            </span>

        </button>
    )
}

export default HeaderCartButtton