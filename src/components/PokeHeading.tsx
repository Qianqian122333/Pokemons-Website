import { HStack, Tag, TagLabel } from "@chakra-ui/react";

interface Props {
  selectedType?: String | null;
  selectedColor?: String | null;
}

const PokeHeading = ({ selectedType, selectedColor }: Props) => {
  if (!selectedType && !selectedColor) return null;

  return (
    <HStack spacing={2}>
      {selectedType && (
        <Tag size="lg" colorScheme="blue" borderRadius="full">
          <TagLabel>{selectedType}</TagLabel>
        </Tag>
      )}
      {selectedColor && (
        <Tag size="lg" colorScheme="green" borderRadius="full">
          <TagLabel>{selectedColor}</TagLabel>
        </Tag>
      )}
    </HStack>
  );
};

export default PokeHeading;
