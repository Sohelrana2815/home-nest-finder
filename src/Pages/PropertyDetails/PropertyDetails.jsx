import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  //   console.log(properties, idInt);

  const estate = estates.find((estate) => estate.id === idInt);

  return (
    <div>
      <h2>{estate.estate_title} </h2>
      <img src={estate.image} alt="" />
    </div>
  );
};

export default PropertyDetails;
