// components/Card.jsx
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const CardComponent = ({ pokemon }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card className="py-4" style={{ backgroundColor: "#2C2C2C", color: "#FFF" }}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Pokémon</p>
          <small className="text-default-400">#{pokemon.id}</small>
          <h4 className="font-bold text-large">{pokemon.name}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt={pokemon.name}
            className="object-cover rounded-xl"
            src={pokemon.image}
            width={270}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default CardComponent;