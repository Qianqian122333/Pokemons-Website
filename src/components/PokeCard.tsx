import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Pokemon } from "../hooks/usePokemons";
import { useEffect, useState } from "react";
interface PokeCardProps {
  pokemon: Pokemon;
}

const PokeCard = ({ pokemon }: PokeCardProps) => {
  const [img, setImg] = useState("");
  useEffect(() => {
    // 这里直接使用 name，不需要知道 ID 是多少
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then((res) => res.json())
      .then((data) => {
        setImg(
          data.sprites.other["official-artwork"].front_default ||
            data.sprites.front_default,
        );
      });
  }, [pokemon]);
  return (
    <Card borderRadius={10}>
      <Image src={img} alt={pokemon.name} />
      <CardBody>
        <Heading fontSize="2xl">{pokemon.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default PokeCard;
