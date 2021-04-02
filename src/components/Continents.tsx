import { Box, Flex, Heading } from "@chakra-ui/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slider } from "./Slider";

SwiperCore.use([Navigation, Pagination]);

export default function Continents() {
  return (
    <Box as="section">
      <Heading textAlign="center" fontSize={["xl", "2xl", "3xl"]} mb="14">
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>
      <Slider />
    </Box>
  );
}
