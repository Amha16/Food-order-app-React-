import classes from "./header.module.css";
import mealImg from './img/meals.jpg'
import HeaderCartButtton from "./HeaderCartButton";
const Header = (props)=>{
    return(
        <div>
        
            <header className={classes.header}>
                <h1>React food</h1>
                <HeaderCartButtton />
            </header>
            <div className={classes['main-image']}>
               
                <img src={mealImg} alt="delcious food" />
            </div>
        </div>
    )
}
export default Header