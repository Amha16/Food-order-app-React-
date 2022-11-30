import { useContext,useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "./Carticon";
import CartContext from "../../store/cart-context";
const HeaderCartButtton = (props) => {
    const CartCtx = useContext(CartContext);

    const numberOfCartItem = CartCtx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    },0)

    const { items } = CartCtx;
    const [btnIsHighLighted, setBtnIsHighlighted] = useState(false);


    const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump: '' }`;
    useEffect(()=>{
      if(items.lenght === 0){
        return;
      }
      setBtnIsHighlighted(true);

      const timer = setTimeout(()=>{
        setBtnIsHighlighted(false);
      }, 300);
      return ()=> {
        clearTimeout(timer)
      }
    },[items])
    return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButtton;
