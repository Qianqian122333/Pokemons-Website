import { HStack, Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";

interface Props {
  selectedType?: String | null;
  selectedColor?: String | null;
  onClearType: () => void;
  onClearColor: () => void;
}

const PokeHeading = ({
  selectedType,
  selectedColor,
  onClearType,
  onClearColor,
}: Props) => {
  if (!selectedType && !selectedColor) return null;

  return (
    <HStack spacing={2}>
      {selectedType && (
        <Tag size="lg" colorScheme="blue" borderRadius="full">
          <TagLabel>{selectedType}</TagLabel>
          <TagCloseButton onClick={onClearType} />
        </Tag>
      )}
      {selectedColor && (
        <Tag size="lg" colorScheme="green" borderRadius="full">
          <TagLabel>{selectedColor}</TagLabel>
          <TagCloseButton onClick={onClearColor} />
        </Tag>
      )}
    </HStack>
  );
};

export default PokeHeading;
