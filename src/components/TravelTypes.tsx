import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";

export function TravelTypes() {
  return (
    <SimpleGrid as="section" minChildWidth="160px" gap="4" pt="24">
      <Flex direction="column" justify="center" align="center">
        <Image src="images/icons/cocktail.svg" />
        <Text fontSize="xl" mt="4" color="gray.800">
          vida noturna
        </Text>
      </Flex>
      <Flex direction="column" justify="center" align="center">
        <Image src="images/icons/surf.svg" />
        <Text fontSize="xl" mt="4" color="gray.800">
          praia
        </Text>
      </Flex>
      <Flex direction="column" justify="center" align="center">
        <Image src="images/icons/building.svg" />
        <Text fontSize="xl" mt="4" color="gray.800">
          moderno
        </Text>
      </Flex>
      <Flex direction="column" justify="center" align="center">
        <Image src="images/icons/museum.svg" />
        <Text fontSize="xl" mt="4" color="gray.800">
          clássico
        </Text>
      </Flex>
      <Flex direction="column" justify="center" align="center">
        <Image src="images/icons/earth.svg" />
        <Text fontSize="xl" mt="4" color="gray.800">
          e mais...
        </Text>
      </Flex>
    </SimpleGrid>
  );
}
