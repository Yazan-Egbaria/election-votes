import { useEffect, useState } from "react";
import Card from "../../components/MainPageComponents/Card";
import biden from "../../assets/images/biden.jpeg";
import trump from "../../assets/images/trump.jpeg";
import obama from "../../assets/images/obama.jpeg";

const CardsSection = () => {
  const [presidents, setPresidents] = useState([]);
  const presidentsURL =
    "https://6738a9ca4eb22e24fca8988e.mockapi.io/presidents";

  useEffect(() => {
    const fetchPresidents = async () => {
      const fetchPresidents = await fetch(presidentsURL);
      const presidents = await fetchPresidents.json();
      setPresidents(presidents);
    };

    fetchPresidents();
  }, []);

  const getPresidentName = (name) => {
    switch (name) {
      case "Joe Biden":
        return biden;
      case "Donald Trump":
        return trump;
      case "Barack Obama":
        return obama;
    }
  };

  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4 md:p-6 lg:flex-row lg:flex-wrap lg:gap-4 lg:p-8 xl:p-12 2xl:gap-8 2xl:px-16">
      {presidents.map((president) => {
        return (
          <Card
            key={president.id}
            src={getPresidentName(president.name)}
            {...president}
          />
        );
      })}
    </div>
  );
};

export default CardsSection;
