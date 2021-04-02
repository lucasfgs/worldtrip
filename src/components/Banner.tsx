import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box
      backgroundImage="url(images/background.png)"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      width="100%"
      maxHeight={335}
      pt="4"
      px={["14", "20", "28", "32", "72"]}
    >
      <Flex
        mx="auto"
        direction={["column-reverse", "row"]}
        justify={{ base: "center", md: "space-between" }}
        py={{ base: "4", md: "0" }}
      >
        <Box maxWidth={480} alignSelf="center">
          <Heading color="white" fontSize="3xl" mb={{ base: "2", md: "8" }}>
            7 Continentes, infinitas possibilidades.
          </Heading>
          <Text color="white" fontSize="lg">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        {isWideVersion && (
          <Image
            marginTop="14"
            src="images/airplane.svg"
            transform="rotate(3deg)"
            alignSelf="flex-end"
          />
        )}
      </Flex>
    </Box>
  );
}
