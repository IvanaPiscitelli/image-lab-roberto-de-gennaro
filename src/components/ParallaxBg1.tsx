import { Flex, Show, Text, useBreakpointValue } from "@chakra-ui/react";

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
      base: "100vh",
      md: "56vh",
      lg: "73vh",
      xl: "97vh",
      "2xl": "100vh",
    }),
    bgImageSize: useBreakpointValue({
      base: "auto 100%",
      md: "110% auto",
    }),
  };

  const textConfig = {
    marginLeft: useBreakpointValue({
      base: "2em",
      md: "45%",
    }),
    marginRight: useBreakpointValue({
      base: "3em",
      md: "8%",
    }),
    marginTop: useBreakpointValue({
      base: "30em",
      md: "",
    }),
    color: useBreakpointValue({
      base: "white",
      md: "black",
    }),
  };

  // 2em;
  // margin-right: 3em;
  // color: var(--chakra-colors-white);
  // margin-top: 30em;

  const { bgImage, bgImagePosition, bgImageAttachment, bgImageHeight, bgImageSize } = bgImageConfig;
  const { marginLeft, marginRight, marginTop, color } = textConfig;

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: bgImagePosition,
        backgroundAttachment: bgImageAttachment,
        backgroundSize: bgImageSize,
        height: bgImageHeight,
        position: "relative",
      }}
    >
      <Flex
        position="absolute"
        top={0}
        height="100%"
        width="100%"
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
          >
            Award Winning Male Grooming
          </Text>
        </Show>
        <Text
          textAlign={{ base: "center", md: "right" }}
          fontSize="1.25rem"
          lineHeight="1.4"
          ml={marginLeft}
          mr={marginRight}
          color={color}
          marginTop={marginTop}
        >
          IMAGE LAB presents the revolutionary transition between precision barbering and contemporary hairdressing.
        </Text>
      </Flex>
    </div>
  );
};

export default ParallaxBg1;
