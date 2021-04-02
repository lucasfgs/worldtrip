import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderItem } from "./SliderItem";

export function Slider() {
  return (
    <Box
      as={Swiper}
      mb="10"
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
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
            backgroundImage={`url(images/europe.png)`}
            backgroundSize="cover"
            width="100%"
            height="100%"
            position="absolute"
            filter={"brightness(1)"}
            zIndex="-1"
          />
          <Heading color="white" fontWeight="bold" fontSize="5xl">
            Europa
          </Heading>
          <Text color="white" fontWeight="bold" fontSize="2xl">
            O continente mais antigo
          </Text>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          width="100%"
          height={{ base: "250px", md: "450px" }}
          direction="column"
          align="center"
          justify="center"
        >
          <Box
            backgroundImage={`url(images/north-america.jpg)`}
            backgroundSize="cover"
            width="100%"
            height="100%"
            position="absolute"
            filter={"brightness(0.5)"}
            zIndex="-1"
          />
          <Heading color="white" fontWeight="bold" fontSize="5xl">
            América do norte
          </Heading>
          <Text color="white" fontWeight="bold" fontSize="2xl">
            O continente mais antigo
          </Text>
        </Flex>
      </SwiperSlide>
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
            backgroundImage={`url(images/central-america.jpg)`}
            backgroundSize="cover"
            width="100%"
            height="100%"
            position="absolute"
            filter={"brightness(0.5)"}
            zIndex="-1"
          />
          <Heading color="white" fontWeight="bold" fontSize="5xl">
            América central
          </Heading>
          <Text color="white" fontWeight="bold" fontSize="2xl">
            O continente mais antigo
          </Text>
        </Flex>
      </SwiperSlide>
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
            backgroundImage={`url(images/south-america.jpg)`}
            backgroundSize="cover"
            width="100%"
            height="100%"
            position="absolute"
            filter={"brightness(0.5)"}
            zIndex="-1"
          />
          <Heading color="white" fontWeight="bold" fontSize="5xl">
            América do sul
          </Heading>
          <Text color="white" fontWeight="bold" fontSize="2xl">
            O continente mais antigo
          </Text>
        </Flex>
      </SwiperSlide>
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
            backgroundImage={`url(images/asia.jpg)`}
            backgroundSize="cover"
            width="100%"
            height="100%"
            position="absolute"
            filter={"brightness(0.5)"}
            zIndex="-1"
          />
          <Heading color="white" fontWeight="bold" fontSize="5xl">
            Ásia
          </Heading>
          <Text color="white" fontWeight="bold" fontSize="2xl">
            O continente mais antigo
          </Text>
        </Flex>
      </SwiperSlide>
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
            backgroundImage={`url(images/oceania.jpg)`}
            backgroundSize="cover"
            width="100%"
            height="100%"
            position="absolute"
            filter={"brightness(0.5)"}
            zIndex="-1"
          />
          <Heading color="white" fontWeight="bold" fontSize="5xl">
            Oceânia
          </Heading>
          <Text color="white" fontWeight="bold" fontSize="2xl">
            O continente mais antigo
          </Text>
        </Flex>
      </SwiperSlide>
    </Box>
  );
}
