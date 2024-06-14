import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

export default function CardsTable() {
  const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    const response = axios
      .get("user/papers")
      .then((response) => {
        setCardsData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log(cardsData);

  return (
    <div className="grid grid-cols-5 gap-6">
      {cardsData.map((card) => (
        <Card key={card.id} title={card.title} />
      ))}

      <Card btn={true} />
    </div>
  );
}
