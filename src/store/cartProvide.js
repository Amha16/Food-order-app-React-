import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    item: [],
    totalAmount: 0
};

const cartReducer = (state, action) =>{
    if(action.type === 'ADD_ITEM'){
         
        const upDatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    
        const existingCartItemIndex = state.item.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.item[existingCartItemIndex];
      
        let upDatedItems;

        if(existingCartItem){
           const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            upDatedItems = [...state.item];
            upDatedItems[existingCartItemIndex] = updatedItem;
           
        } else{
                upDatedItems = state.item.concat(action.item);
            }



        return{
            item: upDatedItems,
            totalAmount: upDatedTotalAmount
        };
    }
    if(action.type === 'REMOVE_ITEM'){
        
    }
}



const CartProvider = props => {

const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);


    const addItemtoCart = (item) => {
        dispatchCartAction({type: 'ADD_ITEM', item: item})
    };
    const removeItemFromCart = (id) => {
        dispatchCartAction({type: 'REMOVE_ITEM', id: id})
    };

    const cartContext = {
        items:cartState.item,
        totalAmount: cartState.totalAmount,
        addItem: addItemtoCart,
        removeItem: removeItemFromCart,
        
    };

    return(
        <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    )
}

export default CartProvider;