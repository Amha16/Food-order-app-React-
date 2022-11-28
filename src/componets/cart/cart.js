import classes from './cart.module.css'

const Cart = (props  )=>{
    const cartItem = (
        <ul className={classes['cart-items']}>
            {[{id: 'c1', name: 'sushi', amount: 2, price: 12.99}].map((item) => (<li>{item.name}</li>))}
            </ul>
    )
    return(
        <div>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.action}>
                <button className={classes['button--alt']}>close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
    )

}

export default Cart;