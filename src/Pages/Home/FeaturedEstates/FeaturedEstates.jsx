import { useEffect, useState } from "react";
const FeaturedEstates = () => {
  const [limitedEstates, setLimitedEstates] = useState([]);
  useEffect(() => {
    fetch("estatesData.json")
      .then((res) => res.json())
      .then((data) => setLimitedEstates(data.slice(0, 6)))
      .catch((error) => console.error("Error loading data: ", error));
  }, []);
  return (
    <div>
      <h2>{limitedEstates.length}</h2>
      <div>{}</div>
    </div>
  );
};

export default FeaturedEstates;
