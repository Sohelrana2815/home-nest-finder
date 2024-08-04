import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {
  const properties = useLoaderData();
  const { id } = useParams();

  const idInt = parseInt(id);




  
  console.log(properties, idInt);

  return (
    <div>
      <h2>The Property details will be here soon!</h2>
    </div>
  );
};

export default PropertyDetails;
