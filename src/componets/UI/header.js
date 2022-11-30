import classes from "./header.module.css";

import KetfoImg from './img/main.jpg'
import HeaderCartButtton from "./HeaderCartButton";
const Header = (props)=>{
    return(
        <div>
        
            <header className={classes.header}>
                <h1>ጥሩዬ ክትፎ</h1>
                <HeaderCartButtton onClick={props.onShow}/>
            </header>
            <div className={classes['main-image']}>
               
                <img src={KetfoImg} alt="delcious food" />
            </div>
        </div>
    )
}
export default Header