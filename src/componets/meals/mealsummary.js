import classes from './mealsummary.module.css'

const MealSummary = () =>{
    return(
        <section className={classes.summary}>
          
        <h2>Delicious Food, Delivered To You</h2>
        <p>
        Tiru Kitfo is a unique restaurant that offers exceptional Ethiopian Cuisine with special kitfo
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time and
          of course by experienced chefs!
        </p>
      </section>
    )
}

export default MealSummary;