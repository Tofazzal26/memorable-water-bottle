import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json?fbclid=IwAR0ASyt_HXSE6gkXlHBeQVYmUL11FWHGxWQ1gGQIr_Mp2orQSEf99JmGt7E"
    )
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const [selects, setSelects] = useState([]);

  const handleSelected = (select) => {
    const newSelect = [...selects, select];
    setSelects(newSelect);
  };

  return (
    <div>
      <h2 className="header">Memorable-Water-Bottle</h2>
      <h4 className="available">Bottle Available: {bottles.length}</h4>
      <h4 className="selected">Selected Cart: {selects.length}</h4>
      <div className="bottleGrid">
        {bottles.map((bottle) => (
          <Bottle
            bottle={bottle}
            key={bottle.id}
            handleSelected={handleSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
