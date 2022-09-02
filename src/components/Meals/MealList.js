import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import styles from "./MealList.module.css";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "CHICKEN DONER KEBAB",
        description:
            "Crispy pita, white yogurt sauce, salad mix, tomato, blue onion, pickled cucumber, chicken, cheese sauce.",
        price: 2.98,
    },
    {
        id: "m2",
        name: "VEAL DONER KEBAB",
        description:
            "Crispy pita, white sauce based on yogurt, salad mix, tomato, blue onion, pickled cucumber, veal, cheese sauce.",
        price: 3.44,
    },
    {
        id: "m3",
        name: "MIX DONER KEBAB",
        description:
            "Crispy pita, white yogurt sauce, salad mix, tomato, blue onion, pickled cucumber, chicken, veal, cheese sauce.",
        price: 3.25,
    },
    {
        id: "m4",
        name: "VEGETARIAN DONER KEBAB",
        description:
            "Crispy pita, white yogurt-based sauce, salad mix, tomato, blue onion, pickled cucumber, a combination of fried vegetables: bell peppers, mushrooms, corn, zucchini, and yogurt-based cheese sauce.",
        price: 2.44,
    },
    {
        id: "m5",
        name: "GERMAN CHICKEN KEBAB",
        description:
            "Sesame bun, combination of fried vegetables: bell peppers, mushrooms, corn, zucchini, tomato, blue onion, chicken, cheese sauce",
        price: 3.22,
    },
    {
        id: "m6",
        name: "GERMAN VEAL KEBAB",
        description:
            "Sesame bun, combination of fried vegetables: bell peppers, mushrooms, corn, zucchini, tomato, blue onion, veal, cheese sauce.",
        price: 3.65,
    },
];

const MealList = () => {
    const mealList = DUMMY_MEALS.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));
    return (
        <section className={styles.meals}>
            <Card>
                <ul>{mealList}</ul>
            </Card>
        </section>
    );
};

export default MealList;
