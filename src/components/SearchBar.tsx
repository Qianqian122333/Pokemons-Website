import { Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup size={{ base: "md", lg: "lg" }}>
        <InputLeftElement pointerEvents="none">
          <Icon as={BsSearch as any} />
        </InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Pokemon..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
