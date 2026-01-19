import {
  HStack,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useColors from "../hooks/usePokeColor";

const ColorList = () => {
  const { data: colors, error, isLoading } = useColors();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List padding={"15px"}>
      <Heading fontSize="xl" marginBottom={3}>
        Colors
      </Heading>
      {colors.map((color) => (
        <ListItem key={color.name} paddingY="10px">
          <HStack justifyContent={"center"}>
            <Button
              whiteSpace="normal"
              textAlign="left"
              fontWeight="normal" // 字体不需要太粗，保持舒适
              fontSize="lg"
              variant="link"
            >
              {color.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default ColorList;
