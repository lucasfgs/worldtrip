import { Box, Center, Divider, Flex, Heading } from "@chakra-ui/react";
import { Banner } from "components/Banner";
import Continents from "components/Continents";
import { Header } from "components/Header";
import { TravelTypes } from "components/TravelTypes";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Box as="main" width="100%" px={["14", "20", "28", "32", "72"]} mx="auto">
        <TravelTypes />
        <Center height="150px">
          <Divider orientation="horizontal" width={90} borderColor="gray.900" />
        </Center>
        <Continents />
      </Box>
    </Flex>
  );
}
