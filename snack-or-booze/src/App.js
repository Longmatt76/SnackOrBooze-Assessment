import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Routes from "./Routes";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const snackData = await SnackOrBoozeApi.getSnacks();
        const drinkData = await SnackOrBoozeApi.getDrinks();
        setSnacks(snackData);
        setDrinks(drinkData);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  async function addDrink(name, description, recipe, serve) {
    const newDrink = await SnackOrBoozeApi.postDrinks(
      name,
      description,
      recipe,
      serve
    );
    setDrinks((drinks) => [...drinks, newDrink]);
  }

  async function addSnack(name, description, recipe, serve) {
    const newSnack = await SnackOrBoozeApi.postSnacks(
      name,
      description,
      recipe,
      serve
    );
    setSnacks((snacks) => [...snacks, newSnack]);
  }

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes
            snacks={snacks}
            drinks={drinks}
            addSnack={addSnack}
            addDrink={addDrink}
          />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

