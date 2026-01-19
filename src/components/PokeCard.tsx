import {
  Card,
  CardBody,
  Heading,
  Image,
  Badge,
  HStack,
  Text,
} from "@chakra-ui/react";
import { Pokemon } from "../hooks/usePokemons";
import { useEffect, useState } from "react";

interface PokeCardProps {
  pokemon: Pokemon;
}

interface PokemonDetail {
  base_experience: number;
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
    <Card>
      <Image
        src={details?.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <CardBody>
        <Heading fontSize="2xl">{pokemon.name}</Heading>
        <HStack mt={2} justifyContent={"space-between"}>
          <HStack spacing={2} direction="row">
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

          <Text
            fontSize="14px"
            fontWeight="bold"
            color={
              (details?.base_experience || 0) > 200
                ? "green.300"
                : (details?.base_experience || 0) > 100
                  ? "yellow.500"
                  : "gray.500"
            }
          >
            EXP : {details?.base_experience}
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default PokeCard;
