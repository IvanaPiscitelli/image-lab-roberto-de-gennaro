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

  const { bgImage, bgImagePosition, bgImageAttachment, bgImageHeight, bgImageSize } = bgImageConfig;

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
          <Text textAlign="right" fontSize="2.375rem" lineHeight="1.1" ml="45%" mr="8%" mb="0.5em" mt="5%">
            Award Winning Male Grooming
          </Text>
        </Show>
        <Text textAlign="right" fontSize="1.25rem" lineHeight="1.4" ml="45%" mr="8%">
          IMAGE LAB presents the revolutionary transition between precision barbering and contemporary hairdressing.
        </Text>
      </Flex>
    </div>
  );
};

export default ParallaxBg1;
