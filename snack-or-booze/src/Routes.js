// Routes.js
import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import Form from "./AddFoodItemForm";

const Routes = ({ snacks, drinks, addSnack, addDrink }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home snacks={snacks} drinks={drinks} />
      </Route>
      <Route exact path="/snacks">
        <Menu data={snacks} title="Snacks" />
      </Route>
      <Route exact path="/drinks">
        <Menu data={drinks} title="Drinks" />
      </Route>
      <Route path="/snacks/:id">
        <Snack items={snacks} cantFind="/snacks" />
      </Route>
      <Route path="/drinks/:id">
        <Snack items={drinks} cantFind="/drinks" />
      </Route>
      <Route exact path="/addItem">
        <Form addDrink={addDrink} addSnack={addSnack} />
      </Route>
      <Route path='*'>
        <h1 style={{color: 'black', fontSize: `${5}rem`}}>404 page not found</h1>
        <Link to='/'>Go home</Link>
      </Route>
    </Switch>
  );
};

export default Routes;
