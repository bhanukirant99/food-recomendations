import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [currentFoodList, setCurrentFoodList] = useState([]);

  const handleButtonClick = (type) => {
    if (type === "fruits") {
      setCurrentFoodList(fruitsArray);
    } else if (type === "vegetables") {
      setCurrentFoodList(vegetablesArray);
    } else {
      setCurrentFoodList(healthyArray);
    }
  };
  console.log(currentFoodList);

  const fruitsArray = [
    { logo: "🍌", name: "Banana" },
    { logo: "🥭", name: "Mango" },
    { logo: "🥝", name: "Kiwi Fruit" }
  ];

  const vegetablesArray = [
    { logo: "🥕", name: "Carrot" },
    { logo: "🥔", name: "Potato" },
    { logo: "🥦", name: "Broccoli" }
  ];

  const healthyArray = [
    { logo: "🍄", name: "Mushroom" },
    { logo: "🥜", name: "Peanuts" },
    { logo: "🌰", name: "Chestnut" }
  ];

  // const fruitsList = Object.keys(fruitsDictonary);

  // console.log(fruitsListNames);

  // const vegetablesList = Object.keys(vegetablesDictonary);

  // const healthyList = Object.keys(healthyDictonary);

  return (
    <div className="App">
      <h1>🍔 My Healthy Food List</h1>
      <h4>Checkout my favorite food. Select a genre to get started</h4>
      <div className="buttons-list">
        <button onClick={() => handleButtonClick("fruits")}>Fruits</button>
        <button onClick={() => handleButtonClick("vegetables")}>
          vegetables
        </button>
        <button onClick={() => handleButtonClick("healthy")}>
          Healthy Snacks
        </button>
      </div>
      <hr />
      <div className="food-list">
        {currentFoodList?.map((item) => (
          <div className="food-item">
            <h1>{item.name}</h1>
            <span>{item.logo}</span>
          </div>
        ))}
      </div>
      {/* {fruitsList.map((fruit) => (
        <span
          key={fruit}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          onClick={() => handleFruitCLick(fruit)}
        >
          {fruit}
        </span>
      ))}
      {vegetablesDictonary.map((vegetable) => (
        <span
          key={vegetable}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          onClick={() => handleVegetableCLick(vegetable)}
        >
          {vegetable}
        </span>
      ))}
      {healthyList.map((health) => (
        <span
          key={health}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          onClick={() => handleHealthCLick(health)}
        >
          {health}
        </span>
      ))} */}
    </div>
  );
}
