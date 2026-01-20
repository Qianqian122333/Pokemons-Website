import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  Text,
  VStack,
  HStack,
  Badge,
  Progress,
  Box,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Pokemon } from "../hooks/usePokemons";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  pokemon: Pokemon | null;
}

interface PokemonFullDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

const PokeDetailModal = ({ isOpen, onClose, pokemon }: Props) => {
  const [details, setDetails] = useState<PokemonFullDetail | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (pokemon) {
      setIsLoading(true);
      // 使用 pokemon.name 或者解析 pokemon.url 来获取
      apiClient
        .get<PokemonFullDetail>(`/pokemon/${pokemon.name}`)
        .then((res) => {
          setDetails(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        });
    }
  }, [pokemon]);

  if (!pokemon) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textTransform="capitalize" fontSize="3xl">
          {pokemon.name}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : details ? (
            <VStack spacing={5} align="stretch">
              <Box display="flex" justifyContent="center">
                <Image
                  src={
                    details.sprites.other["official-artwork"].front_default
                  }
                  alt={details.name}
                  boxSize="200px"
                  objectFit="contain"
                />
              </Box>

              <HStack justifyContent="center" spacing={4}>
                {details.types.map(({ type }) => (
                  <Badge key={type.name} fontSize="1em" colorScheme="green">
                    {type.name}
                  </Badge>
                ))}
              </HStack>

              <SimpleGrid columns={2} spacing={10}>
                <Stat>
                  <StatLabel>Height</StatLabel>
                  <StatNumber>{details.height / 10} m</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Weight</StatLabel>
                  <StatNumber>{details.weight / 10} kg</StatNumber>
                </Stat>
              </SimpleGrid>

              <Box>
                <Heading size="md" mb={2}>Abilities</Heading>
                <HStack>
                  {details.abilities.map(({ ability }) => (
                    <Badge key={ability.name} variant="outline" colorScheme="purple">
                      {ability.name}
                    </Badge>
                  ))}
                </HStack>
              </Box>

              <Box>
                <Heading size="md" mb={2}>Stats</Heading>
                <VStack spacing={3} align="stretch">
                  {details.stats.map((stat) => (
                    <Box key={stat.stat.name}>
                      <HStack justifyContent="space-between">
                        <Text textTransform="capitalize">{stat.stat.name}</Text>
                        <Text fontWeight="bold">{stat.base_stat}</Text>
                      </HStack>
                      <Progress
                        value={stat.base_stat}
                        max={150} // 假设最大值为150
                        colorScheme={
                          stat.base_stat > 100
                            ? "green"
                            : stat.base_stat > 50
                            ? "yellow"
                            : "red"
                        }
                        size="sm"
                        borderRadius="md"
                      />
                    </Box>
                  ))}
                </VStack>
              </Box>
            </VStack>
          ) : (
            <Text>Failed to load details.</Text>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PokeDetailModal;
