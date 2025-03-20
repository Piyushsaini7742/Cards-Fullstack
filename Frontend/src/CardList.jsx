import React, { useEffect, useState } from "react";

const Card = ({ img, foodName, starRating, foods, place, distance, cost }) => {
  return (
    <div>
      <img src={img} alt={foodName} width="200" />
      <h3>{foodName}</h3>
      <p>⭐{starRating}</p>
      <p>Foods: {foods.join(", ")}</p>
      <p>{place}</p>
      <p>{distance}</p>
      <p>{cost}</p>
    </div>
  );
};

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://cards-full-stack.onrender.com/cards")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {cards.map((item, index) => (
        <Card
          key={index}
          img={item.img}
          foodName={item.foodName}
          starRating={item.starRating}
          foods={item.foods}
          place={item.place}
          distance={item.distance}
          cost={item.cost}
        />
      ))}
    </div>
  );
};

export default CardList;
