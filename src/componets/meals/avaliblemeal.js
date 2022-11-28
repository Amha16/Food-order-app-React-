import classes from "./avaliablemeal.module.css";
import Card from "../UI/card/card";
import MealItem from "./mealItem/mealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvalMeal = () => {
  const meals = DUMMY_MEALS.map((meal) => (
    <li>
      {
        <MealItem
          key={meal.id}
          name={meal.name}
          descr={meal.description}
          price={meal.price}
        />
      }
    </li>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};

export default AvalMeal;
