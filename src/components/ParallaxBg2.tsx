import { Parallax } from "react-parallax";
import { useBreakpointValue, Text } from "@chakra-ui/react";

import sfondoTest from "../assets/sfondo-2-test.webp";
import sfondoTestMobile from "../assets/sfondo-2-test-mobile.webp";

const ParallaxBg2 = () => {
  const bgImage = useBreakpointValue({
    base: sfondoTestMobile,
    sm: sfondoTestMobile,
    md: sfondoTest,
    lg: sfondoTest,
  });

  const title = useBreakpointValue({
    base: "1.5em",
    md: "2.375em",
  });

  return (
    <Parallax
      className="sfondo-2"
      bgImage={bgImage}
      bgImageStyle={{
        height: "850px",
      }}
      strength={800}
    >
      <div className="content-2">
        <Text textAlign="right" marginLeft="35%" fontSize={title} lineHeight="1.4">
          IMAGE LAB TOOLS
        </Text>
        <Text textAlign="right" marginLeft="45%" fontSize="1.25em" lineHeight="1.4">
          CREATED BY BLA BLA BLA
        </Text>
      </div>
    </Parallax>
  );
};

export default ParallaxBg2;
