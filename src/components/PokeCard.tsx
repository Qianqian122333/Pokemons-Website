import {
  Card,
  CardBody,
  Heading,
  Image,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { Pokemon } from "../hooks/usePokemons";
import { useEffect, useState } from "react";

interface PokeCardProps {
  pokemon: Pokemon;
}

interface PokemonDetail {
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

const PokeCard = ({ pokemon }: PokeCardProps) => {
  const [details, setDetails] = useState<PokemonDetail | null>(null);

  useEffect(() => {
    fetch(pokemon.url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [pokemon.url]);

  return (
    <Card borderRadius={10}>
      <Image
        src={details?.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <CardBody>
        <Heading fontSize="2xl">{pokemon.name}</Heading>
        <HStack mt={2}>
          {details?.types.map((t) => (
            <Badge
              key={t.type.name}
              fontSize="14px"
              paddingX={2}
              borderRadius={4}
            >
              {t.type.name}
            </Badge>
          ))}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default PokeCard;
