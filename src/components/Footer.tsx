import {
  Box,
  Container,
  Text,
  Link,
  Stack,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      py={4}
      mt={8}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text fontSize="sm">© {year} PokeWeb. All rights reserved.</Text>
        <Stack direction={"row"} spacing={6}>
          <Text display="flex" alignItems="center">
            <Icon as={FaHeart} color="red.400" mr={2} />
            Developed with love
          </Text>
          <Link href={"https://github.com/Qianqian122333"} isExternal>
            <Icon as={FaGithub} boxSize={5} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/qianqianwei112233/"}
            isExternal
          >
            <Icon as={FaLinkedin} boxSize={5} />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
