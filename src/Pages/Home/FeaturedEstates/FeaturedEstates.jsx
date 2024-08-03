import { useEffect, useState } from "react";
import EstateCard from "../EstateCard/EstateCard";
const FeaturedEstates = () => {
  const [limitedEstates, setLimitedEstates] = useState([]);
  useEffect(() => {
    fetch("estatesData.json")
      .then((res) => res.json())
      .then((data) => setLimitedEstates(data.slice(0, 6)))
      .catch((error) => console.error("Error loading data: ", error));
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mt-36">
        {limitedEstates.map((estate) => (
          <EstateCard key={estate.id} estate={estate} />
        ))}
      </div>
    </>
  );
};

export default FeaturedEstates;
