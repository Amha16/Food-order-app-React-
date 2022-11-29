import classes from './HeaderCartButton.module.css'
import CartIcon from './Carticon'
const HeaderCartButtton = (props)=>{
    return(
        <button className={classes.button} onClick={props.onClick}>
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