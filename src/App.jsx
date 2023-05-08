import "./App.css";
import { useLoaderData } from "react-router-dom";

function App() {
  const loadedCoffee = useLoaderData();
  return (
    <>
      <h1 className="text-6xl text-purple-600">Coffee Store</h1>
    </>
  );
}

export default App;
