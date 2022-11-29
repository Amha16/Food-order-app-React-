import classes from './cart.module.css'
import Modal from '../UI/modal'
const Cart = (props)=>{
    const cartItem = (
        <ul className={classes['cart-items']}>
            {[{id: 'c1', name: 'sushi', amount: 2, price: 12.99}].map((item) => (<li>{item.name}</li>))}
            </ul>
    )
    return(
        <Modal onClose={props.onClose}>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )

}

export default Cart;