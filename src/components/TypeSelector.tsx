import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import useTypes from "../hooks/useTypes";
import { S } from "framer-motion/dist/types.d-CQ4vRM6h";

interface Props {
  onSelectType?: (type: string) => void;
  selectedType?: String | null;
}

const TypeSelector = ({ onSelectType, selectedType }: Props) => {
  const { data, error, isLoading } = useTypes();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {selectedType || "Types"}
      </MenuButton>
      <MenuList>
        {isLoading && <Spinner ml={4} my={2} />}
        {data.map((type) => (
          <MenuItem
            onClick={() => onSelectType && onSelectType(type.name)}
            key={type.name}
          >
            {type.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TypeSelector;
