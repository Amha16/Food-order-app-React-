import classes from "./avaliablemeal.module.css";
import Card from "../UI/card/card";
import MealItem from "./mealItem/mealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Ketfo",
    description: "ketfo, Ayeb and Gomen",
    price: 245,
  },
  {
    id: "m2",
    name: "Tebes",
    description: "Lamb cradles",
    price: 256.5,
  },
  {
    id: "m3",
    name: "Kekel",
    description: "kekkl and Beef",
    price: 300,
  },
  {
    id: "m4",
    name: "Kuret",
    description: "Fresh Raw Red Meat",
    price: 560,
  },
];

const AvalMeal = () => {
  const meals = DUMMY_MEALS.map((meal) => (
    <li key={meal.id}>
      {
        <MealItem
          key={meal.id}
          id={meal.id}
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
