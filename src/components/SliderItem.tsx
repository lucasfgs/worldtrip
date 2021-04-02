import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { SwiperSlide } from "swiper/react";

export function SliderItem() {
  return (
    <SwiperSlide>
      <Flex
        width="100%"
        height={{ base: "250px", md: "450px" }}
        direction="column"
        align="center"
        justify="center"
        position="relative"
      >
        <Box
          backgroundImage={`url(images/africa.jpg)`}
          backgroundSize="cover"
          width="100%"
          height="100%"
          position="absolute"
          filter={"brightness(0.5)"}
          zIndex="-1"
        />
        <Heading color="white" fontWeight="bold" fontSize="5xl">
          África
        </Heading>
        <Text color="white" fontWeight="bold" fontSize="2xl">
          O continente mais antigo
        </Text>
      </Flex>
    </SwiperSlide>
  );
}
