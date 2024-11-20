import FoodList from "./components/FoodList";
import Search from "./components/search";
import { useState } from "react";
import Nav from "./components/Nav";
import "./App.css"
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  // comment
  const [foodData, setFoodData]= useState([]);
  const[foodId, setFoodId]= useState(["658615"]);
  return <div className="App">
    <Nav />
    <Search foodData={foodData} setFoodData={setFoodData}/>
    <Container>
      <InnerContainer>
        <FoodList setFoodId={setFoodId} foodData={foodData} />
      </InnerContainer>
      <InnerContainer>
        <FoodDetails foodId={foodId}/>
      </InnerContainer>
    </Container>
    </div>
}

export default App;
