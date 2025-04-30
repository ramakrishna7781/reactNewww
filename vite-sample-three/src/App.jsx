import { useState } from "react";

function App(){
  const[food, setFood] = useState(["Apple","Orange","Banana"]);
  
  function handleAddFood(event){
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFood(f=>([...f, newFood]));
  }
  function handleRemoveFood(index){
    setFood(food.filter((_, i) => i != index));
  }

  return(
    <div>
      <h2>List of Food:</h2>
      <ul>
        {food.map((foods, index) => <li key={index} onClick={()=>handleRemoveFood(index)}>{foods}</li>)}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name"/>
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}
export default App;