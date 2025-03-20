import React, { useEffect, useState } from "react";

const Card = ({ img, foodName, starRating, foods, place, distance, cost }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 m-4 w-64 text-center">
      <img src={img} alt={foodName} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-xl font-semibold mt-2">{foodName}</h3>
      <p className="text-yellow-500 text-lg">{starRating}</p>
      <p className="text-gray-600">Foods: {foods.join(", ")}</p>
      <p className="text-gray-500 mt-1">{place}</p>
      <p className="text-gray-400">{distance}</p>
      <p className="text-green-600 font-bold">{cost}</p>
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
    <div className="flex flex-wrap justify-center p-4">
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
