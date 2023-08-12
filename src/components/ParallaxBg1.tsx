import { Box, Flex, Show, Text, useBreakpointValue } from "@chakra-ui/react";

import sfondoTest from "../assets/sfondo-test.webp";
import sfondoTestMobile from "../assets/sfondo-test-mobile.webp";

const ParallaxBg1 = () => {
  const bgImageConfig = {
    bgImage: useBreakpointValue({
      base: sfondoTestMobile,
      sm: sfondoTestMobile,
      md: sfondoTest,
      lg: sfondoTest,
    }),
    bgImagePosition: useBreakpointValue({
      base: "center center",
      md: "",
    }),
    bgImageAttachment: useBreakpointValue({
      base: "fixed",
      md: "fixed",
    }),
    bgImageHeight: useBreakpointValue({
      base: "110vh",
      md: "56vh",
      lg: "73vh",
      xl: "97vh",
      "2xl": "100vh",
    }),
    bgImageSize: useBreakpointValue({
      base: "120vw auto",
      md: "110% auto",
    }),
  };

  const textConfig = {
    ml: useBreakpointValue({
      base: "2em",
      md: "45%",
    }),
    mr: useBreakpointValue({
      base: "3em",
      md: "8%",
    }),
    mt: useBreakpointValue({
      base: "30em",
      md: "",
    }),
    color: useBreakpointValue({
      base: "white",
      md: "black",
    }),
  };

  const { bgImage, bgImagePosition, bgImageAttachment, bgImageHeight, bgImageSize } = bgImageConfig;
  const { ml, mr, mt, color } = textConfig;

  return (
    <Box
      bgImage={`url(${bgImage})`}
      bgRepeat="no-repeat"
      bgPosition={bgImagePosition}
      bgAttachment={bgImageAttachment}
      bgSize={bgImageSize}
      h={bgImageHeight}
      position="relative"
    >
      <Flex
        position="absolute"
        top={0}
        h="88%"
        w="100%"
        justifyContent="center"
        flexDirection="column"
        alignItems="flex-end"
      >
        <Show above="md">
          <Text
            textAlign="right"
            fontSize="2.375rem"
            lineHeight="1.1"
            ml="45%"
            mr="8%"
            mb="0.5em"
            mt="5%"
            fontWeight={400}
            fontFamily="Quicksand"
            color="black"
          >
            Award Winning Male Grooming
          </Text>
        </Show>
        <Text
          textAlign={{ base: "center", md: "right" }}
          fontSize="1.25rem"
          lineHeight="1.4"
          ml={ml}
          mr={mr}
          mt={mt}
          color={color}
        >
          IMAGE LAB presents the revolutionary transition between precision barbering and contemporary hairdressing.
        </Text>
      </Flex>
    </Box>
  );
};

export default ParallaxBg1;
