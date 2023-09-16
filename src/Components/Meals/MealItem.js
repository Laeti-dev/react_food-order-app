import React from "react";

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const MealItem = (props) => {
  return (
    <React.Fragment>
      <div>
        <h2>Meal name</h2>
        <p>Meal description</p>
        <p>Meal price</p>
      </div>

      <div>
        <form>
        <label>Quantity</label>
        <input
              type="number"
              min= "0"
              max= "10"
          />
          </form>
          <button type="submit">Add</button>
        </div>
    </React.Fragment>
  );
};

export default MealItem;
